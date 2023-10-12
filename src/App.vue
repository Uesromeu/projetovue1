<template>
  <div>
  <NavBar/>
    <router-view/>
    <FooTer/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
import FooTer from "@/components/FooTer.vue"
export default {
  components:{
    NavBar,
    FooTer

  }
}
</script>

<style lang="scss">

%base-geral-style {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  padding-top: 5rem;
  background-color:rgb(3, 4, 32) !important;

}
*{
@extend %base-geral-style;
}

</style>
