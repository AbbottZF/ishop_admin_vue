<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

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
        return [{
            year: '1951 年',
            sales: 38
          }, {
            year: '1952 年',
            sales: 52
          }, {
            year: '1956 年',
            sales: 61
          }, {
            year: '1957 年',
            sales: 145
          }, {
            year: '1958 年',
            sales: 48
          }, {
            year: '1959 年',
            sales: 38
          }, {
            year: '1960 年',
            sales: 38
          }, {
            year: '1962 年',
            sales: 38
          }]
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
      var chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height
      })
      chart.source(this.charData);
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.interval().position('year*sales');
      chart.render();
    }
  }
}
</script>