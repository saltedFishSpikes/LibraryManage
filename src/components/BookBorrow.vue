<template>
  <div class="book-borrow">
    <el-container>
      <el-header>图书借阅</el-header>
      <el-main>
        <el-form label-width="100px" size="mini">
          <el-form-item label="图书名称">
            <el-select v-model="books" multiple placeholder="请选择">
              <el-option
                v-for="book in AllBooks"
                :key="book.value"
                :label="book.label"
                :value="book.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="借阅/归还">
            <el-radio v-model="isBorrow" label="1">借阅</el-radio>
            <el-radio v-model="isBorrow" label="2">归还</el-radio>
          </el-form-item>
          <el-form-item label="借阅证">
            <el-input v-model="borrowId" placeholder="请输入借阅证"></el-input>
          </el-form-item>
          <el-form-item label="借阅时间">
            <el-date-picker
              v-model="borrowDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
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
  name: 'BookBorrow',
  data(){
    return {
      AllBooks:[
        {value:1,label:"史蒂夫·乔布斯传"},
        {value:2,label:"大数据供应链"},
        {value:3,label:"深度学习"},
        {value:4,label:"裂变"},
        {value:5,label:"归属感"},
        {value:6,label:"沉默的大多数"}
      ],
      books:[],
      isBorrow:"1",
      borrowId:"",
      borrowDate:""
    }
  },
  methods:{
    onSubmit:function(){
      this.$message({
        type: 'success',
        message: "提交成功",
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-borrow {
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


</style>
