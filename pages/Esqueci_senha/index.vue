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
        <div class="center mr-4">
          <div class="login">
            <div class="field">
          <label class="label-field mr-4" for="">EDV:</label>
          <input type="text" placeholder="Digite o seu EDV"></input>
        </div>
            <div class="field">
          <label class="label-field mr-4" for="">Senha:</label>
          <input type="password" placeholder="Digite sua nova senha"></input>
        </div>
        <div class="field">
          <label class="label-field mr-4" for="">Confirmar senha:</label>
          <input type="password" placeholder="Confirme sua  nova senha"></input>
        </div>

          </div>
          <div class="additional-buttons">

            <button class="label-field2" @click="register()">Registrar senha</button>
            <button class="label-field2" @click="$router.push('./')">Acesso</button>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'IndexPage',
      data(){
    return {
      user: {
        username: "",
        password: "",
        confirmpassword: "",
      },
    }
  },
  methods: {
  
    register: async function (edv){
      
      // this.$axios.get("http://localhost:8000/api/v1/users/me/" + this.$auth.$state.user.id).then((response) => {
      //   console.log(response)
      // })
        
      if(this.user.password !== this.user.confirmpassword)
        return alert("Senhas não conhecidem")
      //else if(this.user.username == )
      else(this.user.password)
        alert(" Senha trocada com Sucesso !")
        this.$axios.put('http://localhost:8000/api/v1/users/', this.user)
    }
  }
}
    
    </script>
    
    <style lang="css">
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .line{
        flex-direction: row;
        align-items: center;
        display: flex; 

      }

      .logo{
        position: absolute;
        width: 200px;
        height: 90px;
      }

      .titulo{
      font-family: "BoschSansRegular";
    }
 
      
      .title{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      :focus-visible{
        outline: none !important;
      }

      .titulo{
        text-align: center;
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
      .linha > h1{
        align-items: row;
        text-align: center;
        justify-content: center;
        flex-direction: row;
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
    
      .center {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
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
        width: 204px;
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
        background-color: #0E3554;
        color: aliceblue;
        font-weight: bold;
        min-width: 48px;
        border-radius: 40px;
        font-family: "BoschSansBold";
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