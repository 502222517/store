<template>
	<div class="footer">
		<div class="content flex-box">
			<div class="flex-item">
				<h3 class="title"><span class="tag-line">公司简介</span></h3>
				<p class="desc">
					我们公司致力于营造快乐、温馨、有爱的公司氛围，为每一位伙伴创造和谐友爱的工作环境…
				</p>
				<div class="email">邮箱：浮游 502222517@qq.com</div>
			</div>
			<div class="flex-item ">
				<h3 class="title"><span class="tag-line">行业新闻</span></h3>
				<ul class="articles">
					<li class="article"><a href="#">致我们终将到来的青春！</a></li>
					<li class="article"><a href="#">穿上安踏的那一套运动装 所有的规则统统都走开</a></li>
					<li class="article"><a href="#">教你如何把瑜伽裤穿出街拍感</a></li>
				</ul>
			</div>
			<div class="contact">
				<div class="logo-cell">
					<vue-logo class="min"></vue-logo>
				</div>
				<div class="way-box">
					<span class="ic_qq"></span>
					<span class="ic_wx"></span>
					<span class="ic_wb"></span>
				</div>
			</div>
		</div>
		<div class="copyright">&copy; 2017&nbsp;-&nbsp;风向互联版权所有</div>
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

.footer{
	padding: 30px 0 0;
	background: #2b2b2b;
	.content{
		margin: auto;
		width: $pcWidth;
		text-align: left;
		line-height: 28px;
		font-size: 14px;
		color:#999;

		.flex-item{
			margin-right: 60px;
		}
		.title{
			line-height: 50px;
			font-size: 16px;
			color: #c4c4c4;
			.tag-line{
				display: inline-block;
				position: relative;
			}
			.tag-line:after{
				content: "";
				display: inline-block;
				position: absolute;
				left: 0;
				width: 100%;
				bottom: 0;
				border-bottom: 2px solid #b53535;
			}
		}
		.desc{
			padding: 30px 0 20px;
		}
		.articles{
			padding: 20px;
			.article{
				list-style: disc;
				a{ color:#999;}
				a:hover{ color:#fff;}

			}
		}
		.contact{
			position: relative;
			padding-left: 60px;
			width: 25%;
		}
		.contact:after{
			content: "";
			display: inline-block;
			position: absolute;
			top: 10px;
			left: 0;
			height: 120px;
			border-right: 1px solid #414141;
		}
		.logo-cell{
			padding: 10px 0 0;
		}
		.way-box{
			padding: 20px 0;
			float: left;
			>span{
				margin-right: 15px;
				cursor: pointer;
			}
		}
	}
	.copyright{
		padding: 10px;
		font-size: 14px;
		color: #666;
	}
}
</style>