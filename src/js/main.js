/**
 * Created by farmerYuan on 2018/7/1.
 */
var App = new Vue({
    el: '#app',
    data: {
        isMain: true,
        pageType: sourceMap,
        groupList: []
    },
    methods: {
        jumpList: function(item) {
            this.isMain = false;
            this.groupList = this.pageType[item.id - 1].childrens || []
        },
        backIndex: function () {
            this.isMain = true;
        }
    }
});