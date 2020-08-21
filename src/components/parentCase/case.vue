<template>
  <div class="box">
      <h2>父传子案例</h2>
        <v-ui></v-ui>
        <v-java></v-java>
        <v-python></v-python>
  </div>
</template>

<script>
import vUi from "./UI.vue"
import vJava from "./java.vue"
import vPython from "./python.vue"
export default {
    components:{
        vUi,
        vJava,
        vPython
    }
}
</script>

<style>

</style>