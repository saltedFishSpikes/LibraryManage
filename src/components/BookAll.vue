<template>
  <div class="book-all">
    <el-container>
      <el-header>
        <el-form label-width="100px" size="mini">
          <el-col :span="6">
            <el-form-item label="图书名称：">
              <el-input placeholder="请输入" v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
           <el-form-item label="作者名称：">
            <el-input placeholder="请输入" v-model="author"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
           <el-form-item label="ISBN号：">
            <el-input placeholder="请输入" v-model="ISBN"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="6">
           <el-form-item label="图书分类：">
            <el-input placeholder="请输入" v-model="type"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
           <el-form-item label="出版社：">
            <el-input placeholder="请输入" v-model="publisher"></el-input>
          </el-form-item>
          </el-col>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="bookData" style="width: 100%" size="small" highlight-current-row>
          <el-table-column prop="ISBN" label="ISBN号" width="88"></el-table-column>
          <el-table-column prop="type" label="图书类型" width="97"></el-table-column>
          <el-table-column prop="name" label="图书名称" width="130"></el-table-column>
          <el-table-column prop="author" label="作者名称" width="97"></el-table-column>
          <el-table-column prop="publisher" label="出版社" width="97"></el-table-column>
          <el-table-column prop="date" label="日期" width="93"></el-table-column>
          <el-table-column prop="countOfAll" label="总数量" width="80"></el-table-column>
          <el-table-column prop="countInLibrary" label="在馆数量" width="88"></el-table-column>
          <el-table-column prop="price" label="价格" width="67"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="watch(scope.row)" size="small">查看</el-button>
              <el-button @click="borrow(scope.row)" type="primary" size="small">借阅</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <div class="pagination">
          <el-pagination
            :current-page="currentPage"
            @current-change="currentChange"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="200"
            prev-text="<上一页"
            next-text="下一页>"
            background>
          </el-pagination>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'BookAll',
  data(){
    return {
      name:"",
      author:"",
      ISBN:"",
      type:"",
      publisher:"",
      allData:[],
      bookData:[],
      currentPage:1
    }
  },
  mounted(){
    this.getAllData()
    this.loading()
  },
  methods:{
    loading:function(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.9)',
        target: document.querySelector('.book-all')
      });
      setTimeout(()=>{
        loading.close()
        this.getData(0)
      },500)
    },
    getAllData:function(){
      for(let i=0;i<200;i++){
        let ISBN = '0000'+(i<10 ? '0'+i : i)
        let obj = {
          ISBN:ISBN,
          type:'计算机',
          name:'软件工程导论',
          author:'淘小宝',
          publisher:'某出版社',
          date:'2018-10-01',
          countOfAll:'1000',
          countInLibrary:'300',
          price:'22.0'
        }
        this.allData.push(obj)
      }
    },
    watch:function(row){
      this.$message({
        type: 'success',
        message: "暂无详细信息",
      });
    },
    borrow:function(row){
      this.$message({
        type: 'success',
        message: "借阅成功",
      });
    },
    getData:function(page){
      this.bookData = this.allData.slice(page*20,page*20+20)
    },
    currentChange:function(page){
      this.getData(page-1)
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
  margin: 20px 10px 20px 10px;
}
.el-main {
  margin: 10px;
}
.el-footer {
  margin-left: auto;
}
</style>

<style>
.el-table th {
  background-color: rgb(235,236,240);
  font-weight: 600;
}
</style>
