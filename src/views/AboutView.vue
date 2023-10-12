<template>
  <div class="form">
    <section id="form-container" class="container">
      <div class="titulo-form">
        <h2>Faça sua Cotacão</h2>
      </div>
      <form  @submit="Segurados" >
        <!--Form name-->
        <label for="nome" class="form-label"
          >Nome Completo <strong>*</strong></label
        >
        <input
          type="text"
          id="nome"
          class="form-control"
          v-model="nome"
          placeholder="Digite seu nome completo"
          required
        />
        <!--Form email-->
        <label for="Email" class="form-label">Email<strong>*</strong></label>
        <input
          type="text"
          name="Email"
          class="form-control"
          id="Email"
          v-model="email"
          placeholder="adress@gmail.com"
          required
        />
        <!--Form cel-->
        <label for="cel" class="form-label">Nº Celular<strong>*</strong></label>
        <input
          type="text"
          name="cel"
          class="form-control"
          id="cel"
          v-model="cel"
          placeholder="Digite seu Celular"
          required
        />
        <!--Form data Nascimeto-->
        <label for="dataNasc" class="form-label"
          >Digite sua data de Nascimento<strong>*</strong></label
        >
        <input
          type="date"
          name="dataNasc"
          class="form-control"
          id="dataNasc"
          v-model="dataNasc"
          required
        />
        <!--Form modelo Veiculo-->
        <label for="modelo" class="form-label"
          >Modelo do Veiculo<strong>*</strong></label
        >
        <input
          type="text"
          name="modelo"
          class="form-control"
          id="modelo"
          v-model="modelo"
          placeholder="Uno/Gol/tintan"
          required
        />
        <!--Marca Veuiculo-->
        <label for="marca" class="form-label"
          >Marca do Veiculo<strong>*</strong></label
        >
        <input
          type="text"
          name="marca"
          class="form-control"
          id="marca"
          v-model="marca"
          placeholder="Fiat/Volsk/Honda"
          required
        />
        <!--form ano veiculo-->
        <label for="ano" class="form-label"
          >Ano do Veiculo<strong>*</strong></label
        >
        <input
          type="text"
          name="ano"
          class="form-control"
          id="ano"
          v-model="ano"
          placeholder="ex:2003"
          required
        />
        <!--form possui Seguro-->
        <label for="outroSeguros">Já possui Seguros<strong>*</strong></label>
       <section v-for="temSeguro in  TemSeguros" :key="temSeguro.id">
       <input
          type="radio"
          name="outroSeguros"
        
          :value="temSeguro.tipo"
          v-model="temseguro"
          required
        />
        <label  class="form-label">{{temSeguro.tipo}}</label>
        </section>
  
        <!--Opcionais-->
        <div class="row">
          <h6>Opcionais<strong>*</strong></h6>
          <div class="col-md-6 col-xs-12" v-for=" opcion in opcionaldata" :key="opcion.id">
            <ul class="lista-op" >
              <li >
                <input
                   type="checkbox"
                  name="opcionais"
                 v-model="opcionais"
                 :value="opcion.tipo" 
           
                   
               />
                  <span  >{{opcion.tipo}}</span> 
             
              </li>
              
            </ul>
            
          </div>
          <ul>
            <li>Tipo de Cambio<strong>*</strong></li>
              <li class="lista-cambio" v-for="cambior in cambios" :key="cambior.id" required>
                <input type="checkbox" name="cambio" v-model="cambio"  :value="cambior.tipo" >
                <span >{{cambior.tipo}} </span>
              </li>
            </ul>
        </div>

        <!--Submit cotacao-->
      <div class="btn-form">
       <input v-if="!enviado" type="submit" class="btn btn-primary" value="Enviar Cotação">
       <input v-else type="submit" class="btn btn-success" value="Cotação enviada">
      </div>
      </form>
      
    
    </section>
  </div>
</template>
<script>

export default {

  data() {
    return {
      //inserir dados
      opcionaldata:null,
      cambios:null,
      TemSeguros:null,
      //construir dados
      nome: "",
      email: "",
      cel: "",
      modelo: "",
      marca: "",
      ano: "",
      dataNasc: "",
      opcionais: [],
      cambio: [],
      msg:"",
      enviado:false,
      temseguro:[],
    };
  },
  methods:{
    async getOpcionais(){
      const req = await fetch("http://localhost:3000/opcionais");
      const data = await req.json();
      console.log("opcionais",data)
   
      this.opcionaldata = data;
 
    },
    async getcambio(){
      const req = await fetch(" http://localhost:3000/cambio");
      const data = await req.json();
      console.log("cambios",data)
      this.cambios = data
    },
    async getTemSeguro(){
       const req = await fetch("http://localhost:3000/TemSeguro");
       const  data = await req.json();
       this.TemSeguros = data;
    },
    async Segurados(e){ e.preventDefault();
    const data={
      nome:this.nome,
      email: this.email,
      cel:this.cel,
      modelo:this.modelo,
      marca:this.marca,
      ano: this.ano,
      dataNasc:this.dataNasc,
      opcionais: this.opcionais,
      cambio: this.cambio,
      temseguro:this.temseguro
      
    

    }
     const Datajson = JSON.stringify(data)
     const req = await fetch("http://localhost:3000/DateSegurado",{
      method:"POST",
      headers: {"Content-type" : "application/json"},
      body: Datajson,

     });
     const res = await req.json();
     console.log(res);
     this.nome ="";
     this.email ="";
     this.cel="";
     this.modelo ="";
     this.marca ="";
     this.dataNasc ="";
     this.opcionais="";
     this.cambio="";
     this.ano="";
     this.temseguro=""
     if (req.status >= 200 && req.status < 300) {
      // Status HTTP indica sucesso (200-299)
      this.enviado = true; // Defina enviado como true
      
   
     
 

      setTimeout(() => {
    this.enviado = false; // Defina enviado como false após o atraso
  }, 2000); // 2000 milissegundos = 2 segundos

    } else {
      // Lidar com outros status HTTP (erro no servidor)
      console.error("Erro no servidor:", req.statusText);
    }


    }
  },
  mounted() {
    this.getOpcionais();
    this. getcambio();
    this.getTemSeguro()
 
  }
};
</script>
<style lang="scss">
%base-sectionForm-style {
  background-color: rgb(245, 245, 92);
  padding: 3rem;
  margin-bottom: 3rem;
  .titulo-form {
    text-align: center;
    margin-bottom: 2rem;
    transition: 1s;
    &:hover {
      transform: scale(1.5);
    }
  }
  strong {
    color: red;
  }
  label {
    margin: 0;
  }
  input {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  li {
    list-style: none;
  }
  .btn-form {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    button {
      padding: 0.8rem;
    }
    
  }
  .lista-cambio{
      margin-left: 2rem;
    }
}
//formulario
#form-container {
  @extend %base-sectionForm-style;
}
</style>
