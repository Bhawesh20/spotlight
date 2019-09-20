<template>
  <div>
    <div class="heading"> Manage <b>Campaigns</b></div>
    <div class="buttons">
      <el-button :class="activeClass['upcoming']" @click="changeActive(0)"> UPCOMING CAMPAIGNS </el-button>
      <el-button :class="activeClass['live']" @click="changeActive(1)"> LIVE CAMPAIGNS </el-button>
      <el-button :class="activeClass['past']" @click="changeActive(2)"> PAST CAMPAIGNS </el-button>
    </div>
    <upcoming-campagins v-if="activeButton==0"> </upcoming-campagins>
    <live-campagins v-else-if="activeButton==1"> </live-campagins>
    <past-campagins v-else-if="activeButton==2"> </past-campagins>
  </div>
</template>

<script>
import Vue from 'vue';
import upcomingCampagins from './upcomingCampaigns.vue';
import liveCampagins from './liveCampaigns.vue';
import pastCampagins from './pastCampaigns.vue';
export default {
  created(){
    this.changeActive(this.activeButton);
  },
  components:{
    upcomingCampagins,
    liveCampagins,
    pastCampagins
  },
  data(){
    return {
      activeButton:2,
      activeClass:{
        upcoming: 'button',
        live: 'button',
        past: 'button',

      }
    }
  },
  methods:{
    changeActive(activeNumber){
      if(activeNumber === 0){
        this.activeButton = 0;
        Vue.set(this.activeClass, 'upcoming', 'button active');
        Vue.set(this.activeClass, 'live', 'button');
        Vue.set(this.activeClass, 'past', 'button');
      } else if(activeNumber === 1) {
        this.activeButton = 1;
        Vue.set(this.activeClass, 'upcoming', 'button');
        Vue.set(this.activeClass, 'live', 'button active');
        Vue.set(this.activeClass, 'past', 'button');
      } else if(activeNumber === 2) {
        this.activeButton = 2;
        Vue.set(this.activeClass, 'upcoming', 'button');
        Vue.set(this.activeClass, 'live', 'button');
        Vue.set(this.activeClass, 'past', 'button active');
      }
    }
  }

}
</script>

<style>
  .heading {
    color: #1f4c94;
    font-size: 20px;
    text-align: center;
    margin: 2em;
  }
  .buttons{
    text-align: center;
  }
  .button{
    background-color: green !important;
    color: white !important; 
  }
  .active{
    background-color: white !important;
    color: green !important; 
  }
  .el-table th.is-leaf, .el-table td {
    border-bottom: 0px !important;
  }
  .el-table th, .el-table td {
    padding: 4px !important;
  }
</style>
