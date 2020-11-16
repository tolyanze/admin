<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <center><span class="card-title">Арбитраж </span></center>
      <div class="input-field">
        <input 
          id="name" 
          type="text" 
          v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.required) }"
        />
        <label for="name">Name</label>  
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Поле name не должно быть пустым!</small>
      </div>
      <div class="input-field">
        <input 
          id="email" 
          type="text" 
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <label for="email">Email</label>  
        <small 
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле email не должно быть пустым!</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корекnysq email!</small>
      </div>
      <div class="input-field">
        <input 
          id="password"   
          type="password" 
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <label for="password">Пароль</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Введите пароль!</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен быть {{$v.password.$params.minLength.min}} символов! Сейчас он {{password.length}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <!-- <p class="center">
        Нет аккаунта?
        <a href="/">Зарегистрироваться</a>
      </p> -->
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'


export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    name: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6) },
    name: {required}
  },
  mounted() {
    if (messages[this.$route.query.message]){
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async  submitHandler() {
      if (this.$v.$invalid){
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
};
</script>

<style>
</style>