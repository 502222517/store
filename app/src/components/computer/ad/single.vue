<template>
	<div class="ad-item">
       <h1 class="title">运动与激情</h1>
       <div class="content">
       		<div class="cn">运动，一种涉及体力和技巧的由一套规则或习惯所约束的活动，通常具有竞争性</div>
       		<div class="en">Movement, involving a physical strength and skills of the activities of the constraint by a set of rules or habits</div>
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
.ad-item{
	width: 100%;
	height: 300px;
	background: url(../../../data/images/ad/1.jpg) no-repeat;
	background-size: 100% 100%;
	line-height: 30px;
	text-align: center;
	font-size: 16px;
	color:#fff;
	.title{
		position: relative;
		padding: 80px 0 30px;
		font-weight: bolder;
		font-size: 45px;
	}
	.title:after{
		display: inline-block;
		content: "";
		position: absolute;
		left: 48.5%;
		right: 48.5%;
		bottom: 4px;
		height: 4px;
		background: #f13a3a;
	}
	.content{
		padding: 20px 0;
	}
}
</style>