<template>
  <div class="book-recommanded">
    <el-container>
      <el-header>图书推荐</el-header>
      <el-main>
        <el-form label-width="100px" size="mini">
          <el-form-item label="图书名称">
            <el-input placeholder="请输入图书名称" v-model="book.name" @blur="check()"></el-input>
            <span v-show="empty">图书名称不能为空</span>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input placeholder="图书出版社" v-model="book.publisher"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input placeholder="图书作者" v-model="book.author"></el-input>
          </el-form-item>
          <el-form-item label="参考价格">
            <el-input placeholder="请输入数字" v-model="book.price"></el-input>
          </el-form-item>
          <el-form-item label="书目类别">
            <el-select v-model="book.class" multiple placeholder="请选择">
              <el-option
                v-for="bookClass in AllClasses"
                :key="bookClass.value"
                :label="bookClass.label"
                :value="bookClass.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="推荐人">
            <el-input placeholder="请输入数字" v-model="book.referee"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BookRecommanded',
  data(){
    return {
      AllClasses:[
        {value:1,label:"技术领域"},
        {value:2,label:"专业领域"},
        {value:3,label:"管理沟通"},
        {value:4,label:"其他"}
      ],
      book:{
        name:'',
        publisher:"",
        author:"",
        price:"",
        class:[],
        referee:""
      },
      empty:false
    }
  },
  methods:{
    check:function(){
      if(this.book.name === ""){
        this.empty = true
      }else {
        this.empty = false
      }
    },
    onSubmit:function(){
      if(this.book.name.length>0){
        this.$message({
          type: 'success',
          message: "提交成功",
        });
      }else{
        this.empty = true;
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-recommanded {
  border-radius: 2px;
  padding: 10px;
}
.el-header {
  display: inline;
  line-height: 60px;
}
.el-select, .el-date-picker, .el-input {
  width: 400px !important;
}

span {
  color:red;
  font-size: 12px;
  margin-left: 10px;
}
</style>
