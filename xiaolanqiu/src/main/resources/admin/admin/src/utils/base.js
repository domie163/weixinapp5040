const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaolanqiu/",
            name: "xiaolanqiu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaolanqiu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校篮球联赛"
        } 
    }
}
export default base
