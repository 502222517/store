<template>
<div class="pc-head clearfix">
	<div class="logo-box">
		<div class="logo-cell">
			<vue-logo></vue-logo>
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
	width: $pcWidth;
	
	.logo-box,.menus-box{
		height: 130px;	
	}

	.logo-box{
		position: relative;
		float: left;
		width: 550px;
		margin-right: -550px;
		.logo-cell{
			padding-top: 55px;	
		}
	}
	.menus-box{
		float: right;
		width: 100%;
		.menus{
			margin-left:  550px;
		}
	}
	
	.menus{
		padding-top: 55px;
		line-height: 45px;
		font-size: 16px;
		cursor: pointer;
	}
	.menus>li.menu-item{
		display: inline-block;
		float: left;
		width: 120px;
		text-align: center;
		color: #666;
	}
	.menus>li.menu-item:hover,.menus>li.menu-item.selected{
		color:$redColor;
	}
}
</style>