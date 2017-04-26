<template>
  <div class="home">
  	 <div class="cell-head">
        <vue-head></vue-head> 
     </div>
     <div class="cell-banner" >
        <vue-banner></vue-banner>
     </div>
     <div class="cell-category">
        <vue-sub-banner></vue-sub-banner>
     </div>
     <div class="news-product">
        <h3>秋冬装备全新上市</h3>
        <h1>我们潜心改良装备 让你转账提升表现</h1>
        <menu class="menus">
          <li class="menu-item">运动套装</li>
          <li class="menu-item active">运动上衣</li>
          <li class="menu-item">瑜伽服</li>
        </menu>
        <div class="products">
            <div class="product-row">
              <vue-three-product></vue-three-product>  
            </div>
            <div class="product-row">
              <vue-three-product></vue-three-product>  
            </div>
        </div>
     </div>
     <div class="ad-cell">
       <vue-single-ad></vue-single-ad>
     </div>
     <div class="classify-cell">
        <vue-classify></vue-classify>
     </div>

     <div class="footer-cell">
       <vue-footer></vue-footer>
     </div>
  </div>
</template>

<script>
import banner from "@/components/computer/banner";
import subBanner from "@/components/computer/sub-banner";
import threeProduct from "@/components/computer/product/three";
import singleAd from "@/components/computer/ad/single";
import classify from "@/components/computer/classify";

export default {
	name: 'home',
	data () {
		return {
		   
		}
	},
    components:{
      'vue-banner':banner,
      'vue-sub-banner':subBanner,
      'vue-three-product':threeProduct,
      'vue-single-ad':singleAd,
      'vue-classify':classify
    },
    created () {

    },
    mounted () {

    },
    beforeDestroy () {

    },
	methods: {
            
    },
    watch: {

    }
}

</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';
.cell-category{
  padding: 40px 0 60px;
  border-bottom: 1px solid #eee;
}
.news-product{
  margin: auto;
  padding: 20px 0 60px;
  width: $pcWidth;
  color:#2B2B2B;
  >h3{
    padding: 30px 0;
    font-size: 24px;  
  }
  >h1{
    padding-bottom:40px; 
    font-weight: bold;
    font-size: 42px;
  }
  .menus{
    padding: 20px 0;
    display: block;
    text-align: left;

    .menu-item{
      display: inline-block;
      margin-right: 20px;
      padding:10px 30px;
      background: #f0f0f0;
      font-size: 16px;
      color:#666;
      border-radius: 25px;
      cursor: pointer;
    }
    .menu-item.active,.menu-item:hover{
      background: #f13a3a;
      color:#fff;
    }

  }
  .product-row{
    padding: 20px 0 0;
  }
}

</style>