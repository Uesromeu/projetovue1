<template>
  <header class="fixed-top container-fluid" id="navcontainer">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Thiago&Seguros</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#Desc-seguro">Quem Sou Eu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service-container">Nossas Proteções</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="about">Faça sua Cotação</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="login">Espaço Corretor</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name:"NavBar"

}
</script>
<style lang="scss">
%base-navbar-style{
  background-color: rgb(2, 5, 44);
  border-bottom: 1px solid rgb(245, 245, 92);
.navbar-nav{
  margin-left: 45rem;
}




  .logo {
    color: white;
    text-transform: uppercase;

    &:hover {
      color: rgb(245, 245, 92);
    }
  }

  .nav-link {
    color: white;

    &:hover {
      color: rgb(245, 245, 92);
    }
  }

  .icon {
    color: white;
  }
}
#navcontainer {
 @extend %base-navbar-style;
}
@media(max-width:465px){
  #navcontainer {
   
   .navbar-nav{
margin-left: 10rem;
}
}


}

</style>