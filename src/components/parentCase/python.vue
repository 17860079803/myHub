<template>
  <div class="box">
    <h3>python讲师</h3>
    <v-card v-for="item in teachers" :key="item.id" :info="item"></v-card>
  </div>
</template>

<script>
import vCard from "./card.vue"
export default {
    components:{
        vCard
    },
  data() {
    return {
      teachers: [
        {
          id: 7,
          name: "赵老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109014053660.jpg",
          job: "院长"
        },
        {
          id: 8,
          name: "周老师",
          img:
            "http://www.ujiuye.com/uploadfile/2020/0617/20200617115557480.jpg",
          job: "副院长"
        },
        {
          id: 9,
          name: "吴老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109013526885.jpg",
          job: "高级讲师"
        }
      ]
    };
  }
};
</script>

<style>
</style>