<template>
	<div class="classify-box flex-box">
		<div class="flex-item">
			<div class="ic_sequence sequence_1"></div>
			<h3 class="title">运动套装</h3>
			<p class="desc">体育锻炼有利于人体骨骼、肌肉的生长，增强心肺功能，改善血液循环系统、呼吸系统和消化系统的机能状况，有利于人体的生长发育</p>
			<div class="img-box">
				<img src="../../data/images/classify/1.jpg" alt="运动套装">
			</div>
		</div>
		<div class="flex-item margin-split">
			<div class="ic_sequence sequence_2"></div>
			<h3 class="title">运动上衣</h3>
			<p class="desc">体育锻炼有利于人体骨骼、肌肉的生长，增强心肺功能，改善血液循环系统、呼吸系统和消化系统的机能状况，有利于人体的生长发育</p>
			<div class="img-box">
				<img src="../../data/images/classify/2.jpg" alt="运动上衣">
			</div>
		</div>
		<div class="flex-item">
			<div class="ic_sequence sequence_3"></div>
			<h3 class="title">运动紧身衣</h3>
			<p class="desc">体育锻炼有利于人体骨骼、肌肉的生长，增强心肺功能，改善血液循环系统、呼吸系统和消化系统的机能状况，有利于人体的生长发育</p>
			<div class="img-box">
				<img src="../../data/images/classify/1.jpg" alt="运动紧身衣">
			</div>
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
.classify-box{
	margin: auto;
	padding: 60px 0;
	width: $pcWidth;
	text-align: center;

	.margin-split{
		margin: 0 10px;
	}
	
	.ic_sequence{
		position: relative;
		height: 90px;
	}
	.ic_sequence:after{
		content: "";
		display: inline-block;
		position: absolute;
		left: 45%;
		right: 45%;
		bottom: 0;
		border-bottom: 1px solid #d4d4d4;
	}
	.sequence_1{
		background: url(../../assets/icon/1.png) center center no-repeat;
		background-size: auto 100%;
	}
	.sequence_2{
		background: url(../../assets/icon/2.png) center center no-repeat;
		background-size: auto 100%;
	}
	.sequence_3{
		background: url(../../assets/icon/3.png) center center no-repeat;
		background-size: auto 100%;
	}
	.title{
		padding: 30px 0 20px;
		font-size: 18px;
		color:#333;
	}
	.desc{
		padding: 0 30px 20px;
		line-height: 36px;
		font-size: 14px;
		color:#999;
	}
}
</style>