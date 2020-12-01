/*
 * @Description:  
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 18:34:24
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-23 15:33:43
 */
import Vue from "vue"
import svgIcon from './index.vue'

Vue.component('svg-icon',svgIcon) //挂载全局组件

// 导入svgIcon/svg下的所有svg文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/) 
/*
 第一个参数是:'./svg' => 需要检索的目录，
 第二个参数是：false => 是否检索子目录,
 第三个参数是: /\.svg$/ => 匹配文件的正则
*/
requireAll(req);