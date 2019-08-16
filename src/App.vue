<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  created () {
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>

html,body,#app {
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding:0;
}
.el-header,.el-main {
  padding:0 !important;
}
.el-header {
  height: 58px !important;
}
</style>
