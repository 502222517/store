<template>
<div class="page-view">
	<div class="cell-head">
        <vue-head :index="2"></vue-head> 
     </div>
     <div class="cell-banner" >
        <vue-sub-banner></vue-sub-banner>
     </div>
     
</div>
</template>
<script>
import subBanner from "@/components/computer/sub-banner";

export default {
	data () {
        return {

        }
    },
    components:{
		'vue-sub-banner':subBanner,
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

</style>