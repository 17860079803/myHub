<template>
    <div class="box">
        <h2>this is parent2</h2>
        <v-child :msg="msg" :age="age"></v-child>
        <v-child :msg="'123'"></v-child>
        <v-child :msg="'true'"></v-child>
    </div>
</template>

<script>
import vChild from "./child.vue"
export default {
    data(){
        return {
            msg:"this is msg",
            age:20
        }
    },
    components:{
        vChild
    }
}
</script>

<style>

</style>