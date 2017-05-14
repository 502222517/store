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
		padding: 50px 20px;
		width:800px;
		// height:550px;
		background: #fff;
		transform:translate(-50%,-50%);
		.ic_close{
			position:absolute;
			top: 20px;
			right:20px;
			z-index:9;

		}
		.pro-content{
			height:400px;
			.pro-img-box{
				margin:30px 30px 0 0;
				border: 1px solid #ccc;
				>img{
					width:100%;
					height:auto;
					max-height: 350px;
				}
			}
			.pro-info{
				text-align: left;
				.pro-title{
					line-height: 30px;
					font-size: 20px;
					color:#333;
					border-bottom: 1px solid #ccc;
				}
				.pro-options{
					padding:20px 0 0;
					line-height:28px;
					font-size: 14px;
					color:#666;
					.item-label{
						display: inline-block;
						width: 80px;
						text-align:justify;
						overflow: hidden;
					}
					.pro-price{
						font-size: 20px;
						font-weight: bold;
						color: $redColor;
						>small{
							font-size:12px;
						}
					}
				}
			}
		}
		
		.pro-variant{
			padding:20px 0 0;
			text-align: left;
			.img-list{
				width:auto;
				.img-item{
					display:inline-block;
					margin: 0 10px 0 0;
					width:75px;
					height:75px;
					border:1px solid #eee;
					cursor: pointer;
					>img{
						width:100%;
						height:100%;
					}
				}
				.img-item.selected{
					position:relative;
					border:1px solid $redColor;
					&:before{
						content: "";
						display:inline-block;
						position:absolute;
						top: 0;
						left: 50%;
						transform:translate(-50%,-99%);
						width: 0;
					    height: 0;
					    border-left: 5px solid transparent;
					    border-right: 5px solid transparent;
					    border-bottom: 6px solid $redColor;
					}
				}
			}
		}
		.ic_prev{
			position:absolute;
			top:50%;
			left:-120px;
			transform:translate(0,-55%);
		}
		.ic_next{
			position:absolute;
			top:50%;
			right:-120px;
			transform:translate(0,-55%);
		}
	}
</style>
<template>
<div v-show="isShow" class="product-view">
	<vue-mask :visible="mask_visible" @tap="maskTap" ></vue-mask>
	<div class="float-view">
		<span class="ic_close" @click="hide"></span>
		<div class="flex-box pro-content">
			<div class="flex-item">
				<div class="pro-img-box">
					<img src="../../../data/images/product/1.jpg">
				</div>
			</div>	
			<div class="flex-item">
				<div class="pro-info">
					<h3 class="pro-title">男夏季男士跑步足球运动服套装</h3>
					<dl class="pro-options">
						<dd class="flex-box">
							<div class="item-label">编&nbsp;&nbsp;号：</div>
							<div class="flex-item">A001</div>
						</dd>
						<dd class="flex-box">
							<div class="item-label">价&nbsp;&nbsp;格：</div>
							<div class="flex-item">
								<span class="pro-price"><small>￥</small>139</span>
							</div>
						</dd>
					</dl>
				</div>
			</div>
		</div>

		<div class="pro-variant">
			<ul class="img-list">
				<li @click="choose(0)" class="img-item" :class="{selected:selectedIndex==0}"><img src="../../../data/images/product/1.jpg"></li>
				<li @click="choose(1)" class="img-item" :class="{selected:selectedIndex==1}"><img src="../../../data/images/product/1.jpg"></li>
				<li @click="choose(2)" class="img-item" :class="{selected:selectedIndex==2}"><img src="../../../data/images/product/1.jpg"></li>
			</ul>
		</div>

		<span class="ic_prev" @click="prev"></span>
		<span class="ic_next" @click="next"></span>

	</div>

	


</div>
</template>
<script>

export default {
	data () {
        return {
			mask_visible:1,
			isShow:1,

			selectedIndex:0,
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
			
		},
		show (){
			var $this=this;
			$this.mask_visible=1;
			$this.isShow=1;
		},
		hide (){
			var $this=this;
			$this.mask_visible=0;
			$this.isShow=0;
		},
		fetch(){
			var $this=this;

		},
		choose (index){
			var $this=this;
			$this.selectedIndex=index;
		},
		prev(){
			var $this=this;
			if($this.selectedIndex>0){
				$this.selectedIndex--;
			}
		},
		next(){
			var $this=this;
			if($this.selectedIndex<2){
				$this.selectedIndex++;
			}
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

