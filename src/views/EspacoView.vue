<template>
<div>
    <section class="container">
        <div class="row">
            <div class="col-md-12 col-xs-12" id="main-segurado">
                <h2>Espaço Do Corretor</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Segurado</th>
                     <th>Celular</th>
                        <th>Email</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Tem seguro?</th>
                        <th>Opcionais</th>
                        <th>Cambio</th>

                    </tr>
                    <tr v-for="segurados in segurado" :key="segurados.id">
                        <td>{{ segurados.id }}</td>
                        <td>{{segurados.nome}}</td>
                        <td>{{segurados.cel}}</td>
                        <td>{{segurados.email}}</td>
                        <td>{{segurados.modelo}}</td>
                        <td>{{segurados.marca}}</td>
                        <td>{{ segurados.ano }}</td>
                        <td>{{ segurados.temseguro }}</td>
                        <td>{{segurados.opcionais}}</td>
                        <td>{{segurados.cambio}}</td>
                        <td v-if="!removido"><button  class="btn btn-primary" type="button" @click="RemoverSegurado(segurados.id)">Remover</button></td>
                        <td v-else><button  class="btn btn-danger" type="button">Removido</button></td>
                    </tr>

                </table>

            </div>
        </div>
       
          
        
    </section>
   
    <div class="btn-container">
           <router-link  to="/">home</router-link>/<router-link  to="login">Login</router-link>
   </div>
  
</div>
</template>
<script>
export default {
    name: "EspacoView",
    data(){
        return{
            segurado:"",
            msg:"",
            removido:false
        }
    },
    methods:{
        async getSegurados(){
            const req= await fetch(`http://localhost:3000/DateSegurado`);
            const data = await req.json();
            this.segurado = data
        },
        async RemoverSegurado(id){
            const req = await fetch(`http://localhost:3000/DateSegurado/${id}`,{
                method: 'DELETE'
            });
            const res = await req.json();
            this.segurado = res
            this.getSegurados()
            if(req.status >=200 && req.status < 300){
                this.removido =true
                setTimeout(()=>{
                    this.removido=false
                },1000)
            }
        }
    },
    mounted(){
        this.getSegurados()
    }
}
</script>
<style lang="scss">
%base-sectionTabela-style{
    margin-top: 3rem;
  border: 1px solid blue;
 padding: 2rem;
 text-align: center;
  table{

   width: 100%;
   border-bottom: 1px solid rgb(245, 245, 92);
 th{
  color:rgb(245, 245, 92);
  border: 1px solid;
  padding: .5rem;

 }
 td{
  color:white;
  border:1px solid;
  padding: .3rem;

 
 }
 button{
  margin-bottom: 1rem;
  margin-top: .6rem;

 }
 
  }
  h2{
    color:white;
    margin-bottom: 2rem;
    border-bottom:1px solid rgb(245, 245, 92);
   }
 
}
%base-sectionBtnoption-style{

margin: 0 40rem;
padding: 2rem;
color: white;
a{
 text-decoration: none;
 color: rgb(245, 245, 92);
 &:hover{
   text-decoration: underline;
 }
}


}
#main-segurado{
  @extend %base-sectionTabela-style;

}
.btn-container{
  @extend %base-sectionBtnoption-style;
}

</style>