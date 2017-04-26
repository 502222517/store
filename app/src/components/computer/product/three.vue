<template>
	<div class="flex-box">
		<vue-single class="flex-item"></vue-single>
		<vue-single class="flex-item margin-split"></vue-single>
		<vue-single class="flex-item"></vue-single>
	</div>
</template>
<script>
import single from './single'; 

export default {
	data () {
        return {

        }
    },
    components:{
    	'vue-single':single
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
	.margin-split{
		margin: 0 10px;
	}
</style>