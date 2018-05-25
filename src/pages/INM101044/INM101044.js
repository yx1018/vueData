import 'css/reset.css';
import './INM101044.css';
import 'js/flexible.js';
import Vue from 'vue'
import axios from 'axios';
import api from 'js/api';
import qs from 'qs';


import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
Vue.component(Button.name, Button);

let {userId} = qs.parse(window.location.search.substr(1))
new Vue({
  el: '#app',
  data:{
      content:'',
      contact:''
  },
  methods:{
    onSubmit:function(e){
        e.preventDefault();
        let content = this.content;
        let contact = this.contact;
        if(content===''){
          Toast({
            message: '请输入反馈信息',
          });
          return
        }
        if(contact===''){
          Toast({
            message: '请输入联系方式',
          });
          return 
        }

        let params = new URLSearchParams();
        params.append('content',content);
        params.append('contact',contact);
        params.append('userId',userId)
        axios.post(api.INM101044_01,params).then(res=>{
          if(res.data.return_sts ==='0'){
            Toast({
              message: '提交成功',
            });
            this.content = '';
            this.contact = '';
          }else{
            Toast({
              message: '提交失败',
            });
          }
        }).catch(e=>{

        })
    }
  }
})