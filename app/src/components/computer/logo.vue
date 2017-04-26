<template>
<div class="logo">
	<strong>
	<span class="red">WONDERFUL</span><span> DRESS</span>
	</strong>
</div>
</template>
<script>

export default {
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
            
    },
    watch: {

    }
}

</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';
.logo{
	line-height: 40px;
	font-size:36px;
	color:#CCCCCC;
	span{
		font-family:Arial;
		font-weight: bold;	
	}
	.red{
		color:$redColor;
	}
}
.logo.min{
	font-size:24px;
}
</style>