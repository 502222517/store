<template>
	<div class="square-view">

		<div class="square-warp">
			<div class="square">
				<div class="up-side bg-red"></div>
				<div class="front-side bg-yellow"></div>
				<div class="back-side bg-green"></div>
				<div class="left-side bg-orange"></div>
				<div class="right-side bg-purple"></div>
				<div class="down-side bg-blue"></div>
			</div>
		</div>
		

		<div class="square-tip clearfix">
			<div class="up-side bg-red"></div>
			<div class="front-side bg-yellow"></div>
			<div class="back-side bg-green"></div>
			<div class="left-side bg-orange"></div>
			<div class="right-side bg-purple"></div>
			<div class="down-side bg-blue"></div>
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
	
	.bg-red{
		background: #ff0000;
	}
	.bg-yellow{
		background: #ffff00;
	}
	.bg-green{
		background: #008000;
	}
	.bg-orange{
		background: #ff9800;
	}
	.bg-purple{
		background: #673ab7;
	}
	.bg-blue{
		background: #2196f3;
	}

	.square-view{
		padding: 200px 50px;
		text-align: center;

		.square-warp{
			position: relative;
    		perspective: 1600px;
    		// width: 200px;
    		// height: 200px;

			.square{
				position: relative;
				transform-style: preserve-3d;
    			transform-origin: 50% 50% -100px; //设置3d空间的原点在平面中心再向Z轴移动200px的位置
				.up-side,.down-side,.front-side,.back-side,.left-side,.right-side{
					position: absolute;
					width: 200px;
					height: 200px;
				}
				.up-side{
					top: -100px;
					left: 100px;
					transform-origin: top;
					transform:rotateX(-90deg);
				}
				.down-side{
					bottom: -100px;
					left: 100px;
					transform-origin: bottom;
					transform:rotateX(90deg);
				}
				.front-side{
					top: 100px;
					left: 100px;
					transform: translateZ(200px); 
				}
				.back-side{
					top: 100px;
					left: 100px;
					transform: translateZ(0); 
				}
				.left-side{
					top: -100px;
					left: -100px;
					transform-origin: right;
					transform:rotateY(-90deg);
				}
				.right-side{
					top: -100px;
					left: 300px;
					transform-origin:left;
					transform:rotateY(90deg);
				}
			}
		} // square-warp
		
		.square-tip{
			padding-top: 200px;
			width: 100%;
			height: 50px;
			.up-side,.down-side,.front-side,.back-side,.left-side,.right-side{
				position: relative;
				display: inline-block;
				float: left;
				margin-right: 10px;
				width: 50px;
				height: 50px;
			}
		}

	}
</style>