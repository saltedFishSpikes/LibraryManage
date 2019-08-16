<template>
  <div class="library-register">
    <div class="bg">
      <el-container>
        <el-header>注册</el-header>
        <el-form>
          <el-form-item>
            <el-input placeholder="用户名" v-model="name" @change="checkName">
              <i slot="prefix" class="el-icon-selfren111"></i>
            </el-input>
            <span v-show="!nameRight" class="warn">请输入正确用户名</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" placeholder="邮箱" v-model="mail" @change="checkMail">
              <i slot="prefix" class="el-icon-selfyouxiang"></i>
            </el-input>
            <span v-show="!mailRight" class="warn">请输入正确邮箱</span>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="至少8位密码" v-model="password" @change="checkPS">
              <i slot="prefix" class="el-icon-selfsuo"></i>
            </el-input>
            <span v-show="!passwordRight" class="warn">密码必须大于8位</span>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="确认密码" v-model="confirmPS" @change="checkSame">
              <i slot="prefix" class="el-icon-selfsuo"></i>
            </el-input>
            <span v-show="!passwordSame" class="warn">两次输入密码不一致</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">
              <span>注册</span>
            </el-button>
          </el-form-item>
        </el-form>
        <el-footer>
          <span @click="toLogin">使用已有账户登录</span>
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
      mail:"",
      confirmPS:"",
      nameRight:true,
      mailRight:true,
      passwordRight:true,
      passwordSame:true
    } 
  },
  methods:{
    checkName:function(){
      if(this.name.length>0){
        this.nameRight = true
      }else{
        this.nameRight = false
      }
    },
    checkMail:function(){
      let reg = /^\w+@\w+(\.\w+)+$/
      if(reg.test(this.mail)){
        this.mailRight = true
      }else{
        this.mailRight = false
      }
    },
    checkPS:function(){
      if(this.password.length>=8){
        this.passwordRight = true
      }else{
        this.passwordRight = false
      }
    },
    checkSame:function(){
      if(this.password===this.confirmPS && this.password!==""){
        this.passwordSame = true
      }else{
        this.passwordSame = false
      }
    },
    register:function(){
      if(this.nameRight && this.name!=="" && this.mailRight && this.mail!=="" &&
        this.passwordRight && this.password!=="" && this.passwordSame &&this.confirmPS!==""){

        this.$message({
          type: 'success',
          message: "注册成功",
        });
        this.$router.push('libraryLogin')
      }
    },
    toLogin:function(){
      this.$router.push('libraryLogin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.library-register {
  height: 100%;
  background: url(../assets/background.png);
  background-size: cover;
}
.bg {
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0,0.3);
  box-sizing:border-box;
}
.el-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px; 
  padding: 20px 35px 0 35px;
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
.warn {
  font-size: 14px;
  color:red;
}
.el-button {
  padding-left: 174px;
  padding-right: 174px;
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
