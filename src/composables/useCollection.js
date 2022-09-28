import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

// we have the collection parameter to allow us to access multiple collections with one func    
const useCollection = (collection) => {
    let error = ref(null) // we need to have this in the func because every collection needs its own error object

    const addDoc = async (doc) => {
        error.value = null

        try{
            await projectFirestore.collection(collection).add(doc)
        }catch(err){
            console.log(err.message)
            error.value = 'could not send message'
        }
    }
    return{error, addDoc}
}
export default useCollection