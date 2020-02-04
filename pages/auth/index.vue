<template>
  <div>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Senha</label>
        <input v-model="form.password" type="text" class="form-control">
      </div>
      <button class="btn btn-success" @click="login">
        Entrar
      </button>
      <button class="btn btn-success" @click="usuario_logado">
        Pegar o usuario logado
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: 'admin@user.com',
        password: 'secret'
      }
    }
  },
  methods: {
    login () {
      console.log("logando")
      this.$http.post('https://api.taprocurando.com/api/auth/login', this.form).then((response) => {
        this.$store.commit('auth/login', response.data.token)
        console.log(response)
      }).catch((error) => {
        console.log("Erro no login")
        console.log(error)
      })
    },
    usuario_logado () {
      console.log("Pegando usuario logado")
      this.$http.get('https://api.taprocurando.com/api/auth/me').then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log("Erro ao pegar o suario logado")
        console.log(error)
      })
    }
  },
  mounted () {
  }

}
</script>

<style>

</style>
