<template>
<div class="pc-head clearfix">
	<div class="logo-box">
		<div class="logo">
			<strong>
			<span class="red">WONDERFUL</span><span> DRESS</span>
			</strong>
		</div>
	</div>
	<div class="menus-box">
		<ul class="menus clearfix">
			<li class="menu-item selected">首页</li>
			<li class="menu-item">精选特卖</li>
			<li class="menu-item">精品男装</li>
			<li class="menu-item">精品女装</li>
			<li class="menu-item">品牌介绍</li>
		</ul>
	</div>
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

.pc-head{
	margin: auto;
	width: 1200px;	 
	
	.logo-box,.menus-box{
		height: 130px;	
	}

	.logo-box{
		position: relative;
		float: left;
		width: 550px;
		margin-right: -550px;
	}
	.menus-box{
		float: right;
		width: 100%;
		.menus{
			margin-left:  550px;
		}
	}
	.logo{
		padding-top: 40px;
		line-height: 40px;
		font-family:Arial;
		font-size:36px;
		color:#CCCCCC;
		.red{
			color:$redColor;
		}
	}
	.menus{
		padding-top: 40px;
		line-height: 45px;
		font-size: 16px;
		cursor: pointer;
	}
	.menus>li.menu-item{
		display: inline-block;
		float: left;
		width: 120px;
		text-align: center;
		color: #666666;
	}
	.menus>li.menu-item.selected{
		color:$redColor;
	}
}
</style>