<template>
    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" required placeholder="email">
      <input v-model="password" type="password" required placeholder="password">
      <div class="error">{{error}}</div>
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from '@vue/reactivity'
  import useLogin from '@/composables/useLogin'
  export default {
      setup(props,context){
          // refs
          const email = ref('')
          const password = ref('')
          const {error, login} = useLogin()
          // methods
          const handleSubmit = async () =>{
              await login(email.value, password.value)
              if(!error.value){
                context.emit('login')
              }
          }
  
          return {error,email,password,handleSubmit}
      }
  }
  </script>
  
  <style>
  
  </style>