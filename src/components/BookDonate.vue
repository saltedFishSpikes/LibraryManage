<template>
  <div class="book-donate">
    <el-container>
      <el-header>图书捐赠</el-header>
      <el-main>
        <el-form label-width="100px" size="mini">
          <el-form-item label="图书名称">
            <el-input placeholder="请输入图书名称" v-model="donation.name" @blur="check('name',donation.name)"></el-input>
            <span v-show="nameEmpty">图书名称不能为空</span>
          </el-form-item>
          <el-form-item label="ISBN">
            <el-input placeholder="图书背面右下角条纹码处" v-model="donation.ISBN" @blur="check('ISBN',donation.ISBN)"></el-input>
            <span v-show="ISBNEmpty">ISBN不能为空</span>
          </el-form-item>
          <el-form-item label="书目类别">
            <el-select v-model="donation.class" multiple placeholder="请选择">
              <el-option
                v-for="bookClass in AllClasses"
                :key="bookClass.value"
                :label="bookClass.label"
                :value="bookClass.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="捐赠人">
            <el-input placeholder="请输入" v-model="donation.person" @blur="check('person',donation.person)"></el-input>
            <span v-show="personEmpty">捐赠人不能为空</span>
          </el-form-item>
          <el-form-item label="捐赠日期">
            <el-date-picker
              v-model="donation.date"
              type="date"
              placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio v-model="donation.status" label="1">待入库</el-radio>
            <el-radio v-model="donation.status" label="2">在库</el-radio>
            <el-radio v-model="donation.status" label="3">外借</el-radio>
            <el-radio v-model="donation.status" label="4">遗失</el-radio>
          </el-form-item>
          <el-form-item>
            <span class="remind">提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架上</span>
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
      donation:{
        name:"",
        ISBN:"",
        class:[],
        person:"",
        date:"",
        status:"1"
      },
      nameEmpty:false,
      ISBNEmpty:false,
      personEmpty:false
    }
  },
  methods:{
    check:function(str,item){
      let s = str + 'Empty'
      if(item === ""){
        this[s] = true
      }else {
        this[s] = false
      }
    },
    onSubmit:function(){
      if(this.donation.name!=="" && this.donation.ISBN!=="" && this.donation.person!==""){
        this.$message({
          type: 'success',
          message: "提交成功",
        });
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-donate {
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
.remind {
  margin-left:-100px;
  color:rgb(243,115,39);
}
</style>
