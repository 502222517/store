<template>
	<div class="deom-view">
		<ul class="links clearfix">
			<router-link tag="li" to="/demo/rotate" class="link-item">3D 旋转</router-link>
			<router-link tag="li" to="/demo/square" class="link-item">3D 正方形</router-link>
			<li class="link-item">none</li>
		</ul>
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
	.deom-view{
		padding:50px 100px;

		.links{
			line-height: 50px;
			font-size: 16px;
			.link-item{
				padding: 0 20px;
				margin-right: 20px;
				display: inline-block;
				float: left;
				color:#666;
				cursor: pointer;
				border: 1px solid #ccc;
			}
			.link-item:hover{
				color:#f13a3a;
			}
		}
	}
</style>