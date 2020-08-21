<template>
  <div class="box">
      <h1>this is parent</h1>
      <p>n:{{n}}</p>
      <button @click="add">++</button>
      <p>name:{{name}}</p>
      <!-- 绑定了一个自定义事件 -->
      <v-child @addn="add" @changeName="cname"></v-child>
  </div>
</template>

<script>
import vChild from "./child"
export default {
    components:{
        vChild
    },
    data(){
        return {
            n:1,
            name:"妲己"
        }
    },
    methods:{
        add(){
            this.n++;
        },
        cname(e){
            console.log(e);
        }
    }
}
</script>

<style>

</style>