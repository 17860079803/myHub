<template>
  <div class="picker" @click.self="cancel">
      <div class="con">
        <h3 @click="cancel">X</h3>
        <h3>请选择你的商品规格</h3>
        <button>64G</button>
        <button>128G</button>
        <button>256G</button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        cancel(){
            this.$emit("cancel")
        }
    }
}
</script>

<style scoped>
.picker{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
}
h3{
    cursor: pointer;
}
.con{
    padding: 20px;
    background: pink;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}

</style>