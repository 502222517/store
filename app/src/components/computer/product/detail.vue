<style scoped lang="scss">
	@import '../../../styles/variable.scss';
	.product-view{
		position: fixed;
		top: 0;
		left: 0;
		width:100%;
		height:100%;
		z-index: 2;
		min-width: $pcWidth;
	}
	.float-view{
		position:absolute;
		top:50%;
		left:50%;
		z-index: 100;
		padding: 40px 20px;
		width:800px;
		height:550px;
		background: #fff;
		transform:translate(-50%,-50%);
	}
</style>
<template>
<div v-show="isShow" class="product-view">
	<vue-mask :visible="mask_visible" @tap="maskTap" ></vue-mask>
	<div class="float-view">
		
	</div>
</div>
</template>
<script>

export default {
	data () {
        return {
			mask_visible:1,
			isShow:1,

			id:0
        }
    },
    components:{

    },
    created (){

    },
    mounted () {

    },
    beforeDestroy () {
    },
	methods: {   
		maskTap (){
			var $this=this;
			$this.mask_visible=0;
		},
		show (){

		},
		hide (){

		},
		fetch(){
			var $this=this;

		}
    },
    watch: {
    	id (val){
    		if(val !=0){
    			this.fetch();
    		}
    		
    	}
    }
}

</script>

