<template>
        <Sidebar class="sidebar" :visible.sync="visibleLeft" :dismissable="false" :baseZIndex="100000"
            :showCloseIcon="false">
            <div class="rowForClose">
                <button class="reset" @click="change(false)">X </button>
            </div>

            <div class="itens">
                <div class="home">
                    <button class="resetButton letra" @click="$auth.logout()">logout </button>
                </div>
                <div class="dropdown">
                    <div class="toHover">
                        <img src="@/public/assets/icons/pessoa.svg" alt="">
                        <p class="toHover white"> Treinamentos</p>
                        <div class="dropdown-content">
                            <a href=".\Cadastro_Treinamento">Cadastrar Treinamento</a>
                            <a href=".\Realizar_Treinamento">Realizar Treinamento</a>
                            <a href=".\Treinamentos_realizados">Treinamentos Realizados</a>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="toHover">
                        <img src="@/public/assets/icons/grupo.svg" alt="">
                        <p class="toHover white"> Colaborador</p>
                        <div class="dropdown-content">
                            <a href=".\Cadastrar_colaborador">Cadastro de Colaborador</a>
                            <a href=".\Localizar_colaborador">Localizar Colaborador</a>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <div class="toHover white">
                        <img src="@/public/assets/icons/dds.svg" alt="">
                        <p class="toHover"> DDS</p>
                        <div class="dropdown-content">
                            <a href=".\Sortear_DDS">Sortear DDS</a>
                            <a href="#">Importar DDS's</a>
                            <a href="#">Relatórios</a>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <div class="toHover white">
                        <img src="@/public/assets/icons/bast.svg" alt="">
                        <p class="toHover"> Relatórios</p>
                        <div class="dropdown-content">
                            <a href="#">Registrar BAST</a>
                            <a href="#">Relatórios</a>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>

</template>
  
<script>
export default {
    name: 'LeftSidebar',
    props: {
        visibleLeft: Boolean,
        change: Function
    },
    data() {
        return {
        }
    },
}
</script>
  
<style lang="css" scoped>
.reset {
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: white;

}

.letra{
    text-decoration: none;
    color:white;
    font-size: 24px;
}
.home{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 30px;
    padding-bottom: 5px;

}

.white {
    color: white;
}

.sidebar {
    background-color: rgb(255, 255, 255) !important;
}


.rowForClose {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.linha {
    width: 100vw;
    height: 1rem;
    background-image: url("@/public/assets/img/linha_colorida.svg");
    background-size: cover;
    background-repeat: no-repeat;
}

.sidebar {
    width: 10vw;
    height: calc(100vh);
    background-color: rgb(0, 0, 0);
}

.itens {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 0%;
    height: 90vh;
}

img {
    height: 60px;
    width: 64px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.toHover:hover>.toHover {
    color: black;
}

.dropbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: relative;
    height: 130px !important;
    display: inline-block;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 220px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content>a:hover {
    background-color: #ddd;
    left: 120px;
}

.toHover:hover {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.resetButton{
    background-color: transparent;
    border: none;
    border-width: 0;
}

.toHover:hover .dropdown-content {
    width: 150px;
    height: auto;
    display: block;
    opacity: .9;
    margin-left: 70px;
}

.dropdown:hover>.dropbtn {
    background-color: #3e8e41;
}

.p-button {
    color: #ffffff;
    background: #000000;
    border: none;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 0px;
}

.p-sidebar {
    background-color: #000000 !important;
    width: 23vw;
    color: #495057;
    border: 0 none;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
}


</style>