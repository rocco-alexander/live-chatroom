import { projectAuth } from "@/firebase/config"
import { ref } from "vue"
const error = ref(null)

const signup = async (email,password,displayName)=>{
    error.value = null

    try{
        const response = await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!response){
            throw new Error("Could not complete signup")
        }
        await response.user.updateProfile({displayName})
        error.value=null

        return(response)
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

//  used to return these values ONLY
const useSignUp = () =>{
    return{error, signup}
}

export default useSignUp