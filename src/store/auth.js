import firebase from 'firebase/app'

export default {
   actions: {
     async login({dispatch, commit}, {email, password}) {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            throw e
        }
     },
   //   Обращаемся к firebase модулю auth очищаем данные после выхода из системы с помощью метода signOut
     async logout() {
        await firebase.auth().signOut()
     }
   }
}