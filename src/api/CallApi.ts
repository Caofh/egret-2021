/*
        // 调用ajax网络通信示例
        get：
        // let para = {count: 1}
        // new Ajax(this,'https://tpdoc.cn/api/person_page', para, 'get', this.onGetComplete, this.onGetIOError, this.onGetProgress);

        post:
        // let para = {
        //     "edit":"1",
        //     "projectName":"1",
        //     "saleMan":"12",
        //     "addIncome":"12",
        //     "complete":"12",
        //     "startTime":"12",
        //     "endTime":"12",
        //     "personList":"12"
        // }
        // new Ajax(this, 'http://tpdoc.cn:3002/addProject', para, 'post', this.onGetComplete, this.onGetIOError, this.onGetProgress)
*/

class CallApi {

    public constructor(that, url:string = null, para:object = null, type:string, success:Function = null, fail:Function = null, progress:Function = null) {

        this.that = that;
        this.url = url;
        this.para = para;
        this.type = type;
        this.success = success;
        this.fail = fail;
        this.progress = progress;

        this.createView();
    }

    private that;
    private url:string;
    private para:object;
    private type:string;
    private success:Function;
    private fail:Function;
    private progress:Function;

    private createView() {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;

        if (this.type == 'get') {
            const util = new Util();
            const para = this.para ? '?' + util.getUrlParam(this.para) : '';

            request.open(this.url + para, egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send();


        } else {
            const para = this.para ? this.para : {};

            request.open(this.url, egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(para);
        }

        if (this.success) {
            request.addEventListener(egret.Event.COMPLETE,this.success,this.that);
        }
        if (this.fail) {
            request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.fail,this.that);
        }
        if (this.progress) {
            request.addEventListener(egret.ProgressEvent.PROGRESS,this.progress,this.that);
        }

    }

}
