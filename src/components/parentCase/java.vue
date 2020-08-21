<template>
  <div class="box">
      <h3>java讲师</h3>
      <v-card v-for="item in teachers" :key="item.id" :info="item"></v-card>
  </div>
</template>

<script>
import vCard from "./card.vue"
export default {
    data(){
        return {
            teachers:[
               {
                    id:5,
                    name:"吴老师",
                    img:"http://www.ujiuye.com/uploadfile/2019/0423/20190423095001647.jpg",
                    job:"院长"
                },
                 {
                    id:6,
                    name:"杨老师",
                    img:"http://www.ujiuye.com/uploadfile/2019/0423/20190423095245171.jpg",
                    job:"副院长"
                },
            ]
        }
    },
    components:{
        vCard
    }
}
</script>

<style>

</style>