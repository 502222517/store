<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './styles/reset.css';
@import './styles/common.scss';

#app{
	text-align: center;
}

</style>
