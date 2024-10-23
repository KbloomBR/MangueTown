<template lang="pt-br">
  <div>
    
    <header class="menu-container">
      <div class="menu-buttons">
        <nav class="main-menu">
          <ul>
            <!-- <li><a href="../components/UsuariosMenu.vue">Menu</a></li>
            <li><a href="../components/UsuariosContrato.vue">Contratar</a></li> -->
            <router-link to="/">Home</router-link> |
            <router-link to="/contrato">About</router-link>
            <li><a href="">Cadastrar</a></li>
            <li><a href="">LogOut</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <footer>
    <p style="text-decoration: underline" >
      <b>|Você pode alterar as abas apertandos os números de 1 a 3|</b>
    </p>
</footer>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="css">
body {
    background-color: rgb(0, 0, 0);
    background-repeat: no-repeat;
    background-size: cover;
    animation: fadein 1s;
} 

@keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

body#out {
    animation: fadeout 2s;
} 

@keyframes fadeout {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

p {
    position: absolute;
    bottom: -150%;
    right: 1%;
    color: rgb(255, 255, 255);
}

.menu-container {
    display: flex;
    justify-content: flex-end;
    color: rgb(0, 0, 0);
}

.menu-buttons ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    color: rgb(0, 0, 0);
}

.menu-buttons li {
    margin: 0 5px;
    padding: 0px 1px;
    cursor: pointer;
    background-color: #000000;
    border: 1px solid #ffffff;
    border-radius: 5px;
    transition: all 0.2s ease;
    color: white;
}

.menu-buttons a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    display: block;
    padding: 15px;
}

.menu-buttons li:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    
}

.menu-buttons li:hover a {
    color: #000000;
}

.menu-buttons {
    overflow: hidden;
    max-width: 100%;
    border-bottom: none;
    color: rgb(0, 0, 0);
}  
</style>