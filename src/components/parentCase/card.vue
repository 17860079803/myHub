<template>
  <div class="card">
      <img :src="info.img" alt="">
      <h4>{{info.name}}</h4>
      <p>{{info.job}}</p>
  </div>
</template>

<script>
export default {
    props:["info"]
}
</script>

<style>
.card{
    width: 100px;
    height: 250px;
    display: inline-block;
    padding:10px;
    margin: 10px;
    border: 2px solid blue;
}
.card img{
    width: 100px;
    height: 150px;
}
.card h4{
    color: brown;
}
.card h4,.card p{
    text-align: center;
}
</style>