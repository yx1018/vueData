import 'css/reset.css';
import './INM101043.css';
import 'js/flexible.js';
import promise from 'es6-promise';
promise.polyfill();
import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';

import Highcharts from 'highcharts/highstock';
//解析get传参
import qs from 'qs';
import { Toast } from 'mint-ui';

//app get传参传递的farmId cattleId
let {farmId,cattleId} = qs.parse(location.search.substr(1));

let app = new Vue({
    el:'#app',
    data:{
        lists:null, 
        pageNum:1,
        pageSize:20,
        loading:false,
        allLoaded:false ,//是否全部加载
        currentIndex:0,
        currentData:null
    },
    mounted(){
        this.chartSearch();
    },
    methods:{
        //请求数据画图表
        chartSearch(){
            let params = new URLSearchParams();
            params.append('farmId',farmId);
            params.append('cattleId',cattleId);
            axios.post(url.INM101043_01,params).then(res=>{
                this.currentData = res.data.rows;
                let optionData = this.execData(res.data.rows);
                chartInit(optionData.series)
            }).catch(e=>{
                Toast({
                    message: '请求失败'
                });
                return;
            })
        },
        changeTab(index){
            this.currentIndex = index;
        },
        execData(data){
            let weight=[];//体重
            let witherHeight=[]; //体高
            let topData =[];
            topData = data;
            topData = topData.reverse();
            topData.forEach(function(row,index){

                weight.push([Number(row['cattleAge']),Number(row['weight'])?Number(row['weight']):null]);
				witherHeight.push([Number(row['cattleAge']),Number(row['witherHeight'])?Number(row['witherHeight']):null]);
                
            })
           
            let series = [{
                                name: '体重',
                                type: 'spline',
                                yAxis: 1,
                                color:'#8fd1ff',
                                data: weight,
                                tooltip: {
                                    valueSuffix: ' kg'
                                }
                            }, 
                            {
                                name: '体高',
                                type: 'spline',
                                color:'#f78e3d',
                                yAxis: 0,
                                data: witherHeight,
                                tooltip: {
                                    valueSuffix: ' cm'
                                }
                            }]
            return {
                series
            };
        },
        

    }
})

function chartInit(series){
    Highcharts.chart('char_container',{
                chart: {
                    zoomType: 'xy',
                    marginTop:60
                },
                plotOptions:{
                    series: {
                        connectNulls:true,
                        marker: {
                            enabled:true
                        }
                    }
                },
                exporting:{enabled:false},
                title: {text: null},
                lang: {
                    noData: '暂无数据' //真正显示的文本
                },
                xAxis: [{
                    crosshair: true,
                    title: {
                        text: '月龄',
                        align: 'middle',
                        style: {
                            color: '#666666'
                        }
                    },
                    labels:{ 
                        step:1
                    }
                }],
                yAxis: [
                        //第一个轴
                        { 
                        labels: {
                                format: '{value}',
                                style: {
                                        color: Highcharts.getOptions().colors[1]
                                       }
                                },
                        min:null,
                        allowDecimals:false,
                        gridLineColor:'#eee',
                        gridLineDashStyle:'longdash',
                        lineWidth:1,
                        opposite: true,
                        title: {
                                text: '体高',
                                align: 'high',
                                offset: 0,
                                rotation: 0,
                                x: 0,
                                y:-20,
                                style: {
                                        color: '#666666'
                                       }
                               }
                       }, 
                     // Secondary yAxis
                          { 
                            title: {
                                    text: '体重',
                                    align: 'high',
                                    offset: 0,
                                    rotation: 0,
                                    x: 0,
                                    y:-20,
                                    style: {
                                               color: '#666666'
                                           }
                            },
                            lineWidth:1,
                            min:null,
                            labels: {
                                format: '{value}',
                                style: {
                                    color: '#666'
                                }
                            },
                            allowDecimals:false
                        }],
                legend: {
                    floating:false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                },
                tooltip: {
                    shared: true
                },
                series:series
            });
}