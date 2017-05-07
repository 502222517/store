<style scoped lang="scss">
	.mask{
		position: absolute;
		top:0;
		left: 0;
		z-index: 99;
		width:100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
	}
</style>
<template>
<div v-show="visible" class="mask" @click="click"></div>
</template>
<script>

export default {
	props:{
		visible:{
			type:[Number,Boolean],
			default:0
		}
	},
	data () {
        return {

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
		click (){
			var $this=this;
			$this.$emit('tap');
		}
    },
    watch: {
    }
}

</script>

