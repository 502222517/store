<template>
	<div class="rotate-view">

		<div class="cell-box clearfix">
			<div class="cell">
				<h3 class="title">3D旋转 X/Y/Z轴</h3>
				<img class="cell-img"  src="../assets/demo/coordinate.jpg" alt="">				
			</div>
			<div class="cell">
				<h3 class="title">X轴旋转</h3>
				<div class="side-box">
					<div class="side bg-none">0deg</div>
					<div class="side bg-blue rotate-x">
						<span>0%  0deg</span><br/>
    					<span>100% -180deg</span>
					</div>
				</div>				
			</div>	
			<div class="cell">
				<h3 class="title">Y轴旋转</h3>
				<div class="side-box">
					<div class="side bg-none">0deg</div>
					<div class="side bg-blue rotate-y">
						<span>0%  0deg</span><br/>
    					<span>100% 180deg</span>
					</div>
				</div>				
			</div>
			<div class="cell">
				<h3 class="title">Z轴旋转</h3>
				<div class="side-box">
					<div class="side bg-none">0deg</div>
					<div class="side bg-blue rotate-z">
						<span>0%  0deg</span><br/>
    					<span>100% 180deg</span>
					</div>
				</div>				
			</div>
		</div>

		<div class="tips">
			<pre class="code">
				@keyframes animation-rotate-x{
				    0%{transform:perspective( 200px ) rotateX(0deg);}
				    100%{transform:perspective( 200px ) rotateX(-180deg);}
				}
				@keyframes animation-rotate-y{
				    0%{transform:perspective( 200px ) rotateY(0deg);}
				    100%{transform:perspective( 200px ) rotateY(180deg);}
				}
				@keyframes animation-rotate-z{
				    0%{transform:perspective( 200px ) rotateZ(0deg);}
				    100%{transform:perspective( 200px ) rotateZ(180deg);}
				}
			</pre>
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

@keyframes animation-rotate-x{
    0%{transform:perspective( 200px ) rotateX(0deg);}
    100%{transform:perspective( 200px ) rotateX(-180deg);}
}
@keyframes animation-rotate-y{
    0%{transform:perspective( 200px ) rotateY(0deg);}
    100%{transform:perspective( 200px ) rotateY(180deg);}
}
@keyframes animation-rotate-z{
    0%{transform:perspective( 200px ) rotateZ(0deg);}
    100%{transform:perspective( 200px ) rotateZ(180deg);}
}


.rotate-view{
	padding: 50px;
	text-align: center;

	.cell-box{
		width: 100%;
		.cell{
			display: inline-block;
			width: 200px;
			float: left;
			text-align: center;
			.title{
				line-height: 40px;
				color: #333;
			}
			.cell-img{
				width: 100%;
				height: auto;
			}

			.side-box{
				position:relative;
				margin: auto;
				width: 150px;
				height: 150px;
				.side{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					line-height: 30px;
					color: #fff;
				}
				.rotate-x{
					animation:animation-rotate-x 4s ease-in-out 0s infinite alternate;
				}
				.rotate-y{
					animation:animation-rotate-y 4s ease-in-out 0s infinite alternate;
				}
				.rotate-z{
					animation:animation-rotate-z 4s ease-in-out 0s infinite alternate;
				}

				.bg-none{
					border:1px solid #ccc;
				}
				.bg-green{
					background: #008000;
				}
				.bg-blue{
					background: #2196f3;
				}
			}
		}

	} // cell-box

	.tips{
		padding: 50px;
		line-height: 32px;
		color: #666;
		text-align: left;

		.code{
			background: #eee;
			border:1px solid #ccc;
		}
	}

}
</style>