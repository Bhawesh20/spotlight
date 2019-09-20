<template>
  <el-container class="layout">
    <el-header class="header">
      <span class="header-left">
        <img :src="bluestacksImg" width="16" height="16"/>
         Spotlight </span>
      <span class="header-right"> 
        BETA <i class="fa fa-align-justify" aria-hidden="true"></i>
      </span>
    </el-header>
    <el-main>
      <campaigns/>
    </el-main>
  </el-container>
</template>


<script>
import bluestacks from '../../logo/bluestacks.png';
import campaigns from '../app-component/campaigns.vue';
export default {
  data(){
    return{
      bluestacksImg: bluestacks
    }
  },
  components:{
    campaigns
  },
  computed:{
    screenWidth(){
      return this.$store.state.app.screenWidth;
    },
    screenHeight(){
      return this.$store.state.app.screenHeight;
    },
  },
  methods:{
  }
}
</script>
<style scoped>
  .header{
    background-color: #1f4c94;
    color: white;
    padding: 5px;
  }
  .header-right{
    float: right;
  }
  .fa {
    margin-left: 20px;
  }
</style>


