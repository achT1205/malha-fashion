import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref } from 'vue';

export function useFormEdit(collectionName) {
    const db = useFirestore();
    const items = useCollection(collection(db, collectionName));
    const currentItem = ref(null);
    
    const saveItem = async (item) => {
        currentItem.value = { ...item.value };
        const addRef = await addDoc(collection(db, collectionName), { ...currentItem.value });
        console.log('added : ', addRef);
    };    
    const updateItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        const docRef = doc(db, collectionName, currentItem.value.id);
        const updateRef = await updateDoc(docRef, { ...currentItem.value });
        console.log('Updated : ', updateRef);
    };
    const deleteItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        await deleteDoc(doc(db, collectionName, currentItem.value.id));
    };

  return {
    items,
    saveItem,
    updateItem,
    deleteItem
  };
}