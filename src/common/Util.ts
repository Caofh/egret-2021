/*
    公共方法类
*/

class Util {

    public constructor() {

    }


    /*
    * 将obj转换成url参数形式
    * toQueryString({a:1,b:2})  =>   a=1&b=2
    *
    * */
    private toQueryPair(key, value) {
        if (typeof value == 'undefined'){
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    }

    public getUrlParam (obj) {
        let ret = [];
        for(let key in obj){
            key = encodeURIComponent(key);
            let values = obj[key];
            if(values && values.constructor == Array){//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }else{ //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    }








}
