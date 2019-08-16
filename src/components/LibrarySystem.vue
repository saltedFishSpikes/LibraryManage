<template>
  <div class="library-system">
    <el-container>
      <el-aside width="200px"><library-aside></library-aside></el-aside>
      <el-container>
        <el-header><library-header></library-header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import libraryHeader from './LibraryHeader.vue'
import libraryAside from './LibraryAside.vue'
export default {
  name: 'LibrarySystem',
  components: {
    libraryHeader,
    libraryAside
  }
}
</script>

<style>


</style>
