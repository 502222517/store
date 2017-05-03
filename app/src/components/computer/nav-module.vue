<template>
	<div class="sub-banner-view ">

		<div class="flex-box multiple-box">
			<div class="flex-item option"><img src="../../data/images/hot/1.jpg"></div>
			<div class="flex-item option middle"><img src="../../data/images/hot/1.jpg"></div>
			<div class="flex-item option"><img src="../../data/images/hot/1.jpg"></div>
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

.sub-banner-view{
	margin: auto;
	width: $pcWidth;

	.multiple-box{
		width: 100%;
		box-sizing:border-box;
		.option{
			width: 380px;
			height: 400px;
			cursor: pointer;
			>img{
				width: 100%;
				max-height:400px;
			}
		}
		.option.middle{
			margin: 0 30px;
		}
	}
}
</style>