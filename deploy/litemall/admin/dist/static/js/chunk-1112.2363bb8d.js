(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1112"],{"7e7Q":function(t,e,i){"use strict";var n=i("pybR");i.n(n).a},AGa2:function(t,e,i){"use strict";var n=i("LSMh");i.n(n).a},BiX5:function(t,e,i){"use strict";var n={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,i=0;this.isMoving=!0,this.interval=setInterval(function(){var n=Math.floor(t.easeInOutQuad(10*i,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,n),i++},16.7)}},easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}}},a=(i("7e7Q"),i("KHd+")),o=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:this.transitionName}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[e("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[e("title",[this._v("回到顶部")]),this._v(" "),e("g",[e("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},[],!1,null,"3d27e32b",null);o.options.__file="index.vue";e.a=o.exports},D05h:function(t,e,i){"use strict";i.r(e);var n=i("xA6U"),a=i("BiX5"),o=i("Mz3J"),l={name:"GoodsList",components:{BackToTop:a.a,Pagination:o.a},data:function(){return{list:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,goodsSn:void 0,name:void 0,sort:"add_time",order:"desc"},goodsDetail:"",detailDialogVisible:!1,downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.e)(this.listQuery).then(function(e){t.list=e.data.data.items,t.total=e.data.data.total,t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){this.$router.push({path:"/goods/create"})},handleUpdate:function(t){this.$router.push({path:"/goods/edit",query:{id:t.id}})},showDetail:function(t){this.goodsDetail=t,this.detailDialogVisible=!0},handleDelete:function(t){var e=this;Object(n.a)(t).then(function(i){e.$notify.success({title:"成功",message:"删除成功"});var n=e.list.indexOf(t);e.list.splice(n,1)}).catch(function(t){e.$notify.error({title:"失败",message:t.data.errmsg})})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([i.e("chunk-0d49"),i.e("chunk-17d4")]).then(i.bind(null,"S/jZ")).then(function(e){e.export_json_to_excel2(["商品ID","商品编号","名称","专柜价格","当前价格","是否新品","是否热品","是否在售","首页主图","宣传图片列表","商品介绍","详细介绍","商品图片","商品单位","关键字","类目ID","品牌商ID"],t.list,["id","goodsSn","name","counterPrice","retailPrice","isNew","isHot","isOnSale","listPicUrl","gallery","brief","detail","picUrl","goodsUnit","keywords","categoryId","brandId"],"商品信息"),t.downloadLoading=!1})}}},r=(i("AGa2"),i("KHd+")),s=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入商品编号"},model:{value:t.listQuery.goodsSn,callback:function(e){t.$set(t.listQuery,"goodsSn",e)},expression:"listQuery.goodsSn"}}),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入商品名称"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,size:"small","element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-form",{staticClass:"table-expand",attrs:{"label-position":"left"}},[i("el-form-item",{attrs:{label:"宣传画廊"}},t._l(e.row.gallery,function(t){return i("img",{key:t,staticClass:"gallery",attrs:{src:t}})})),t._v(" "),i("el-form-item",{attrs:{label:"商品介绍"}},[i("span",[t._v(t._s(e.row.brief))])]),t._v(" "),i("el-form-item",{attrs:{label:"商品单位"}},[i("span",[t._v(t._s(e.row.unit))])]),t._v(" "),i("el-form-item",{attrs:{label:"关键字"}},[i("span",[t._v(t._s(e.row.keywords))])]),t._v(" "),i("el-form-item",{attrs:{label:"类目ID"}},[i("span",[t._v(t._s(e.row.categoryId))])]),t._v(" "),i("el-form-item",{attrs:{label:"品牌商ID"}},[i("span",[t._v(t._s(e.row.brandId))])])],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"商品编号",prop:"goodsSn"}}),t._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"100",label:"名称",prop:"name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",property:"iconUrl",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{attrs:{src:t.row.picUrl,width:"40"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",property:"iconUrl",label:"分享图"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{attrs:{src:t.row.shareUrl,width:"40"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"详情",prop:"detail"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-dialog",{attrs:{visible:t.detailDialogVisible,title:"商品详情"},on:{"update:visible":function(e){t.detailDialogVisible=e}}},[i("div",{domProps:{innerHTML:t._s(t.goodsDetail)}})]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.showDetail(e.row.detail)}}},[t._v("查看")])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"专柜价格",prop:"counterPrice"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"当前价格",prop:"retailPrice"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"是否新品",prop:"isNew"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:e.row.isNew?"success":"error"}},[t._v(t._s(e.row.isNew?"新品":"非新品"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"是否热品",prop:"isHot"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:e.row.isHot?"success":"error"}},[t._v(t._s(e.row.isHot?"热品":"非热品"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"是否在售",prop:"isOnSale"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:e.row.isOnSale?"success":"error"}},[t._v(t._s(e.row.isOnSale?"在售":"未售"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),i("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[i("back-to-top",{attrs:{"visibility-height":100}})],1)],1)},[],!1,null,null,null);s.options.__file="list.vue";e.default=s.exports},LSMh:function(t,e,i){},Mz3J:function(t,e,i){"use strict";Math.easeInOutQuad=function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e};var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function a(t,e,i){var a=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=t-a,l=0;e=void 0===e?500:e;!function t(){l+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(l,a,o,e)),l<e?n(t):i&&"function"==typeof i&&i()}()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&a(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&a(0,800)}}},l=(i("PelQ"),i("KHd+")),r=Object(l.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"7d9f0a7c",null);r.options.__file="index.vue";e.a=r.exports},PelQ:function(t,e,i){"use strict";var n=i("X9ZH");i.n(n).a},X9ZH:function(t,e,i){},pybR:function(t,e,i){},xA6U:function(t,e,i){"use strict";i.d(e,"e",function(){return a}),i.d(e,"a",function(){return o}),i.d(e,"f",function(){return l}),i.d(e,"b",function(){return r}),i.d(e,"c",function(){return s}),i.d(e,"d",function(){return c});var n=i("t3Un");function a(t){return Object(n.a)({url:"/goods/list",method:"get",params:t})}function o(t){return Object(n.a)({url:"/goods/delete",method:"post",data:t})}function l(t){return Object(n.a)({url:"/goods/create",method:"post",data:t})}function r(t){return Object(n.a)({url:"/goods/detail",method:"get",params:{id:t}})}function s(t){return Object(n.a)({url:"/goods/update",method:"post",data:t})}function c(){return Object(n.a)({url:"/goods/catAndBrand",method:"get"})}}}]);