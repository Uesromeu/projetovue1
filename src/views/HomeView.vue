<template>
  <div>
  <section class="container-fluid" id="banner-container">
   <img src="/img/smart_home.jpg" alt="banner" class=" img-fluid banner">
    <div class="titulo-h1">
      <h1>Thiago&Seguros</h1>
      <p>15 anos de Experiência na Area de Seguros</p>
    </div>
  </section>
  <main class="container">
    <section class="mythiago-container" id="Desc-seguro">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <img
            src="/img/human-5688156_1280.jpg"
            alt="quem e o thiago"
            class="img-fluid thiago-img"
          />
        </div>
        <div class="col-md-6 col-xs-12 discription-container">
          <h2 class="titulo-thiago">Thiago Theles</h2>
          <span class="discription">
            <div v-if="showMore">
              {{text}}
              <button @click="btnLerMenos">Ler menos</button>
              </div> 
            <div v-else>
              {{restext}}
              <button @click="btnLerMais">Ler mais....</button>
            </div>
          </span>
          <div class="formacao">
            <h3>Corretor Devidamente Habilitado</h3>
            <div class="logos-container">
              <a href="https://www.gov.br/susep/pt-br">
                <img
                  src="/img/images.png"
                  alt="susep"
                  class="img-fluid logo-susep"
                />
              </a>
              <a href="https://www.sincorgo.com/">
                <img
                  src="/img/logo-expediante.jpg"
                  alt="sincorgoias"
                  class="img-fluid logo-sincor"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-xs-12 video-container">
          <span class="video-desc">
            <h4 class="titulo-video">
              Veja a importacia do Seguro em nossa Vida
            </h4>
            <p>Assitar o video >>></p>
          </span>
          <video controls>
            <source src="/img/1065503581-preview.mp4" type="video/mp4" />
          </video>
          <router-link class="btn-video" to="about">Faça sua Cotação</router-link>
        </div>
      </div>
    </section>
    <section id="service-container">
      <h4>Beneficios do nossos Seguros</h4>
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div class="sevice-descrition">
          <fa class="i" :icon="['fa','car']" />

            <div class="descrition-service">
              <h5>Seguro Auto</h5>
              <ul class="lista-service">
                <li>Assitencia 24hrs</li>
                <li>Roubos e furtos</li>
                <li>Seguro a terceiros</li>
                <li>Colisoes e avarias</li>
              </ul>
              <router-link class="btn-service" to="about">Faça sua Cotação</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <div class="sevice-descrition">
          <fa class="i" :icon="['fa','house']"/>
            <div class="descrition-service">
              <h5>Seguro Residencial</h5>
              <ul class="lista-service">
                <li>Assitencia 24hrs</li>
                <li>Roubos e furtos</li>
                <li>Seguro a terceiros</li>
                <li>Colisoes e avarias</li>
              </ul>
              <router-link class="btn-service" to="about">Faça sua Cotação</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <div class="sevice-descrition">
            <fa class="i" :icon="['fa','people-roof']"/>
            <div class="descrition-service">
              <h5>Seguro Pessoas</h5>
              <ul class="lista-service">
                <li>Assitencia 24hrs</li>
                <li>Roubos e furtos</li>
                <li>Seguro a terceiros</li>
                <li>Consorcios</li>
              </ul>
              <router-link class="btn-service" to="about">Faça sua Cotação</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid" id="seguradoras">
      <h4 class="titulo-seguradoras">Seguradoras Parceiras</h4>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/portoseguro.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="/img/bradesco-seguros-logo-1-1.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/ITAU-SEGUROS-PONTA-GROSSA.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/libertyseguros.jpg"
              class="d-block liberty"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="container" id="email">
      <div class="row">
        <h4 class="col-md-6 col-xs-12">Se inscreva-se no nosso suporte vip</h4>
        <div class="col-md-6 col-xs-12">
          <form action="" @submit="postEmail">
          <label for="imail">Cadastre seu imail:</label>
          <input
            type="imail"
            class="form-control"
            id="imail"
            placeholder="digite@imail.com"
            v-model="emails"
          />
          <button type="submit" class="btn btn-primary">Inscreva-se</button>
            <div  class="msg" v-show="mgs" >&#128516; {{mensagem}}</div>
       
        </form>
        
        </div>
      </div>
    </section>
  </main>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data(){
  return{
    emails:"",
    mensagem:"",
    showMore:false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officiis, reprehenderit numquam voluptate ab aspernatur incidunt
            dicta harum alias voluptatem quis hic obcaecati in optio nostrum.
            Amet obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
          
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis! obcaecati in optio nostrum. Amet
            obcaecati adipisci facilis!`,
            maxLength:600
           
  }
},
computed:{
  restext() {
      return this.text.slice(0, this.maxLength);
    },

},
methods:{
  btnLerMenos(){
    this.showMore=false;
  },
  btnLerMais(){
    this.showMore=true;
  },
async postEmail(e){ e.preventDefault();
  const data={
    email : this.emails,
    mgs:"",
    mensagem:""
  }
  const Datajson = JSON.stringify(data);
  const req = await fetch(" http://localhost:3000/Email",{
  method:"POST",
  headers:{"Content-type":"application/json"},
  body:Datajson
  });
  const res = await req.json();
  this.emails = res
  this.mgs =true,
  this.mensagem = 'imail enviado com sucesso!'
  setTimeout(() => {
    this.mgs =false
    this.mensagem =""
  }, 3000);
  this.emails ="";


},
mounted(){
  this.postEmail();
}
}
}

</script>
<style lang="scss">

%base-banner-style{
  
    display:flex;
    justify-content: center;
    align-content: center;
    border-bottom: 1px solid rgb(245, 245, 92);

  .banner {
  
    height: 30rem;
    width: 80%;
    opacity: 0.4;
   

  
  
  
  }
  
  .titulo-h1 {
    position: absolute;
    color: white;
    top: 7rem;
    left: 19rem;
    text-align: center;
  
    h1 {
      font-size: 7rem;
    }
  
    p {
      font-size: 2rem;
      border: 1px solid;
      padding: 0.5rem;
      margin-top: 2rem;
    }
  
  }

  
}
%base-sobreThiago-style{
  .thiago-img {

    width: 100%;
    padding: 2rem;
  }
  a{
    text-decoration: none;
  }
  
  .titulo-thiago {
    color: white;
    margin-top: 3rem;
  }
  
  
  .discription {
    color: white;
    margin-top: 5rem;
  }
  
  .logo-susep {
    width: 40%;
    margin-right: 1rem;
    margin-top: 2rem;
  }
  
  .logo-sincor {
    width: 50%;
    margin-top: 2rem;
  }
  
  .formacao {
    margin-top: 3rem;
    text-align: center;
  }
  button{
    background-color: transparent;
    color:yellow;
    text-decoration: underline;
    border:none;
  }
}
%base-sectionVideo-style{
  margin-top: 6rem;
  border-top: 1px solid rgb(245, 245, 92);
  border-bottom: 1px solid rgb(245, 245, 92);

  video {
    width: 100%;
    margin-bottom: 3rem;
  }

  h4 {
    font-size: 50px;
    color: white;
    margin-top: 3rem;
  }

  p {
    color: rgb(245, 245, 92);
  }

  .btn-video {
    margin-left: 30rem;

    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem;
    background-color: rgb(245, 245, 92);
    color: rgb(7, 7, 34);
    border-radius: 30px;
    font-weight: bold;

    &:hover {
      background-color: rgb(7, 7, 34);
      color: white;
      border: 1px solid rgb(245, 245, 92);
    }
  }

}
%base-sectionService-style{
  padding: 3rem;
  text-align: center;

  .sevice-descrition {
    border: 1px solid;
    padding: 2rem;
  }

  .lista-service {
    margin-bottom: 2rem;
  }

  .btn-service{
    margin-left: 0.9rem;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem;
    background-color: rgb(245, 245, 92);
    color: rgb(7, 7, 34);
    border-radius: 30px;
    font-weight: bold;

    &:hover {
      background-color: rgb(7, 7, 34);
      color: white;
      border: 1px solid rgb(245, 245, 92);
    }
  }
  h4{
    color: white;
   
    margin-bottom: 2rem;
    font-size: 50px;
  }
  h5{
  color: rgb(245, 245, 92);
  }
  .i{
    color: rgb(59, 204, 230);
    font-size: 30px;
  }
  li{
    color:white;
    padding: 0.5rem;
  }

}
%base-sectionCarusel-style{
  padding: 3rem;
  text-align: center;
  border-bottom: 1px solid rgb(245, 245, 92);
  h4{
    color:white;
    margin-bottom: 4rem;
    font-size: 50px;
  }  
  .carousel-inner{
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 3rem 5rem;
 
   
  }
  .liberty{
    width: 100%;
    height: 9rem;
  }
 
}
%base-sectionImail-style{
  padding: 3rem;
  h4{
    font-size: 70px;
    color:rgb(245, 245, 92);
  }
  label{
    margin-top: 60px;
    color:rgb(245, 245, 92);
  }
  button{
    margin:1rem 0;
  }
  .msg{
    color:white;
    float:right;
    
  }
}
#banner-container{
  @extend %base-banner-style;
}
.mythiago-container{
 @extend %base-sobreThiago-style;
}


.video-container {
 @extend %base-sectionVideo-style;
}

#service-container {
@extend %base-sectionService-style ;

}
#seguradoras{
 @extend %base-sectionCarusel-style;
  
}
#email{
 @extend %base-sectionImail-style;
}
@media(max-width:460px) {
  %base-banner-style{
  .banner {
  
    height: 30rem;
    width: 100%;
    opacity: 0.4;
    border-bottom: 1px solid rgb(245, 245, 92);
  
  
  
  }
  
  .titulo-h1 {
    position: absolute;
    color: white;
    top: 15rem;
    left: 4rem;
    text-align: center;
  
    h1 {
      font-size: 30px;
    }
  
    p {
      font-size: 15px;
      border: 1px solid;
      padding: 0.5rem;
      margin-top: 2rem;
    }
  
  }
  
}


}

 





</style>
