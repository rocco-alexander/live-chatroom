import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

// we can use this to get a collection and is documents in any view or component
// literally outputs the whole collection when its snapshot changes
const getCollection = (collection)=>{
    const documents = ref(null) // we need an doc for every collection 
    const error = ref(null) // we need an error for every collection

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    // real time changes are made here 
    collectionRef.onSnapshot((snap)=>{
        let results = []
        snap.docs.forEach(doc=>{
            // if this is true ===> run this code
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
            // doc.data() us from using a local snapshot
        })
        documents.value = results
        error.value = null
    },(err) =>{ // if we get an error...
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })
    return {documents, error}
}
export default getCollection