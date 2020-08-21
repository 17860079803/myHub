<template>
  <div class="box">
      <h3>ui讲师</h3>
      <v-card v-for="item in teachers" :key="item.id" :info="item"></v-card>
  </div>
</template>

<script>
import vCard from "./card.vue"
export default {
    components:{
        vCard
    },
    data(){
        return {
            teachers:[
                {
                    id:1,
                    name:"王老师",
                    img:"http://www.ujiuye.com/uploadfile/2019/0109/20190109071643185.jpg",
                    job:"院长"
                },
                 {
                    id:2,
                    name:"李老师",
                    img:"http://www.ujiuye.com/uploadfile/2019/0114/20190114094601629.png",
                    job:"副院长"
                },
                 {
                    id:3,
                    name:"赵老师",
                    img:"http://www.ujiuye.com/uploadfile/2019/0109/20190109071725808.jpg",
                    job:"高级讲师"
                },
            ]
        }
    }
}
</script>

<style>

</style>