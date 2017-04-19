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

     <div class="fill-bottom"></div>
  </div>
</template>

<script>
import banner from "@/components/computer/banner";
import subBanner from "@/components/computer/sub-banner";

export default {
	name: 'home',
	data () {
		return {
		  msg: 'Welcome to computer website'
		}
	},
    components:{
      'vue-banner':banner,
      'vue-sub-banner':subBanner
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
.cell-category{
  padding: 40px 0 60px;
  border-bottom: 1px solid #eee;
}
.fill-bottom{
  height: 50px;
}
</style>