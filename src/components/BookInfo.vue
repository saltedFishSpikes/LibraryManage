<template>
  <div class="book-info">
    <el-container>
      <el-header>
        <el-form label-width="100px" size="mini">
          <el-col :span="6">
            <el-form-item label="图书名称：" >
              <el-input placeholder="请输入" v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
           <el-form-item label="ISBN号：">
            <el-input placeholder="请输入" v-model="ISBN"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
           <el-form-item label="出版社：" >
            <el-input placeholder="请输入" v-model="publisher"></el-input>
          </el-form-item>
          </el-col>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="bookData" style="width: 100%" size="small" highlight-current-row>
          <el-table-column prop="borrowId" label="借阅编号" width="88"></el-table-column>
          <el-table-column prop="ISBN" label="图书ISBN号" width="97"></el-table-column>
          <el-table-column prop="name" label="图书名称" width="130"></el-table-column>
          <el-table-column prop="type" label="图书类型" width="97"></el-table-column>
          <el-table-column prop="readerId" label="读者证件号" width="107"></el-table-column>
          <el-table-column prop="reader" label="读者名称" width="93"></el-table-column>
          <el-table-column prop="borrowDate" label="借阅日期" width="110"></el-table-column>
          <el-table-column prop="returnDate" label="归还日期" width="110"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="watch(scope.row)" type="primary" size="small">查看</el-button>
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
  name: 'BookInfo',
  data(){
    return {
      name:"",
      ISBN:"",
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
        target: document.querySelector('.book-info')
      });
      setTimeout(()=>{
        loading.close()
        this.getData(0)
      },500)
    },
    getAllData:function(){
      for(let i=0;i<200;i++){
        let ISBN = '0000'+(i<10 ? '0'+i : i)
        let borrowId = i
        let obj = {
          borrowId:borrowId,
          ISBN:ISBN,
          type:'计算机',
          name:'软件工程导论',
          readerId:'12345'+i,
          reader:'淘小宝',
          borrowDate:'2018-10-01',
          returnDate:'2019-10-01'
        }
        this.allData.push(obj)
      }
    },
    watch:function(row){
      
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
.book-info {
  border-radius: 2px;
  padding: 10px;
}
.el-header {
  padding:10px;
}
.el-form-item {
  margin: 10px 0;
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
