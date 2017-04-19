<template>
<div class="banner-view">
    <ul class="banners">
        <li class="banner">
            <img src="../../data/images/banner/2.jpg">
        </li>
    </ul>
    <div class="prev"></div>
    <div class="next"></div>
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

.banner-view{
    position: relative;
    width: 100%;
    min-width:$pcWidth;
    .banners{
        .banner{
            display: block;
            width: 100%;
            >img{
                width: 100%;
                height: auto;
            }
        }
    }
    .prev,.next{
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 71px;
        height: 71px;
        transform:translate(0,-50%);
        border-radius: 6px;
        cursor: pointer;
    }
    .prev{
        left: 10px;
        background:rgba(0,0,0,0.2) url('../../assets/icon/left.png') no-repeat;
    }
    .next{
        right: 10px;
        background: rgba(0,0,0,0.2) url(../../assets/icon/right.png) no-repeat;
    }
}
</style>