<template>
    <div>
      <div class="header">
        <div class="linha"></div>
  
        <Button icon="pi pi-bars" @click="visibleLeft = true" class="mr-2"></Button>
        <LeftSidebar :visibleLeft="visibleLeft" :change="change"></LeftSidebar>
  
        <div class="line">
          <div class="logo">
            <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px" />
          </div>
          <div class="title">
            <h1 class="titulo">Gerenciador de Competências</h1>
          </div>
  
        </div>
      </div>
      <div class="center mr-4">
        <div class="login">
            <div class="fotodds">
              <img :src="imagem"/>

              
              
            </div>
        </div>
        <div class="additional-buttons">
          <button class="label-field2">Sortear</button>
          <button class="label-field2">Ler resposta</button>
          <button class="label-field2">Cancelar</button>
        </div>
      </div>
    </div>

  </template>
    
  <script>
  import LeftSidebar from "../../components/LeftSidebar.vue";
  export default {
    data() {
      return {
        name: 'IndexPage',
        visibleLeft: false,
        data(){
          return{
            imagem: ""
          }
        }
      };
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .fotodds{
    background-color: blue;
  }
  
  .line {
    flex-direction: row;
    align-items: center;
    display: flex;
  
  }
  
  .logo {
    width: 33%;
    height: auto;
  }
  
  
  .titulo {
    font-family: "BoschSansRegular";
  }
  
  .title {
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  :focus-visible {
    outline: none !important;
  }
  
  .titulo {
    text-align: center;
  }
  
  .center {
    padding-top: 70px;
  }
  
  .linha {
    width: 100vw;
    height: 1rem;
    background-image: url("@/public/assets/img/linha_colorida.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .linha>h1 {
    align-items: row;
    text-align: center;
    justify-content: center;
    flex-direction: row;
  }
  
  .login {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: auto;
  }
  
  .mr-4 {
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
  
  .field>input {
    width: 156px;
    height: 50px;
    font-size: large;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  
  .field>label {
    width: 156px;
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
    border-radius: 33px;
  
  }
  
  .linhaNome {
    width: 500px !important;
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
    gap: .75rem;
    padding-left: 150vh;
    padding-top: 20vh;
  }
  
  .additional-buttons>button {
    width: 250px;
    height: 50px;
    font-size: 20px;
  }
  </style>