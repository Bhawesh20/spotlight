<template>
  <div>
    <el-table
      :data="tableData"
      :border="false"
      class="table">
      <el-table-column
        prop="date"
        label="DATE"
        width="200">
        <template slot-scope="scope">
          <div class="head"> {{scope.row.date}} </div>
          <div class="small-sum"> {{getTimeDiff(scope.row.date)}} days ago </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="campaign"
        label="CAMPAIGN"
        width="400">
        <template slot-scope="scope">
          <el-row :gutter="20">
            <el-col :span="2">
              <img :src="scope.row.logoAddress" width="16" height="16"/>
            </el-col>
            <el-col :span="20">
              <div class="head"> {{scope.row.campaign}} </div>
              <div class="small-sum"> {{scope.row.address}} </div>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        label="VIEW"
        width="200"
        >
        <i class="fa fa-usd usdplus" aria-hidden="true">+</i>
        <div class="small-sum"> VIEW PRICING </div>
      </el-table-column>
      <el-table-column
        label="ACTIONS">
        <el-row :gutter="20">
            <el-col :span="8">
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
            </el-col>
            <el-col :span="8">
              <i class="fa fa-signal" aria-hidden="true"></i>
            </el-col>
            <el-col :span="8">
              <div class="head"> <i class="fa fa-calendar" type="date" aria-hidden="true"> </div>
              <div class="small-sum"> SCHEDULE AGAIN </div>
            </el-col>
          </el-row>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import whatsapp from '../../logo/whatsapp.png';
import quest from '../../logo/quest.jpeg';
import mole from '../../logo/mole.png';
import mancala from '../../logo/mancala.jpeg';
import bluestacks from '../../logo/bluestacks.png';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
export default {
  data(){
    return {
      tableData: [{
        date: '2017-05-01',
        logoAddress: whatsapp,
        campaign: 'Test Whatsapp',
        address: 'US'
      }, {
        date: '2016-04-17',
        campaign: '测试',
        logoAddress: bluestacks,
        address: 'JP'
      }, {
        date: '2016-04-17',
        campaign: 'Super Jewels Quest',
        logoAddress: quest,
        address: 'CA FR'
      }, {
        date: '2016-04-14',
        campaign: 'Mole Slayer',
        logoAddress: mole,
        address: 'FR'
      }, {
        date: '2016-04-14',
        campaign: 'Mancala Mix',
        logoAddress: mancala,
        address: 'CA FR JP'
      }]
    }
  },
  methods:{
    getTimeDiff(date){
      let date1 = dayjs(new Date());
      let date2 = dayjs(date);
      return date1.diff(date2, 'day');
      // return dayjs(date).fromNow('days');
    }
  }
}
</script>

<style scoped>
.fa {
  margin-left: 1em;
}
.table{
  width: 80%;
  margin-left: 10%; 
  margin-top: 1em; 
}
.small-sum{
  font-size: 8px;
}
.usdplus{
  background-color: #4c60ad;
  border-radius: 50%;
  padding: 5px;
  color: #f2f2f2;
}
</style>
