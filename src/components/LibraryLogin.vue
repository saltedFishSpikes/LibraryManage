<template>
  <div class="library-login">
    <div class="bg">
      <el-container>
        <el-header>登录</el-header>
        <el-form>
          <el-form-item>
            <el-input placeholder="用户名" v-model="name">
              <i slot="prefix" class="el-icon-selfren111"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="密码" v-model="password">
              <i slot="prefix" class="el-icon-selfsuo"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">
              <span>登录</span>
            </el-button>
          </el-form-item>
          <el-form-item class="tip">
            <span>管理员登录：admin/admin</span>
            &nbsp;&nbsp;
            <span>用户登录：user/user</span>
          </el-form-item>
        </el-form>
        <el-footer>
          <span @click="toRegister">立即注册</span>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryLogin',
  data(){
    return {
      name:"",
      password:"",
      checked:false
    } 
  },
  methods:{
    
    login:function(){
      if((this.name==='admin' && this.password==='admin') ||
          (this.name==='user' && this.password==='user')){
        this.$router.push('LibrarySystem')
      }
    },
    toRegister:function(){
      this.$router.push('libraryRegister')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.library-login {
  height: 100%;
  background: url(../assets/background.png);
  background-size: cover;
}
.bg {
  height: 100%;
  background-color: rgba(0, 0, 0,0.3);
  padding-top: 75px;
  box-sizing:border-box;
}
.el-container {
  margin: 0 auto;
  width: 450px; 
  padding: 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  background-color: white;
}
.el-header {
  text-align: center;
  font-size: 20px;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-button {
  padding-left: 174px;
  padding-right: 174px;
}
.tip {
  padding-left: 5px;
  font-size: 12px;
  color: rgb(153,153,153);
}
.el-footer {
  text-align: center;
  font-size: 14px;
  color:rgb(85,132,255);
}
.el-footer > span {
  cursor: pointer;
}
</style>
