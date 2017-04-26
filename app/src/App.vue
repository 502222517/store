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

<style  lang="scss">
@import './styles/reset.css';
@import './styles/common.scss';
@import './styles/icon.scss';

#app{
	text-align: center;
}

</style>
