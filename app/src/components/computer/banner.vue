<template>
<div class="banner-view">
    <ul class="banners">
        <li class="banner">
            <img src="../../data/images/banner/2.jpg">
        </li>
    </ul>
    <span class="ic_prev prev"></span>
    <span class="ic_next next"></span>
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
        width: 80px;
        height: 80px;
        transform:translate(0,-50%);
        border-radius: 6px;
        cursor: pointer;
        background:rgba(0,0,0,0.2);
        &:active{
            background:rgba(0,0,0,0.15);
        }
    }
    .prev{
        left: 10px;
    }
    .next{
        right: 10px;
    }
}
</style>