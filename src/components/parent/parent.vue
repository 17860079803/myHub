<template>
    <div class="box">
        <h2>this is parent</h2>
        <div>msg:{{msg}}</div>
        <input type="text" v-model="msg">

        <div>msg2:{{msg2}}</div>
        <input type="text" v-model="msg2">

        <hr>
        <div>json.msg:{{json.msg}}</div>
        <input type="text" v-model="json.msg">

        <!-- 父传子：父组件将数据传递给子组件的自定义属性上，子组件通过props接收，然后就可以 使用了 -->
        <v-child :info="msg" :msg2="msg2" :json="json"></v-child>
    </div>
</template>

<script>
import vChild from "./child.vue"
export default {
    data(){
        return {
            msg:"parent data",
            msg2:"这是第二个数据",
            json:{
                msg:"这是第三个数据"
            }
        }
    },
    components:{
        vChild
    }
}
</script>

<style>

</style>