	<template>
<div class="pc-head clearfix">
	<div class="logo-box">
		<div class="logo-cell">
			<vue-logo></vue-logo>
		</div>
	</div>
	<div class="menus-box">
		<ul class="menus clearfix">
			<router-link tag="li" v-for="m in menus" class="menu-item" :class="{selected: m.val ==index}"  :to="m.path">{{m.text}}</router-link>
		</ul>
	</div>
</div>
</template>
<script>

export default {
	props:{
		index:{
			type:Number,
			default:1
		}
	},
	data () {
        return {
        	menus:[
        		{val:1,text:'首页',path:'/'},
        		{val:2,text:'精选特卖',path:'/choiceness'},
        		{val:3,text:'精品男装',path:'/'},
        		{val:4,text:'精品女装',path:'/'},
        		{val:5,text:'品牌介绍',path:'/'}
        	]
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