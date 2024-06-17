<script setup>
import { ref, onMounted } from 'vue';
import { useFirestore, useFirebaseStorage, useDocument } from 'vuefire';
import { updateDoc, doc } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { useProfileManager } from '@/composables/useProfileManager';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
const fileUploaderRef = ref(null);
const uploadFile = ref(null);
const toast = useToast();
const route = useRoute();
const db = useFirestore();
const storage = useFirebaseStorage();
const collectionName = 'admins';
const { profile, user, sourceProfile } = useProfileManager();

const genders = ref([
    { name: 'female', label: 'Féminin' },
    { name: 'mal', label: 'Masculin' }
]);

const saveProfile = async () => {
    const docRef = doc(db, collectionName, user.value.uid);
    profile.value.updatedAt = Date.now();
    await updateDoc(docRef, { ...profile.value })
        .then(() => {
            toast.add({ severity: 'success', summary: `Enregistré `, detail: `${profile.value.fireName} ${profile.value.lastName} est enregistré(e) avec succès.`, life: 3000 });
        })
        .catch((error) => {
            toast.add({ severity: 'error', summary: `Error ${error.message}`, detail: error.message, life: 3000 });
        });
};

const onSave = async () => {
    if (uploadFile.value) {
        if (profile.value.avatar && profile.value.avatar.path) {
            const desertRef = storageRef(storage, profile.value.avatar.path);
            await deleteObject(desertRef);
        }
        const avatar = {
            path: `${collectionName}/${Date.now()}_${uploadFile.value.name}`
        };
        profile.value.avatar = avatar;
        await uploadItemFile();
    } else await saveProfile();
};

const uploadItemFile = async () => {
    const itemFileRef = storageRef(storage, profile.value.avatar.path);
    const uploadTask = uploadBytesResumable(itemFileRef, uploadFile.value);
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('progress ', progress);
        },
        (error) => {
            console.error('Upload failed', error);
        },
        async () => {
            try {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                profile.value.avatar.url = url;
                await saveProfile();
            } catch (error) {
                console.error('Error getting download URL or saving product: ', error);
            }
        }
    );
};

const onChooseUploadFiles = () => {
    fileUploaderRef.value.choose();
};
const onSelectedFiles = (event) => {
    uploadFile.value = event.files[0];
};
const onRemoveFile = () => {
    uploadFile.value = null;
};

const onRemoveStoredFile = () => {
    profile.value.avatar.url = null;
};

onMounted(() => {
    sourceProfile.value = useDocument(doc(db, collectionName, route.params.id));
});
</script>

<template>
    <div class="card">
        <span class="text-900 text-xl font-bold mb-4 block">Create User</span>
        <div class="grid">
            <div class="col-12 lg:col-2">
                <div class="text-900 font-medium text-xl mb-3">Profile</div>
            </div>
            <div class="col-12 lg:col-10">
                <div class="grid formgrid p-fluid">
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="firstname" class="font-medium text-900"> Prénom </label>
                        <InputText id="firstname" type="text" v-model="profile.firstName" />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="lastname" class="font-medium text-900"> Nome </label>
                        <InputText id="lastname" type="text" v-model="profile.lastName" />
                    </div>

                    <div class="field mb-4 col-12 md:col-6">
                        <label for="lastname" class="font-medium text-900"> Genre </label>
                        <Dropdown :options="genders" optionLabel="label" v-model="profile.gender" placeholder="Sélectioner une option" class="mb-3"></Dropdown>
                    </div>

                    <div class="field mb-4 col-12">
                        <div class="card">
                            <label for="avatar" class="font-medium text-900"> Avatar </label>

                            <FileUpload
                                ref="fileUploaderRef"
                                id="files-fileupload"
                                name="demo[]"
                                url="./upload.php"
                                accept="image/*"
                                customUpload
                                auto
                                class="upload-button-hidden w-full"
                                invalidFileSizeMessage="Invalid File Size"
                                invalidFileTypeMessage="Invalid File Type"
                                :maxFileSize="5000000"
                                @select="onSelectedFiles"
                                :pt="{
                                    buttonbar: { class: 'hidden' },
                                    content: { class: 'border-none' }
                                }"
                            >
                                <template #content>
                                    <div v-if="uploadFile || (profile.avatar && profile.avatar.url)" class="w-full py-3" :style="{ cursor: 'copy' }">
                                        <div class="flex flex-wrap gap-5">
                                            <div
                                                v-if="uploadFile && uploadFile.objectURL"
                                                class="remove-file-wrapper h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto"
                                                :style="{ padding: '1px' }"
                                            >
                                                <img :src="uploadFile.objectURL" :alt="uploadFile.name" class="w-full h-full border-round shadow-2" />
                                                <Button
                                                    icon="pi pi-times"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    :style="{ top: '-10px', right: '-10px' }"
                                                    @click="onRemoveFile()"
                                                ></Button>
                                            </div>
                                            <div v-else class="remove-file-wrapper h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto" :style="{ padding: '1px' }">
                                                <img :src="profile.avatar.url" alt="avatar" class="w-full h-full border-round shadow-2" />
                                                <Button
                                                    icon="pi pi-times"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    :style="{ top: '-10px', right: '-10px' }"
                                                    @click="onRemoveStoredFile()"
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #empty>
                                    <div v-if="!uploadFile && (!profile.avatar || !profile.avatar.url)" @click="onChooseUploadFiles" class="w-full py-3" :style="{ cursor: 'copy' }">
                                        <div class="h-full flex flex-column justify-content-center align-items-center">
                                            <i class="pi pi-upload text-900 text-2xl mb-3"></i>
                                            <span class="font-bold text-900 text-xl mb-3">Upload Files</span>
                                            <span class="font-medium text-600 text-md text-center">Drop or select files</span>
                                        </div>
                                    </div>
                                </template>
                            </FileUpload>
                        </div>
                    </div>
                    <div class="col-12">
                        <Button label="Save" @click="onSave" class="w-auto mt-3"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
