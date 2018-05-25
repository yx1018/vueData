import './INM101016.css'

import Vue from 'vue';
//按需引入
import { InfiniteScroll  } from 'mint-ui';
Vue.use(InfiniteScroll)

let data = { "data": [{ "2018/04/23": { "count": "1", "list": [{ "eventId": "13d9a5103042424c98de29fcabe8cfef", "minTitle": "1123123", "bodyKey": "配种时间", "bodyValue": "17:20" }] } }, { "2018/04/04": { "count": "4", "list": [{ "eventId": "4886943d2456417c98b0f95b8572d253", "minTitle": "1806", "bodyKey": "配种时间", "bodyValue": "18:00" }, { "eventId": "ce603c7fba584cb7a2c739ea5514f243", "minTitle": "1748", "bodyKey": "配种时间", "bodyValue": "16:51" }, { "eventId": "ada3829a1e924e4ba1bbabb4c75ea452", "minTitle": "1128", "bodyKey": "配种时间", "bodyValue": "10:47" }, { "eventId": "95ac188fcea140b3b447a6bbedafc11a", "minTitle": "1", "bodyKey": "配种时间", "bodyValue": "10:46" }] } }, { "2018/04/02": { "count": "1", "list": [{ "eventId": "302dacd96ebc4377912e333ff4a4edc6", "minTitle": "1430_1_1", "bodyKey": "配种时间", "bodyValue": "11:25" }] } }, { "2018/03/30": { "count": "2", "list": [{ "eventId": "1cf4ed503d4d4eaabf2b10aa9cddf4cf", "minTitle": "090909", "bodyKey": "配种时间", "bodyValue": "16:26" }, { "eventId": "b75b8a1798a6404f87f403c47432f158", "minTitle": "2017121404", "bodyKey": "配种时间", "bodyValue": "16:02" }] } }, { "2018/03/28": { "count": "3", "list": [{ "eventId": "7c54c5cdd3d84386b51d1660069a7b2b", "minTitle": "10708", "bodyKey": "配种时间", "bodyValue": "16:53" }, { "eventId": "6295f9d2d9be417a93f5a163b4ea8a09", "minTitle": "1123123", "bodyKey": "配种时间", "bodyValue": "16:50" }, { "eventId": "cf91c21ff0e743e98f02f7d29888c96d", "minTitle": "1748", "bodyKey": "配种时间", "bodyValue": "16:00" }] } }, { "2018/03/26": { "count": "2", "list": [{ "eventId": "3bc92ba1f52f4ce3962f5c378a6a3284", "minTitle": "qwer03_1_1", "bodyKey": "配种时间", "bodyValue": "16:14" }, { "eventId": "ff2b209c9c9a42b8a358ce59d6774bf6", "minTitle": "qwer03_1_1", "bodyKey": "配种时间", "bodyValue": "16:11" }] } }, { "2018/03/24": { "count": "1", "list": [{ "eventId": "9f4e4b4563ff4c3b984caac46c909c74", "minTitle": "091136", "bodyKey": "配种时间", "bodyValue": "16:26" }] } }, { "2018/03/12": { "count": "1", "list": [{ "eventId": "07422012a90c4404a188b5f50a76a62b", "minTitle": "1123123", "bodyKey": "配种时间", "bodyValue": "09:15" }] } }, { "2018/03/09": { "count": "1", "list": [{ "eventId": "47d2eb9eb61040d799f44048482403d8", "minTitle": "1", "bodyKey": "配种时间", "bodyValue": "11:49" }] } }, { "2018/03/08": { "count": "5", "list": [{ "eventId": "fe406c16328c4b70bf81a124d626134b", "minTitle": "256", "bodyKey": "配种时间", "bodyValue": "11:10" }, { "eventId": "633b4024c59a4cb79db016d10a9e1116", "minTitle": "78", "bodyKey": "配种时间", "bodyValue": "11:10" }, { "eventId": "cffebc82c02b47cd947df01e2424d034", "minTitle": "5", "bodyKey": "配种时间", "bodyValue": "10:07" }, { "eventId": "c5d1d0e8d87347ec9249b22475b0a39d", "minTitle": "6", "bodyKey": "配种时间", "bodyValue": "10:07" }, { "eventId": "89e6a607296d42878ca633006e8e05da", "minTitle": "102403", "bodyKey": "配种时间", "bodyValue": "09:48" }] } }, { "2018/03/07": { "count": "4", "list": [{ "eventId": "40917d4349584580b4ca35b62d942c6a", "minTitle": "7", "bodyKey": "配种时间", "bodyValue": "16:54" }, { "eventId": "f8b19ace8fbf481eaf0ad8c94be8c563", "minTitle": "9", "bodyKey": "配种时间", "bodyValue": "16:54" }, { "eventId": "a57b74310aca4f3f817f5f96f161ebcc", "minTitle": "5", "bodyKey": "配种时间", "bodyValue": "10:51" }, { "eventId": "3e948e90dd244f8cbcf68543c56bb1b2", "minTitle": "9", "bodyKey": "配种时间", "bodyValue": "10:51" }] } }, { "2018/02/25": { "count": "2", "list": [{ "eventId": "343ba4063d284b8a8b753dcd938ed2e7", "minTitle": "1053", "bodyKey": "配种时间", "bodyValue": "12:30" }, { "eventId": "06eed5497da54bbc8cba57713c28d933", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "12:30" }] } }, { "2018/02/11": { "count": "1", "list": [{ "eventId": "2f530179e73945569a98fd9832676bc2", "minTitle": "A0029_9_AA", "bodyKey": "配种时间", "bodyValue": "11:25" }] } }, { "2018/02/09": { "count": "1", "list": [{ "eventId": "688fd060f086418d943a39da1fc812fb", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/08": { "count": "6", "list": [{ "eventId": "1563cb7b988e4b55b123b30c3a9a8348", "minTitle": "2fdsaffsdfads", "bodyKey": "配种时间", "bodyValue": "13:57" }, { "eventId": "a537cc3cad0e4b6b81a3bb2d9411578a", "minTitle": "102403", "bodyKey": "配种时间", "bodyValue": "13:57" }, { "eventId": "6339abcb5f674db8a8250f6b3f27e1fd", "minTitle": "102403", "bodyKey": "配种时间", "bodyValue": "13:56" }, { "eventId": "b4e39bd9448c43b88cd819c11c5aba0c", "minTitle": "1727", "bodyKey": "配种时间", "bodyValue": "10:05" }, { "eventId": "cd3bf229607a42c1a6fa855a34c425ca", "minTitle": "1727", "bodyKey": "配种时间", "bodyValue": "10:03" }, { "eventId": "aedce8ee396947ea958ab2b96be562ff", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/07": { "count": "5", "list": [{ "eventId": "506a0b90f7fd45e9b80baa6f1cde6ea3", "minTitle": "1109", "bodyKey": "配种时间", "bodyValue": "09:29" }, { "eventId": "60d28da0b1fa43afbc0cd90d5e94fe34", "minTitle": "1109", "bodyKey": "配种时间", "bodyValue": "09:29" }, { "eventId": "a14c06ddf2f9494cbd1a592bd16baf7a", "minTitle": "1109", "bodyKey": "配种时间", "bodyValue": "09:29" }, { "eventId": "99ed06fe9cf247ba983cdc796d976936", "minTitle": "AA06", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "6d44ec63ce8941d4ac558c3203d4a2b2", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/06": { "count": "10", "list": [{ "eventId": "e6c0276018b84016aa3b2ee152b9dc6d", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "18:23" }, { "eventId": "fd9a59ab6a0e4be78cfd2eb0c2239e8c", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:58" }, { "eventId": "bbddf241690344e085290fd05423ea14", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:55" }, { "eventId": "50cf74d803f9497cb0e1259fb51ae433", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:08" }, { "eventId": "f0d5c3ce486f46e6ab32efaf95aa2918", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:03" }, { "eventId": "6b8701166da3479097c75a7a2c02ba60", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:02" }, { "eventId": "76e3d10fffd94e87a768e2dae2ede4da", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "15:01" }, { "eventId": "0f0943fa513e4215889722133d557c45", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "14:59" }, { "eventId": "a1ebc32c1da142bd86f3fcb58bd9cae8", "minTitle": "ccc", "bodyKey": "配种时间", "bodyValue": "14:50" }, { "eventId": "934371edd8d7446a9a44d928401b745f", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/05": { "count": "10", "list": [{ "eventId": "f2eb2dffc1534977872516a524ec107a", "minTitle": "1109", "bodyKey": "配种时间", "bodyValue": "18:09" }, { "eventId": "3988e70e8df9416fbd22b968b83ea58d", "minTitle": "1633", "bodyKey": "配种时间", "bodyValue": "15:27" }, { "eventId": "e8024c2334de434fbf6204cb4a9c3bd8", "minTitle": "1513", "bodyKey": "配种时间", "bodyValue": "14:09" }, { "eventId": "524ddcd0cdfc4008941cb4c7173a65dd", "minTitle": "1513", "bodyKey": "配种时间", "bodyValue": "14:09" }, { "eventId": "43f8b71141cd4aad96b62bccd62d4517", "minTitle": "1354", "bodyKey": "配种时间", "bodyValue": "14:03" }, { "eventId": "1aa02cc6a90b4afbbd46cfb29640f788", "minTitle": "1354", "bodyKey": "配种时间", "bodyValue": "14:02" }, { "eventId": "cc8806a5c2d44b2fbc8a30a49e1bde52", "minTitle": "1354", "bodyKey": "配种时间", "bodyValue": "14:02" }, { "eventId": "e762a01a8f964d50bb30f3f651577c99", "minTitle": "1354", "bodyKey": "配种时间", "bodyValue": "14:02" }, { "eventId": "7dc6c794eb9d4184a2bc5ce5b109b267", "minTitle": "AA06", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "19818d20de74466fa6ced97a41e9d30c", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/04": { "count": "5", "list": [{ "eventId": "4f82ecb6b96e4a329c0ad599ada58e7c", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "22:22" }, { "eventId": "9294095737c74577b31ce0c010b3003a", "minTitle": "AA02", "bodyKey": "配种时间", "bodyValue": "01:01" }, { "eventId": "5b859ed510ae45558afc08337ac133d0", "minTitle": "AA06", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "f0c8e2d31b1045a58907040e31e92f6a", "minTitle": "20160109", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "a80a373aa6c240189e303b2591ad4b37", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/03": { "count": "3", "list": [{ "eventId": "3340fa1653104a30814b739d99506248", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "22:22" }, { "eventId": "3cc0c769ed0c46ea81c8d5436d9a575c", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "56b647f31df24b3c8af8980d9b4c5434", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/02": { "count": "3", "list": [{ "eventId": "08c740efa3e442f98bdc6af714a9841a", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "22:22" }, { "eventId": "ee19d39cd1194db1ae29ecef0e580500", "minTitle": "20160109", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "645a7d041d2148298e0236539aa471de", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/02/01": { "count": "9", "list": [{ "eventId": "bacb7fcaf6aa4b94a81a89c9a1e6e34a", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "22:22" }, { "eventId": "597db7725d674230adf8e57d659886fb", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "06:06" }, { "eventId": "ba5fc7c470334dd78143f278e76aff7d", "minTitle": "AA02", "bodyKey": "配种时间", "bodyValue": "01:01" }, { "eventId": "9f7b2d852df8493a9e2fd01d46434fe8", "minTitle": "AA02", "bodyKey": "配种时间", "bodyValue": "01:01" }, { "eventId": "227358106aef4694b4d08e0163f6ba1f", "minTitle": "AA02", "bodyKey": "配种时间", "bodyValue": "01:01" }, { "eventId": "fba6d96972dc48e186b9aa7e123371c4", "minTitle": "AA00", "bodyKey": "配种时间", "bodyValue": "01:01" }, { "eventId": "a2170e483535435abc68510bbce90a96", "minTitle": "AA06", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "4e232ff733ea4f97abe53ca3a4a0f82a", "minTitle": "20160109", "bodyKey": "配种时间", "bodyValue": "00:00" }, { "eventId": "16d3de5146f640f3908526ea3fa6f174", "minTitle": "AA04", "bodyKey": "配种时间", "bodyValue": "00:00" }] } }, { "2018/01/31": { "count": "3", "list": [{ "eventId": "46a78da53c5f47c793e8cdf45b432de3", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "22:22" }, { "eventId": "ca34081f8e9a493e9b3465fdbd8a4872", "minTitle": "AA03", "bodyKey": "配种时间", "bodyValue": "17:17" }, { "eventId": "bd0c7ac8e4404a1abcaf71d3b4c3df33", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "05:05" }] } }, { "2018/01/30": { "count": "1", "list": [{ "eventId": "17b174824cc440fcaf9da79e97d5d0d3", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "12:30" }] } }, { "2018/01/29": { "count": "1", "list": [{ "eventId": "997e65fce87b48269e259c3d2d045781", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "05:05" }] } }, { "2018/01/28": { "count": "4", "list": [{ "eventId": "eaac559a71d84914ac364fdb4f706abf", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "18:18" }, { "eventId": "764bcdb47c1546ec8f87ca7001a76216", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "18:18" }, { "eventId": "9147578f6a74439799e9b87f7638f755", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "18:18" }, { "eventId": "761c8283881148deaae1b9eea4f9b553", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "12:30" }] } }, { "2018/01/27": { "count": "1", "list": [{ "eventId": "b01bde02e4fd4b1a86cb33603c7e2147", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "18:18" }] } }, { "2018/01/26": { "count": "2", "list": [{ "eventId": "99b9217596b1479ba64cee33c14cdaa4", "minTitle": "AA07", "bodyKey": "配种时间", "bodyValue": "18:18" }, { "eventId": "a290c806bc554a16824cc7ca30afcba5", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "18:18" }] } }, { "2018/01/25": { "count": "1", "list": [{ "eventId": "4376cb858bf24332b54a101b0aeb496f", "minTitle": "1718", "bodyKey": "配种时间", "bodyValue": "18:18" }] } }, { "2018/01/20": { "count": "1", "list": [{ "eventId": "89062bbb98db4836a9f77cb2d2f090a6", "minTitle": "210", "bodyKey": "配种时间", "bodyValue": "00:18" }] } }, { "2018/01/19": { "count": "2", "list": [{ "eventId": "6edf2527d7db49d39c55c5e4c9156b85", "minTitle": "0956", "bodyKey": "配种时间", "bodyValue": "14:13" }, { "eventId": "556378c035f34f56a90a249c1940106e", "minTitle": "093800", "bodyKey": "配种时间", "bodyValue": "14:11" }] } }, { "2018/01/18": { "count": "1", "list": [{ "eventId": "88b79ad98d7740b982744a51214160f0", "minTitle": "210", "bodyKey": "配种时间", "bodyValue": "12:30" }] } }, { "2018/01/17": { "count": "4", "list": [{ "eventId": "de0f304e80644207b386fa80359392bc", "minTitle": "W0001", "bodyKey": "配种时间", "bodyValue": "13:43" }, { "eventId": "854530020141402a88ed98eb983f3fde", "minTitle": "A0000_2_1", "bodyKey": "配种时间", "bodyValue": "13:40" }, { "eventId": "098d695c89984aae874b464ad7096947", "minTitle": "A0001_3_1", "bodyKey": "配种时间", "bodyValue": "13:40" }] } }] }

let resMap = {};
for (let i = 0; i < data['data'].length; i++) {
    let row = data['data'][i];
    /* row
    {'2018/05/22':{
                    count:1,
                    list:[
                        bodyKey:'配种时间',
                        minTitle:"1123123",
                        eventId:'13d9a5103042424c98de29fcabe8cfef', 
                        bodyValue:"17:20"
                    ]
                }
    }
    */
   console.log(row)
    for (let name in row) {
        let eventTime = name;  //日期为key  
        let eventArr = row[name]['list']; //数组为值
        for (let j = 0; j < eventArr.length; j++) {
            if(!resMap[eventTime]){
                //桶不存在 建桶
                resMap[eventTime] = [];
            }
            //桶存在  深拷贝
            resMap[eventTime].push(JSON.parse(JSON.stringify(eventArr[j])));
        }

    }
}

let ajaxData = [];

for(let name in resMap){
    let dateArr = resMap[name];
    dateArr.forEach(item => {
        let tempItem = JSON.parse(JSON.stringify(item));
        //给行绑定时间
        tempItem.eventTime = name;
        ajaxData.push(tempItem)
    });
}

//console.log(ajaxData)


let vm = new Vue({
    el: '#app',
    data: {
        arr: [],
        pageSize:10,
        pageNo:1,
        loading:false, //数据回来前禁止加载数据
        mapData:{}
    },
    methods:{
        getList(){
            if(this.arr.length>=100) return;
            this.loading  = true;  //标识加载中  避免重复请求
               
            setTimeout(()=>{
                 //模拟请求数据
                 for(let i=this.pageSize*(this.pageNo-1);i<this.pageSize*this.pageNo;i++){
                    this.arr.push(JSON.parse(JSON.stringify(ajaxData[i])))
                    let key = ajaxData[i]['eventTime'];
                    
                    if(!this.mapData[key]){
                        this.$set( this.mapData, key, [] )
                        // this.mapData[key] = [];
                    }
                    this.mapData[key].push(ajaxData[i])
                   // this.$set( this.mapData, key, aa)
                   
                }
                this.pageNo++;
                this.loading  = false; 
                //console.log(this.mapData)
            },200)
        }
    },
    created() {
        this.getList()
    }
})

