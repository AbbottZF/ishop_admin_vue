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
            item: '事例一',
            count: 40,
            percent: 0.4
          }, {
            item: '事例二',
            count: 21,
            percent: 0.21
          }, {
            item: '事例三',
            count: 17,
            percent: 0.17
          }, {
            item: '事例四',
            count: 13,
            percent: 0.13
          }, {
            item: '事例五',
            count: 9,
            percent: 0.09
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
      var _DataSet = DataSet,
      DataView = _DataSet.DataView;
      if(typeof this.charData.length == 'undefined' || this.charData.length == 0){
        return false;
      }
      this.chart && this.chart.destory()
      var dv = new DataView().source(this.charData);
      dv.transform({
        type: 'fold',
        fields: ['a', 'b'], // 展开字段集
        key: 'user', // key字段
        value: 'score' // value字段
      });
      var chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height
      })
      chart.source(this.charData, {
        percent: {
          formatter: function formatter(val) {
            val = val * 100 + '%';
            return val;
          }
        }
      });
      chart.coord('theta');
      chart.tooltip({
        showTitle: false
      });
      chart.intervalStack().position('percent').color('item').label('percent', {
        offset: -40,
        // autoRotate: false,
        textStyle: {
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }).tooltip('item*percent', function(item, percent) {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      }).style({
        lineWidth: 1,
        stroke: '#fff'
      });
      chart.render();
    }
  }
}
</script>