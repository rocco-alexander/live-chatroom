<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="displayName" type="text" required placeholder="display name">
    <input v-model="email" type="email" required placeholder="email">
    <input v-model="password" type="password" required placeholder="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
    setup(props,context){
        const {error, signup} = useSignup()
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        // methods
        const handleSubmit = async () =>{
            await signup(email.value, password.value,displayName.value)
            if(!error.value){
                context.emit('signup')
            }
        }

        return {displayName,email,password,error,handleSubmit}
    }
}
</script>

<style>

</style>