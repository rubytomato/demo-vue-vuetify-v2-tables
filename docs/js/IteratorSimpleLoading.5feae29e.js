(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["IteratorSimpleLoading"],{"135d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-sheet",{staticClass:"pa-2",attrs:{color:"blue"}},[t._v("[columbo] simple iterator with loading")])],1)],1),a("v-data-iterator",{attrs:{items:t.items,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-row",{attrs:{dense:""}},t._l(e.items,(function(e){return a("v-col",{key:e.title,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",{attrs:{tile:"",color:"brown lighten-2"}},[a("div",{staticClass:"d-flex flex-row align-stretch"},[a("div",{staticClass:"pl-2 pt-5"},[a("v-chip",{attrs:{outlined:"",label:"",color:"brown darken-4"}},[t._v(t._s(e.no_in_series))])],1),a("div",[a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.japanese_title))])],1)]),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.labels,(function(i){return a("v-list-item",{key:i.name},[a("v-list-item-content",[t._v(t._s(i.name))]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e[i.prop]))])],1)})),1)],1)],1)})),1)]}},{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"ma-1",attrs:{icon:"mdi-vuetify",tile:"",outlined:""}},[t._v(" No data available ")])]},proxy:!0},{key:"loading",fn:function(){return[a("v-alert",{staticClass:"ma-1",attrs:{icon:"mdi-vuetify",tile:"",outlined:""}},[t._v(" Loading items... "),a("v-progress-linear",{attrs:{color:"blue accent-4",indeterminate:"",height:"5"}})],1)]},proxy:!0}])})],1)},n=[],s=a("d1dd"),r={name:"IteratorSimpleLoading",data:function(){return{items:[],labels:s["c"],loading:!1}},mounted:function(){var t=this;this.loading=!0,setTimeout((function(){t.items=t.transform(s["a"]),t.loading=!1}),5e3)},methods:{}},l=r,o=a("2877"),d=a("6544"),c=a.n(d),u=a("0798"),v=a("b0af"),m=a("99d9"),f=a("cc20"),p=a("62ad"),_=a("a523"),g=a("c377"),b=a("ce7e"),V=a("8860"),h=a("da13"),w=a("5d23"),C=a("8e36"),y=a("0fd9"),k=a("8dd9"),L=Object(o["a"])(l,i,n,!1,null,null,null);e["default"]=L.exports;c()(L,{VAlert:u["a"],VCard:v["a"],VCardSubtitle:m["a"],VCardTitle:m["c"],VChip:f["a"],VCol:p["a"],VContainer:_["a"],VDataIterator:g["a"],VDivider:b["a"],VList:V["a"],VListItem:h["a"],VListItemContent:w["a"],VProgressLinear:C["a"],VRow:y["a"],VSheet:k["a"]})}}]);
//# sourceMappingURL=IteratorSimpleLoading.5feae29e.js.map