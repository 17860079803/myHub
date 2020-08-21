<template>
  <div>
    <!-- 父传子的理论 -->
    <!-- <v-parent></v-parent> -->

    <!-- props验证 -->
    <!-- <v-parent2></v-parent2> -->

    <!-- 父传子案例 -->
    <!-- <v-case></v-case> -->

    <!-- 子传父理论 -->
    <!-- <v-parent3></v-parent3> -->

    <!-- 子传父案例 -->
    <!-- <v-child-parent></v-child-parent> -->


    <!-- 非父子 -->
    <!-- <v-fei-parent-child></v-fei-parent-child> -->

    <!-- is jquery  -->
    <!-- <v-is></v-is> -->

    <!-- slot  -->
    <v-slot></v-slot>
  </div>
</template>

<script>
import vParent from "./components/parent/parent.vue"
import vCase from "./components/parentCase/case.vue"
import vParent2 from "./components/parent2/parent.vue"
import vParent3 from "./components/lilun/parent"
import vChildParent from "./components/case/index"
import vFeiParentChild from "./components/feiParentChild/index"
import vIs from "./components/is/is"
import vSlot from "./components/slot/slot"
export default {
  components:{
    vParent,
    vCase,
    vParent2,
    vParent3,
    vChildParent,
    vFeiParentChild,
    vIs,
    vSlot
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.box{
  width: 80%;
  margin: 20px auto;
  border: 1px solid salmon;
}
</style>