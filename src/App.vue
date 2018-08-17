<template>
  <div id="app">
    <router-view />
    <navTab></navTab>
  </div>
</template>
<script>

import navTab from '@/components/tab'
export default {
    data() {
        return {
        }
    },
    components: {
        navTab
    }
};
</script>
<style>
body {
	padding-bottom: 50px;
  	font-size: 16px;
  	background-color: #f8f8f8;
  	-webkit-font-smoothing: antialiased;
}
</style>
