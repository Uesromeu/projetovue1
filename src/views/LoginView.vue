<template>
    <div>
        <section class="container-fluid" id="login-container">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12">
                <h3 class="titulo-login">Faça Seu Login</h3>
                <p class="paragrafo-login">Preencha todos campos corretamente Corretor!</p>
                <form action="">
                    <div class="imail-section">
                        <label for="login-email" class="form-label">Digite seu imail</label>
                        <input type="text" class="input-imail" id="login-email" name="login-email">
                        <label for="psword-email" class="form-label">Digite sua Senha</label>
                        <input type="password" class="pasword-imail" id="psword-email" name="psword-email">
                        
                        <router-link  type="submit" class="btn btn-primary" to="espaco">Entra</router-link>
                    </div>

                </form>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="btn-container">
 <router-link  to="/">home</router-link>/<router-link  to="login">Login</router-link>
    </div>
    </section>
</div>
    
</template>
<script>
export default {
    name:"LoginView"
    
}
</script>
<style lang="scss">
%base-sectionLogin-style {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .imail-section {
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 92);
    padding: 4rem;
    border-bottom: 2px solid white;
    border-left: 2px solid white;

    input {
      margin-bottom: 1rem;
    }

    label {
      margin-bottom: 0.1rem;
    }


  }
  h3{
    color:white;
  }
  p{
    color:rgb(245, 245, 92);
    font-size: .8rem;
  }
}
%base-sectionBtnoption-style{

 margin-left: 30rem;
 margin-top: 2rem;
 color: white;
 a{
  text-decoration: none;
  color: rgb(245, 245, 92);
  &:hover{
    text-decoration: underline;
  }
 }

 
}
#login-container {
  @extend %base-sectionLogin-style;


}
.btn-container{
  @extend %base-sectionBtnoption-style;
}
</style>