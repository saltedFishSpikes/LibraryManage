<template>
  <div class="lib-header">
    <el-row>
      <el-col :span="4" class="lib-header-logo">
        <div @click='jump' >政府管理系统</div>
      </el-col>
      <el-col :span="3" :offset="14">
        <span class="feedback" title="反馈" @click="feedback()">反馈</span>
        <span class="help" title="帮助" @click="help()">帮助</span>
      </el-col>
      <el-col :span="3">
        <el-dropdown>
          <div>
            <div class="avatar">
              <img src="../assets/avatar.png" alt="">
            </div>
            <div class="user-info">
              <span>淘小宝</span><span>技术部</span>
            </div>
            <i class="el-icon-arrow-down arrow-down"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="logout()">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    
    
  </div>
</template>

<script>
export default {
  name: 'LibraryHeader',
  data(){
    return {
      
    }
  },
  methods:{
    jump:function(){
      this.$store.state.index = 1
      this.$router.push('/bookManage')
    },
    feedback:function(){
      window.open("",'_blank')
    },
    help:function(){
      window.open("",'_blank')
    },
    logout:function(){
      this.$store.state.index = "1"
      this.$router.push('/libraryLogin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lib-header {
  width: cal(100% - 30px);
  background-color:rgb(48,128,254);
  padding:10px 15px;
  min-width: 930px;
}

.el-col {
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  color:white;
}
.lib-header-logo {
  font-size: 24px;
  text-align: left;
  min-width: 150px;
  cursor: pointer;
}
.router-link {
  color: white !important;
  font-size: 24px;
}
.feedback, .help {
  display: inline-block;
  padding:10px 15px;
  cursor: pointer;
}
.feedback:hover,.help:hover {
  background-color:rgb(24,97,213)
}
.el-dropdown {
  color:white;
  position: relative;
  cursor: pointer;
}
.el-dropdown-item {
  white-space: nowrap;
}
.arrow-down {
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.avatar {
  background: white;
  border-radius: 5px;
  width: 30px;
  height:30px;
  border:0;
  display: inline-block;
  margin-right: 10px;
}
.avatar > img {
  width:100%;
  height:100%;
}
.user-info {
  display: inline-block;
}
.user-info > span {
  display: block;
}

</style>
