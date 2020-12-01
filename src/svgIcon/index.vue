<!--
 * @Description: svg
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 18:34:01
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-23 15:26:31
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name:'svgIcon',
  props: {
      data_iconName:{
          type:String,
          required:true
      },
      className: {
          type:String,
          default:''
      }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
      svgClass() { // svg 的class
        if(this.className) {
            return  `svg-icon ${this.className}`;
        }else {
            return 'svg-icon'
        }
      },
      iconName(){  //svg xlink-href 指向的文件名
         return `#icon-${this.data_iconName}`;
     }
  },

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.svg-icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

</style>