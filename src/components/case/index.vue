<template>
  <div>
      <h1>子传父案例</h1>
      <button @click="showPicker=true">加入购物车</button>
      <v-picker v-if="showPicker" @cancel="showPicker=false"></v-picker>


    <button @click="showToast1=true">登录</button>
    <v-toast title="登录成功" v-if="showToast1" @close="showToast1=false"></v-toast>

    <button @click="showToast2=true">注册</button>
    <v-toast title="注册成功" v-if="showToast2" @close="showToast2=false"></v-toast>


    <button @click="showToast3=true">加入</button>
    <v-toast title="加入成功" v-if="showToast3" @close="showToast3=false"></v-toast>

  </div>
</template>

<script>
import vPicker from "./picker"
import vToast from "./toast"
export default {
    components:{
        vPicker,
        vToast
    },
    data(){
        return {
            showPicker:false,
            showToast1:false,
            showToast2:false,
            showToast3:false
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>