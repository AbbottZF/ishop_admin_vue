<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  data () {
    return {
      chart: null,
    }
  },
  mounted(){
    this.drawChart();
  },
  props: {
    charData: {
      type: Array,
      default: ()=>{
        let lineChartData = []
        for(let i=0;i<30;i++){
          lineChartData.push({year:1990+i,value:parseInt(parseFloat(Math.random())*100)});
        }
        return lineChartData
      }
    },
    id: String,
    height:{
      type:Number,
      default:window.innerHeight
    }
  },
  watch: {
    charData() {
      this.drawChart()
    }
  },
  methods: {
    drawChart: function () {
      if(typeof this.charData.length == 'undefined' || this.charData.length == 0){
        return false;
      }
      this.chart && this.chart.destory()
      this.chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height
      })
      this.chart.source(this.charData);
      this.chart.scale('value', {min: 0});
      this.chart.scale('year', {
        range: [0, 1]
      });
      this.chart.tooltip({
      crosshairs: {
          type: 'line'
      }
      });
      this.chart.line().position('year*value');
      this.chart.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      });
      this.chart.render();
    }
  }
}
</script>