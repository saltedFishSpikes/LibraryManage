<template>
  <div class="lib-aside">
    <el-col>
      <div class="logo">LOGO</div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @select="choose">
        <router-link to="/BookManage">
          <el-menu-item index="1" :class="{selected:chosen==1}" title="图书管理" >
            <i class="el-icon-selfzhuye"></i>
            <span slot="title">图书管理</span> 
          </el-menu-item>
        </router-link>
        <router-link to="/bookBorrow">
          <el-menu-item index="2" :class="{selected:chosen==2}" title="图书借阅">
            <i class="el-icon-menu"></i>
            <span slot="title">图书借阅</span>
          </el-menu-item>
        </router-link>
        <router-link to="/bookRecommanded">
          <el-menu-item index="3" :class="{selected:chosen==3}" title="图书推荐">
            <i class="el-icon-selfren111"></i>
            <span slot="title">图书推荐</span>
          </el-menu-item>
        </router-link>
        <router-link to="/bookDonate">
          <el-menu-item index="4" :class="{selected:chosen==4}" title="图书捐赠">
            <i class="el-icon-selfshu"></i>
            <span slot="title">图书捐赠</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'LibraryAside',
  data(){
    return {
      
    }
  },
  computed:{
    chosen:function(){
      return this.$store.state.index
    }
  },
  methods:{
    choose:function(index){
      this.$store.state.index = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-col {
  padding-top:10px;
}
.logo {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  color:#3080fe;
}
.el-menu {
  border:0;
}
.el-menu-item {
  box-sizing:border-box;
  width: 100%;
  padding:0 ;
  height:40px;
  line-height: 40px;
  color:rgb(144,147,153);
}
.el-menu-item.is-active {
  color:rgb(144,147,153);
}
.selected {
  box-sizing:border-box;
  font-weight: 800;
  border-left:1px solid #3080fe;
  color:#3080fe !important;
  background-color: rgb(236, 245, 225);
}
.el-menu-item:hover {
  color:rgb(64,158,255)
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
