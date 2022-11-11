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
          <label class="label-field mr-4" for="">Nome do Colaborador:</label>
          <input class="descricao" type="text" placeholder=""></input>
        </div>
        <div class="field">
          <label class="label-field mr-4 data" for="date">Data:</label>
          <InputMask id="date" mask="99/99/9999" v-model="val3" placeholder="" slotChar="mm/dd/yyyy" />

          <label class="label-field mr-4 " for="">Treinador:</label>
          <input class="treinador" type="text" placeholder=""></input>
        </div>
      </div>
      <div class="additional-buttons">
        <button class="label-field2">Adicionar</button>
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

.titulo {
  text-align: center;
  font-size: 28px;
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

.vazio {
  width: 33%;
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
  width: 131px;
  height: 50px;
  font-size: large;
  border-top: none;
  border-right: none;
  border-left: none;
}

.descricao {
  width: 500px !important;
  height: 50px;
  font-size: large;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-top: 16px;
}

.treinador {
  width: 170px !important;
  height: auto !important;
  font-size: large;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-top: 16px;
}

.field>label {
  width: 156px;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.data {
  width: auto !important;
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

.additional-buttons>button {
  width: 146px;
  height: 50px;
  font-size: 20px;
}
</style>