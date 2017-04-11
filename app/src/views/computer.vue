<template>
  <div class="home">
  	 <div class="cell-head">
        <vue-head></vue-head> 
     </div>
     
     <div >
        
     </div>
  </div>
</template>

<script>

export default {
	name: 'home',
	data () {
		return {
		  msg: 'Welcome to computer website'
		}
	},
    components:{

    },
    created () {

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
.hello{
	margin-top: 60px;
	text-align: center;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
    a{
      color: #42b983;
    }
  }
}
</style>