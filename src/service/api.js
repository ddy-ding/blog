/*
 * @Description: api
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-16 15:30:41
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-16 16:17:33
 */
import {get} from '@/utils/http'
export const getFirstCategory = () => get('/api/firstcategory')
export const getSecondTitle = (param) => get('/api/secondTitle', param)