<template>
  <div>
    <NavHeader></NavHeader>
    <NavBread>
      <span>Goods</span>
    </NavBread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)">All</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li>
                  <div class="pic">
                    <a href="#"><img src="/static/img/1.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">XX</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import NavHeader from '../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import NavBread from './../components/NavBread'
  import axios from 'axios'

  export default {
    data(){
      return{
         goodsList:[]
      }
    },
    name: "GoodsList",
    components: {
       NavHeader,
       NavFooter,
      NavBread
    },
    mounted() {
      this.getGoodsList()
    },
    methods:{
      getGoodsList(){
        axios.get("/goods").then((result)=>{
          var res = result .data;
          this.goodsList = res.result
        })
      }
    }
  }
</script>

<style>

</style>
