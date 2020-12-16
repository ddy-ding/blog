/*
 * @Description: api
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-16 15:30:41
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-16 16:17:33
 */
import {get, post} from '@/utils/http'

export const text = (params) => get('...',params)
export const rr = (params) => post('/api/auth/login',params)