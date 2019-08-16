<template>
  <div class="book-manage">
    <el-container>
      <el-header>图书管理</el-header>
      <el-main>
        <el-menu :default-active="getIndex" mode="horizontal" @select="handleSelect" active-text-color="#3080fe">
          <el-menu-item index="1">全部图书</el-menu-item>
          <el-menu-item index="2">借阅信息</el-menu-item>
        </el-menu>
        <bookAll v-if="show"></bookAll>
        <bookInfo v-if="!show"></bookInfo>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import bookAll from './BookAll.vue'
import bookInfo from './BookInfo.vue'
export default {
  name: 'BookManage',
  components:{
    bookAll,
    bookInfo
  },
  data(){
    return {
      show:true
    }
  },
  computed:{
    getIndex:function(){
      return this.$store.state.manageIndex
    }
  },
  methods:{
    handleSelect:function(key, keyPath) {
      if(key === '1'){
        this.$store.state.manageIndex = "1"
        this.show = true
      }else if(key === '2'){
        this.$store.state.manageIndex = "2"
        this.show=false
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-manage {
  border-radius: 2px;
  padding: 10px;
  min-width: 1006px;
}

.el-header {
  display: inline;
  line-height: 60px;
}
.el-menu-item {
  height: 40px;
  line-height:40px;
}
</style>
