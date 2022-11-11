<template>
  <div>
    <div class="header">
      <div class="linha"></div>
      <div class="line">
        <div class="logo">
          <img src="@/public/assets/img/logo_bosch.svg" width="200px" height="100px" />
        </div>
        <div class="titulohome">
          <h1 class="">Gerenciador de Competências</h1>
        </div>
      </div>
    </div>









    <div>
      <Card class="Card" style="width: 25em">
        <template #header>
          img

        </template>
        <template #title>
          Cadastrar Treinamentos

        </template>
        <template #subtitle>

        </template>
        <template #content>
          <p></p>
        </template>
        <template #footer class="footer">

          <Button class="botaohome" @click="$router.push('./Cadastro_Treinamento')" label="Entrar" />

        </template>
      </Card>
    </div>



  </div>

</template>

<script>

export default {
}


// <div class="iconhome">
//         <a href="./home"><img src="@/public/assets/icons/home.svg" alt=""></img></a>
//     </div>






</script>

<style lang="css">
.header {
  padding: 0;
  height: 100%;
  width: 100%;
}

.linha {
  width: 100vw;
  height: 1rem;
  background-image: url("@/public/assets/img/linha_colorida.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.logo {
  width: 20vh;
  height: auto;
}

.botaohome {
  margin-left: 150px !important;
}
.titulohome{
      width: 100vw;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }


.Card{
  margin-left: 30px;
  margin-top: 50px;

}
</style>