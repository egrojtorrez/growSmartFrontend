import { initializeApp } from "firebase/app";
import {getDownloadURL, deleteObject, getStorage, ref, uploadBytes, getMetadata} from "firebase/storage"
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyARxdTy3q-litsMncQFT2K_w6XgoyKLJyY",
  authDomain: "app-miercoles.firebaseapp.com",
  projectId: "app-miercoles",
  storageBucket: "app-miercoles.appspot.com",
  messagingSenderId: "1063833440929",
  appId: "1:1063833440929:web:96a84c2e636c62e0d656e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file, tipo){
    if(!file) return null
    const folder = {
        pdf: 'post-pdf',
        imagen: 'post-images',
        recursos: 'recursos'
    }
    const fileRef = ref(storage, `${folder[tipo]}/${v4()}`)
    await uploadBytes(fileRef, file)
    return await getDownloadURL(fileRef)
}

export async function deleteFile(url){
    if(!url) return null
    try {
        const fileRef = ref(storage, url)
        await deleteObject(fileRef)
        return true
    } catch (error) {
        console.log(error)
    }
}

export function adaptFileType(file){
    if(file.type.includes('image')) return 'imagen'
    if(file.type.includes('pdf')) return 'pdf'
    return null
}

export async function getMetadataFirebase(file){
    const forestRef = ref(storage, file)
    const metadata = await getMetadata(forestRef)
    return metadata
}