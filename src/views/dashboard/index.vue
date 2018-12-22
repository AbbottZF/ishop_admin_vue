<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
    
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" :id="'home'" :height="450"/>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <radar-chart :chart-data="radarChartData" :id="'radar'" :height="450"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart :chart-data="pieChartData" :id="'pie'" :height="450"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <column-chart :chart-data="columnChartData" :id="'column'" :height="450"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RadarChart from './components/RadarChart'
import PieChart from './components/PieChart'
import ColumnChart from './components/ColumnChart'

export default {
  name: 'Dashboard',
  
  components:{
    PanelGroup,
    LineChart,
    RadarChart,
    PieChart,
    ColumnChart
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted(){
    this.initData()
  },
  data(){
    return {
      lineChartData:[],
      radarChartData:[],
      pieChartData:[],
      columnChartData:[]
    }
  },
  methods:{
    initData(){
      let lineChartData = [];
      for(let i=0;i<20;i++){
        lineChartData.push({year:1990+i,value:parseInt(parseFloat(Math.random())*100)});
      }
      this.lineChartData = lineChartData;
    },
    handleSetLineChartData(type){
      console.log(type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
