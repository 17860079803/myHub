<template>
  <div>
    <h1>this is is</h1>
        
    <!-- 1.is可以解决固定搭配 -->
    <ul>
        <li is="v-one"></li>
    </ul>

    <button @click="name='v-one'">one</button>
    <button @click="name='v-two'">two</button>
    <!-- 2.动态组件 -->
    <transition
    enter-active-class="animate__animated animate__flipInX"
    >
        <div :is="name"></div>
    </transition>

    <button @click="teacher='v-java'">java</button>
    <button @click="teacher='v-ui'">ui</button>
    <button @click="teacher='v-python'">python</button>

    <transition
    enter-active-class="animate__animated animate__lightSpeedInLeft"
    >
        <div :is="teacher"></div>

    </transition>

    <button class="btn1">出现</button>
    <button class="btn2">消失</button>
    <div class="red"></div>

  </div>
</template>

<script>
import vOne from "./one"
import vTwo from "./two"
import vJava from "../parentCase/java"
import vUi from "../parentCase/UI"
import vPython from "../parentCase/python"
import $ from "jquery"

export default {
    components:{
        vOne,
        vTwo,
        vJava,
        vUi,
        vPython
    },
    data(){
        return {
            name:"v-one",
            teacher:"v-java"
        }
    },
    mounted(){
        this.$(".btn1").click(()=>{
            this.name="v-two"
            $(".red").slideDown(400)
        })
         this.$(".btn2").click(()=>{
            $(".red").slideUp(400)
        })
    }
}
</script>

<style>
.red{
    width: 100px;
    height: 100px;
    background: red;
}
</style>