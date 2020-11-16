import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlagin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlagin)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyAwsnaCf0oPIEDl7IbeNbO_ubd0CFXgVLM",
  authDomain: "vue-admin-da799.firebaseapp.com",
  databaseURL: "https://vue-admin-da799.firebaseio.com",
  projectId: "vue-admin-da799",
  storageBucket: "vue-admin-da799.appspot.com",
  messagingSenderId: "674248497129",
  appId: "1:674248497129:web:4d2a7cc9e30a47b3b55d78"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


