<template>
	<div class="square-view">

		<div class="square cube">
			<div class="up-side"></div>
			<div class="front-side"></div>
			<div class="back-side"></div>
			<div class="left-side"></div>
			<div class="right-side"></div>
			<div class="down-side"></div>
		</div>

		<div class="square square-tip clearfix">
			<div class="up-side"></div>
			<div class="front-side"></div>
			<div class="back-side"></div>
			<div class="left-side"></div>
			<div class="right-side"></div>
			<div class="down-side"></div>
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
	.square-view{
		padding: 50px;
		text-align: center;

		.square{
			position: relative;
			width: 200px;
			height: 200px;
			.up-side,.down-side,.front-side,.back-side,.left-side,.right-side{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				opacity: 0.6;
			}
			.up-side{
				background: #ff0000;
			}
			.down-side{
				background: #ffff00;
			}
			.front-side{
				background: #008000;
			}
			.back-side{
				background: #ff9800;
			}
			.left-side{
				background: #673ab7;
			}
			.right-side{
				background: #2196f3;
			}
		}
		.square.cube{
			transform:rotateX(-33.3deg) rotateY(45deg);

			.up-side{
				transform:rotate(45deg);
			}
			.down-side{
				transform:rotateX(-90deg) translate(0,20px);
			}
		}


		.square.square-tip{
			padding-top: 30px;
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