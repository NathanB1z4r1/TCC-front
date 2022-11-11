<template>
    <div>
      <div class="header">
        <div class="linha"></div>

        <Button icon="pi pi-bars" @click="visibleLeft = true" class="mr-2"></Button>
        <LeftSidebar :visibleLeft="visibleLeft" :change="change"></LeftSidebar>

        <div class="line">
          <div class="logo">
            <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px"/>
          </div>
          <div class="title"> 
          <h1 class="titulo">Gerenciador de Competências</h1>
          </div>
          <div class="vazio"></div>
        </div>
      </div>
      <div class="center">
        <div class="login">
          
          <div class="field">
            <label class="label-field-1 mr-4" for="">Descrição:</label>
            <input class="input-large" type="text" placeholder="" >
          </div>
          <div class="field">
            <label class="label-field mr-4" for="date">Data:</label>
            <InputMask id="date" mask="99/99/9999" v-model="val3" placeholder="" slotChar="mm/dd/yyyy"/>

            <label class="label-field mr-4" for="">EDV Treinador:</label>
            <input type="text" placeholder="" />
          </div>
          <div class="field">
            <label class="label-field mr-4" for="">Área:</label>
            <Dropdown v-model="value" :options="values.map( el => el.name )" optionLabel="name" optionValue="code" placeholder="" class="cbbox"/>

            <label class="label-field mr-4" for="">Turno</label>
            <Dropdown v-model="value" :options="values" optionLabel="name" optionValue="code" placeholder="" class="cbbox" />
          </div>
        </div>
        <div class="additional-buttons">
          <button class="label-field2">Validar</button>
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
            value: "",
            val3: ""
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
      margin:0;
      padding:0;
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

    .input-large{
      width: 690px !important;
    }

    .titulo{
      text-align: center;
      font-size: 28px;
    }
  
    .center{
      align-items: center;
      justify-content: center;
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
      width: 100%;
    }
  
    .mr-4{
      margin-right: 10px;
      font-family: "BoschSansBold";
    }
  
    .center {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      justify-content: center;
    }
  
    .field {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .field > input{
      width: 250px;
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

    .label-field-1 {
      padding: .5rem 1rem;
      background-color: #0E3554;
      color: aliceblue;
      font-weight: bold;
      min-width: 48px;
      border-radius: 10px;
      
    }

    .cbbox{
        width: 250px;
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
  </style>
