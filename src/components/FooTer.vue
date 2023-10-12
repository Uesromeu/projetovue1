<template>
<div>
    <footer class="container-fluid" id="footer-th">
        <div class="row">
            <div class="col-md-4 col-xs-12 th-descricao">
                <img src="/img/human-5688156_1280.jpg" alt="thiago-descricao" class="img-fluid th-img">
                <ul class="lista-th">
                    <li class="item-th">Thiago Theles-Corretor  de Seguros</li>
                    <li class="item-th"> <a href="" class="link-footer">Whatssap:<strong>(62)9999-9999</strong></a></li>
                    <li class="item-th">thiagotelles@gmail.com</li>
                    <li class="item-th">Susep:<strong>1928394090-1</strong></li>

                </ul>
            </div>
            <div class="col-md-4 col-xs-12 th-sociais">

                <ul class="lista-sociais">
                    <span>Rede Sociais</span>
                    <li class="item-sociais"> <a href="" class="link-footer">Facebook</a></li>
                    <li class="item-sociais"> <a href="" class="link-footer">Instragan</a></li>
                    <li class="item-sociais"> <a href="" class="link-footer">Linkedin</a></li>
                    <li class="item-sociais"> <a href="" class="link-footer">Tiwter</a></li>

                </ul>
            </div>
            <div class="col-md-4 col-xs-12 th-sociais">

                <ul class="lista-sociais">
                    <span>Parceiros</span>
                    <li class="item-sociais">Parceira Seguros</li>
                    <li class="item-sociais">WR Dev.UL.Ux</li>
                    <li class="item-sociais">Th&Seguros</li>
                    <li class="item-sociais">Porto Seguros-Consorcios</li>
                </ul>
            </div>
        </div>

    </footer>
    <section class="container-fluid">
        <div class="copy">
            <span class="copy-desc">Direitos Reservados &copy;Thiago&seguros-2023 </span>
        </div>
    </section>
</div>
</template>
<script>
export default {
    name: 'FooTer'
}
</script>
<style lang="scss">
%base-sectionFooter-style{
  background-color: black;
  border-top: 1px solid rgb(245, 245, 92);
  width: 100%;
  color: white;
 

  .th-img{
  width:50%;
  padding: 0.8rem;
  float:left;
  }
  .lista-th{
   margin-top: 2rem;
  }
  .item-th{
    list-style: none;
  
 }
 .th-sociais{
  padding: 2rem;
  text-align: center;

  .item-sociais{
    list-style: none;
  }
 }
 .link-footer{
  color: white;
  text-decoration: none;
 }
 
}
%base-sectionCopy-style{
  text-align: center;
  background-color: rgb(1, 2, 17);
  color: rgb(245, 245, 92);
  font-size: 10px;
}
#footer-th{
 @extend %base-sectionFooter-style;
 

}
.copy{
 @extend %base-sectionCopy-style;
 }


</style>