<template>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <span>{{num}}</span>
    </div>
</template>

<script>
    export default {
      props:["num"],
        name: "Counter",
        data(){
          return{
            num:0
          }
        },
        methods:{
          increment(){
            this.num++
          },
          decrement(){
            this.num--
          }
        }
    }
</script>

<style scoped>

</style>
