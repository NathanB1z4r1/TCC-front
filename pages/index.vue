<template>
  <div>
    <div class="header">
      <div class="linha"></div>

      <div class="line">
        <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px"/>
      </div>
    </div>
    <div class="title"> 
          <h1 class="titulo">Gerenciador de Competências</h1>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="center mr-4">
      <div class="login">
        <div class="field">
          <label class="label-field mr-4" for="">EDV:</label>
          <input type="text" placeholder="EDV" v-model="user.username"></input>
        </div>
        <div class="field">
          <label class="label-field mr-4" for="">Senha:</label>
          <input type="password" placeholder="Senha" v-model="user.password"></input>
        </div>

      </div>
      <div class="additional-buttons">
        
        <button class="label-field2" @click="makeLogin()"> Entrar </button>

        <button class="label-field2" @click="$router.push('./Cadastro')"> Novo Usuário </button>

        <button class="label-field2" @click="$router.push('./Esqueci_senha')"> Esqueci Minha Senha </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      message: ""
    };
  },
  methods: {
    

    makeLogin: async function(){
      this.$auth.loginWith(
        "local", {data: this.user}
      )
      .then((response)=>{
        alert("USUÁRIO LOGADO COM SUCESSO");
        this.$router.push('/home')
      })
      .catch((response)=>{
        this.user.username="";
        this.user.password="";
        alert("EDV ou Senha invalida");
      })
    }
  }
}
</script>

<style lang="css" scoped>
   *{
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }

  :focus-visible{
    outline: none !important;
  }


  .center{
    padding-top: 70px;
  }
  .linha{
    width: 100vw;
    height: 1rem;
    background-image: url("@/public/assets/img/linha_colorida.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }



  .iconhome{
    width: 30px;
    height: 20px;
   
  }

  .titulo{
    font-family: "BoschSansRegular";
  }

  .login{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: auto;
  }

  .mr-4{
    margin-right: 10px;
    font-family: "BoschSansBold";
  }

  .logo{
  position: absolute;
  width: 200px;
  height: 90px;
}

  .title{
      padding-top: 10px;
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  .center {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }
  
  .header{
    padding-bottom: 5px;
  }

  .field {
    display: flex;
  }

  .field > input{
    width: 420px;
    height: 50px;
    font-size: large;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .field > label{
    width: 120px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 13px;
  }

  .label-field {
    padding: .5rem 1rem;
    background-color: #0E3554;
    color: aliceblue;
    font-weight: bold;
    min-width: 48px;
    border-radius: 10px;
  }

  .label-field2 {
    padding: .5rem 1rem;
    height: 70px !important;
    background-color: #0E3554;
    color: aliceblue;
    font-weight: bold;
    min-width: 48px;
    border-radius: 40px;
    font-family: "BoschSansBold";
  }
  .textobotao{
    text-decoration: none;
    color: white;
  }



  .additional-buttons {
    display: flex;
    gap: .75rem;
    flex-direction: column;
  }

  .additional-buttons > button{
    width: 250px;
    height: 50px;
    font-size: 20px;
  }
</style>