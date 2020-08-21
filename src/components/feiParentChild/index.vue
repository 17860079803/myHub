<template>
  <div>
      <h1>非父子传值</h1>
      <v-a></v-a>
      <v-b></v-b>
      <v-c></v-c>
  </div>
</template>

<script>
import vA from "./a"
import vB from "./b"
import vC from "./c"
export default {
    components:{
        vA,
        vB,
        vC
    }
}
</script>

<style>

</style>