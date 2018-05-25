let url = {
    INM101043_01:'1010.do?fw.excute.event=34353A3A303A',  //生长测定图表、列表
    INM101044_01:'1010.do?fw.excute.event=34373A3A303A'  //问题反馈

}

//开发环境和真实环境的切换
let host = 'http://192.168.2.111:8080/';  //跨域
// let host = '/';  //本地（将上面一行注释，本行解放）
for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]; 
    }
}

export default url	