<template>
    <div>
      <div class="header">
        <div class="linha"></div>

        <Button icon="pi pi-bars" @click="visibleLeft = true" class="mr-2" />
    <LeftSidebar :visibleLeft="visibleLeft" :change="change"></LeftSidebar>

        <div class="line">
          <div class="logo">
            <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px"/>
          </div>
          <div class="title"> 
          <h1 class="titulo">Gerenciador de Competências</h1>
          </div>
          <div class="vazio"/>
        </div>
      </div>
      <div class="center">
        <div class="login">
          <div class="field">
            <label class="label-field mr-4" for="">Descrição:</label>
            <input type="text" placeholder=""></input>
          </div>
          <div class="field">
            <label class="label-field mr-4" for="">Área:</label>
            <Dropdown v-model="value" :options="values" optionLabel="name" optionValue="code" placeholder="" />

            <label class="label-field mr-4" for="">C. de Custo:</label>
            <Dropdown v-model="value" :options="values" optionLabel="name" optionValue="code" placeholder="" />
          </div>
        </div>
        <div class="additional-buttons">
          <button class="label-field2">Concluir Cadastro</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import LeftSidebar from "../../components/LeftSidebar.vue";
  export default {
    name: 'IndexPage',
    data(){
        return{
            visibleLeft: false,
            values: [{name: "teste", code: "teste"}],
            value: ""
        }
    },
    methods: {
        change(arg) {
            this.visibleLeft = arg;
        }
    },
    components: { LeftSidebar }
  }
  
  </script>
  
  <style lang="css" scoped>
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
    width: 33%;
    height: auto;
  }

  .logo > img{
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  .titulo{
    font-family: "BoschSansRegular";
  }
    
  .title{
    width: 33%;
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
    font-size: 28px;
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

  .vazio{
    width: 33%;
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
    width: 482px;
    height: 50px;
    font-size: large;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  
  .field > label{
    width: 156px;
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 20px;  
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
    border-radius: 10px;
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

  @media screen and (min-width: 1300px) {

    .logo{
      width: 35%;
      height: 40%;
    }

    .logo > img{

      width: 60%;
      height: 40%;
    }

    .titulo{
    font-size: 50px;
    }
    
    .center{
      padding-right: 70px!important;
      padding-bottom: 400vh!important;
    }

    
    .additional-buttons {
    gap: .200rem;
    }
  
    .additional-buttons > button{
      width: 450px;
      height: 80px;
      font-size: 30px;
    }

    .login{
      gap: 1rem;
      width: auto;
    }
    
    .mr-4{
      margin-right: 10px;
    }
    .field > input{
      width: 482px;
      height: 50px;
    }
    
    .field > label{
      width: 156px;
      font-size: 30px;
      margin-left: 20px;  
    }
    
    .label-field {
      padding: .10rem 2rem;
      min-width: 480px;
      border-radius: 20px;
      height: 80px;
        
    }
    
  

    .label-field2 {
      padding: .10rem 2rem;
      min-width: 480px;
      border-radius: 20px;
    
    }
    
  }

</style>