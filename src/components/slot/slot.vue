<template>
  <div>
      <h2>slot</h2>
      <v-one>
          <h3>你们一定要好好学习，千万不要想我一样，靠着一张美丽的容颜，到处混吃混喝！</h3>
      </v-one>

      <v-one></v-one>

      <v-one>
          <div>天道酬勤</div>
          <div>人道酬善</div>
          <div>商道酬信</div>
      </v-one>

      <v-two>
          <ul slot="one">
              <li>锦瑟无端五十弦</li>
              <li>一弦一柱思华年</li>
          </ul>
          <ol slot="two">
              <li>庄生晓梦迷蝴蝶</li>
              <li>望帝春心托杜鹃</li>
          </ol>
          <div slot="two">哈哈哈哈</div>
      </v-two>
      <v-two></v-two>
  </div>
</template>

<script>
import vOne from "./one"
import vTwo from "./two"
export default {
    components:{
        vOne,
        vTwo
    }
}
</script>

<style>

</style>