import { ref, watch } from 'vue';
import { useCurrentUser } from 'vuefire';
import { useDocument, useFirestore, useCollection } from 'vuefire';
import { collection, doc , deleteDoc} from 'firebase/firestore';
import { useRoute } from 'vue-router'

export function useProfileManager(){

    const route = useRoute()
    const profile = ref({});
    const sourceProfile = ref(null);
    const user = useCurrentUser();
    const db = useFirestore();
    const collectionName = 'admins'
    const profiles = useCollection(collection(db, collectionName));

    watch(
        user,
        (val) => {
            if(!route.params || route.params.id)
                sourceProfile.value = useDocument(doc(db, collectionName, val.uid));
        },
        { deep: true }
    );
    watch(
        sourceProfile,
        (val) => {
            profile.value = { ...val.value };
        },
        { deep: true }
    );


    const removeDoc = async (id) => {
        await deleteDoc(doc(db, collectionName, id));
    };

    return{
        profile, user, profiles, removeDoc, sourceProfile
    }

}