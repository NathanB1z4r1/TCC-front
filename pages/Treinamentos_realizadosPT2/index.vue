<template>
  <div>
    <div class="header">
      <div class="linha"></div>
        <Button icon="pi pi-bars" @click="visibleLeft = true" class="mr-2" />
        <LeftSidebar :visibleLeft="visibleLeft" :change="change"></LeftSidebar>
      <div class="line">
        <div class="logo">
          <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px" />
        </div>
        <div class="title">
          <h1 class="titulo">Gerenciador de Competências</h1>
        </div>
        <div class="vazio" />
      </div>
    </div>
    <div class="center">
      <div class="login">

        <div class="field">
          <label class="descricao" for="">Descrição:</label>
          <input class="input-large" type="text" placeholder=""></input>
          <label class="label-field mr-4" for="date">Data:</label>
          <InputMask id="date" mask="99/99/9999" v-model="val3" placeholder="" slotChar="mm/dd/yyyy" />
          <label class="label-field mr-4" for="">Área:</label>
          <Dropdown v-model="value" :options="values" optionLabel="name" optionValue="code" placeholder=""
            class="cbbox" />
        </div>

        <div>

        </div>

        <div class="field2">
          <label class="colaboradores" for="">Colaboradores Treinados:</label>
          <Textarea v-model="value1" rows="5" cols="30" />
          <div class="coluna">
            <div class="field2">
              <label class="treinador" for="">Treinador:</label>
              <input type="text" placeholder=""></input>
            </div>
            <div class="field2">
              <label class="treinador mt-4" for="">EDV:</label>
              <input type="text" class="mt-4" placeholder=""></input>
            </div>


          </div>
        </div>
      </div>
      <div class="additional-buttons">
        <button class="label-field2">Adicionar Colaborador</button>
        <button class="label-field2">Imprimir Lista</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import LeftSidebar from "../../components/LeftSidebar.vue";
export default {
  
  name: 'IndexPage',
  data() {
    return {
      values: [{ name: "teste", code: "teste" }],
      value: "",
      value1: '',
      value2: '',
      value3: '',
      visibleLeft: false,
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
  
<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.logo>img {
  align-items: center;
  justify-content: center;
  justify-items: center;
}

.titulo {
  font-family: "BoschSansRegular";
}

.title {
  width: 33%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

:focus-visible {
  outline: none !important;
}

.input-large {
  width: 300px !important;
}

.titulo {
  text-align: center;
  font-size: 28px;
}

.center {
  align-items: center;
  justify-content: center;
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

.vazio {
  width: 33%;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.mr-4 {
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

.field>input {
  width: 145px;
  height: 50px;
  font-size: large;
  border-top: none;
  border-right: none;
  border-left: none;
}

.field2 {
  display: flex;
  align-items: self-start;
  justify-content: left;
  gap: 1rem;
}

.field2>input {
  width: 245px;
  height: 42px;
  font-size: large;
  border-top: none;
  border-right: none;
  border-left: none;
}

.field>label {
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.descricao {
  width: 130px !important;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding: .5rem 1rem;
  background-color: #0E3554;
  color: aliceblue;
  font-weight: bold;
  min-width: 48px;
  border-radius: 10px;
  margin-right: 10px;
  font-family: "BoschSansBold";
}

.colaboradores {
  width: 180px !important;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 170px;
  padding: .5rem 1rem;
  background-color: #0E3554;
  color: aliceblue;
  font-weight: bold;
  min-width: 48px;
  border-radius: 10px;
  margin-right: 10px;
  font-family: "BoschSansBold";
}

.coluna {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

.treinador {
  width: 180px !important;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: .5rem 0rem;
  background-color: #0E3554;
  color: aliceblue;
  font-weight: bold;
  border-radius: 10px;
  font-family: "BoschSansBold";
}

.mt-4 {
  margin-top: 1rem;
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

.cbbox {
  width: 140px;
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

.additional-buttons>button {
  width: 149px;
  height: 70px;
  font-size: 16px;
}
</style>