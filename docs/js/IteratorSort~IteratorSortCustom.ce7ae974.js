(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["IteratorSort~IteratorSortCustom"],{"2fa4":function(e,t,a){"use strict";a("20f6");var i=a("80d2");t["a"]=Object(i["f"])("spacer","div","v-spacer")},"36a7":function(e,t,a){},"5e23":function(e,t,a){},"71d9":function(e,t,a){"use strict";a("0481"),a("4160"),a("4069"),a("a9e3");var i=a("3835"),n=a("5530"),r=(a("5e23"),a("8dd9")),s=(a("a15b"),a("8efc"),a("90a2")),o=(a("36a7"),a("24b2")),l=a("58df"),_=Object(l["a"])(o["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=_,c=a("7560"),g=a("d9f7"),u=a("d9bd"),h="undefined"!==typeof window&&"IntersectionObserver"in window,p=Object(l["a"])(d,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient(".concat(this.gradient,")")),t&&e.push('url("'.concat(t,'")'));var a=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[a]):a}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(e,t,a){if(!h||a||this.eager){if(this.normalisedSrc.lazySrc){var i=new Image;i.src=this.normalisedSrc.lazySrc,this.pollForSize(i,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,t=new Image;this.image=t,t.onload=function(){t.decode?t.decode().catch((function(t){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(e.normalisedSrc.src)+(t.message?"\nOriginal error: ".concat(t.message):""),e)})).then(e.onLoad):e.onLoad()},t.onerror=this.onError,this.hasError=!1,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var n=e.naturalHeight,r=e.naturalWidth;n||r?(t.naturalWidth=r,t.calculatedAspectRatio=r/n):null!=a&&!t.hasError&&setTimeout(i,a)};i()},genContent:function(){var e=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),e},__genPlaceholder:function(){if(this.$slots.placeholder){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(e){var t=d.options.render.call(this,e),a=Object(g["a"])(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,a,t.children)}}),y=a("80d2");t["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var e=this.computedContentHeight;if(!this.isExtended)return e;var t=parseInt(this.extensionHeight);return this.isCollapsed?e:e+(isNaN(t)?0:t)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(n["a"])(Object(n["a"])({},this.measurableStyles),{},{height:Object(y["e"])(this.computedHeight)})}},created:function(){var e=this,t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((function(t){var a=Object(i["a"])(t,2),n=a[0],r=a[1];e.$attrs.hasOwnProperty(n)&&Object(u["a"])(n,r,e)}))},methods:{genBackground:function(){var e={height:Object(y["e"])(this.computedHeight),src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img({props:e}):this.$createElement(p,{props:e});return this.$createElement("div",{staticClass:"v-toolbar__image"},[t])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(y["e"])(this.computedContentHeight)}},Object(y["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(y["e"])(this.extensionHeight)}},Object(y["o"])(this,"extension"))}},render:function(e){this.isExtended=this.extended||!!this.$scopedSlots.extension;var t=[this.genContent()],a=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&t.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&t.unshift(this.genBackground()),e(this.tag,a,t)}})},"7e58":function(e,t,a){},"8efc":function(e,t,a){},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l}));var i=a("b0af"),n=a("80d2"),r=Object(n["f"])("v-card__actions"),s=Object(n["f"])("v-card__subtitle"),o=Object(n["f"])("v-card__text"),l=Object(n["f"])("v-card__title");i["a"]},a609:function(e,t,a){"use strict";var i=a("5530"),n=(a("7e58"),a("604c")),r=n["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n["a"].options.computed.classes.call(this)}},methods:{genData:n["a"].options.methods.genData}}),s=a("a9ad"),o=a("58df");t["a"]=Object(o["a"])(r,s["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},r.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var e=this.setTextColor(this.color,Object(i["a"])({},r.options.methods.genData.call(this)));return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}})},d1dd:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return c}));var i=[{name:"初回放送日(米)",prop:"original_air_date"},{name:"初回放送日(日)",prop:"japanese_air_date"},{name:"放映時間",prop:"runtime"},{name:"ゲスト",prop:"guest_staring"}],n=[{title:"Prescription: Murder",original_air_date:"February 20, 1968",runtime:98,guest_staring:"Gene Barry",guest_staring_role:"Dr. Ray Fleming (Gene Barry), a psychiatrist",directed_by:"Richard Irving",written_by:["Richard Levinson & William Link"],teleplay:[""],season:0,no_in_season:1,no_in_series:1,japanese_title:"殺人処方箋",japanese_air_date:"1972-08-27T00:00:00+09:00"},{title:"Ransom for a Dead Man",original_air_date:"March 1, 1971",runtime:98,guest_staring:"Lee Grant",guest_staring_role:"Leslie Williams, a brilliant lawyer and pilot",directed_by:"Richard Irving",written_by:["Richard Levinson & William Link"],teleplay:["Dean Hargrove"],season:0,no_in_season:2,no_in_series:2,japanese_title:"死者の身代金",japanese_air_date:"1973-04-22T00:00:00+09:00"},{title:"Murder by the Book",original_air_date:"September 15, 1971",runtime:73,guest_staring:"Jack Cassidy",guest_staring_role:"Ken Franklin is one half of a mystery writing team",directed_by:"Steven Spielberg",written_by:["Steven Bochco"],teleplay:[""],season:1,no_in_season:1,no_in_series:3,japanese_title:"構想の死角",japanese_air_date:"1972-11-26T00:00:00+09:00"},{title:"Death Lends a Hand",original_air_date:"October 6, 1971",runtime:73,guest_staring:"Robert Culp",guest_staring_role:"Carl Brimmer, The head of a private detective agency",directed_by:"Bernard L. Kowalski",written_by:["RRichard Levinson & William Link"],teleplay:[""],season:1,no_in_season:2,no_in_series:4,japanese_title:"指輪の爪あと",japanese_air_date:"1973-01-21T00:00:00+09:00"},{title:"Dead Weight",original_air_date:"October 27, 1971",runtime:73,guest_staring:"Eddie Albert",guest_staring_role:"Major General Martin Hollister, a retired Marine Corps war hero",directed_by:"Jack Smight",written_by:["John T. Dugan"],teleplay:[""],season:1,no_in_season:3,no_in_series:5,japanese_title:"ホリスター将軍のコレクション",japanese_air_date:"1972-09-24T00:00:00+09:00"},{title:"Suitable for Framing",original_air_date:"November 17, 1971",runtime:73,guest_staring:"Ross Martin",guest_staring_role:"Dale Kingston, Art critic",directed_by:"Hy Averback",written_by:["Jackson Gillis"],teleplay:[""],season:1,no_in_season:4,no_in_series:6,japanese_title:"二枚のドガの絵",japanese_air_date:"1972-10-22T00:00:00+09:00"},{title:"Lady in Waiting",original_air_date:"December 15, 1971",runtime:73,guest_staring:"Susan Clark",guest_staring_role:"Beth Chadwick, sister of domineering, Bryce",directed_by:"Norman Lloyd",written_by:["Barney Slater"],teleplay:["Steven Bochco"],season:1,no_in_season:5,no_in_series:7,japanese_title:"もう一つの鍵",japanese_air_date:"1972-12-17T00:00:00+09:00"},{title:"Short Fuse",original_air_date:"January 19, 1972",runtime:73,guest_staring:"Roddy McDowall",guest_staring_role:"Roger Stanford, A chemist",directed_by:"Edward M. Abrams",written_by:["Lester & Tina Pine","Jackson Gillis"],teleplay:["Jackson Gillis"],season:1,no_in_season:6,no_in_series:8,japanese_title:"死の方程式",japanese_air_date:"1973-03-18T00:00:00+09:00"},{title:"Blueprint for Murder",original_air_date:"February 9, 1972",runtime:73,guest_staring:"Patrick O'Neal",guest_staring_role:"Elliot Markham, An architect",directed_by:"Peter Falk",written_by:["William Kelley"],teleplay:["Steven Bochco"],season:1,no_in_season:7,no_in_series:9,japanese_title:"パイルD-3の壁",japanese_air_date:"1973-02-25T00:00:00+09:00"},{title:"Étude in Black",original_air_date:"September 17, 1972",runtime:98,guest_staring:"John Cassavetes",guest_staring_role:"Alex Benedict, The conductor of the Los Angeles Philharmonic Orchestra",directed_by:"Nicholas Colasanto",written_by:["Richard Levinson & William Link"],teleplay:["Steven Bochco"],season:2,no_in_season:1,no_in_series:10,japanese_title:"黒のエチュード",japanese_air_date:"1973-09-30T00:00:00+09:00"},{title:"The Greenhouse Jungle",original_air_date:"October 15, 1972",runtime:73,guest_staring:"Ray Milland",guest_staring_role:"Jarvis Goodland, An expert in orchids",directed_by:"Boris Sagal",written_by:["Jonathan Latimer"],teleplay:[""],season:2,no_in_season:2,no_in_series:11,japanese_title:"悪の温室",japanese_air_date:"1973-05-27T00:00:00+09:00"},{title:"The Most Crucial Game",original_air_date:"November 5, 1972",runtime:73,guest_staring:"Robert Culp",guest_staring_role:"Paul Hanlon, The general manager of the Los Angeles Rockets football team",directed_by:"Jeremy Kagan",written_by:["John T. Dugan"],teleplay:[""],season:2,no_in_season:3,no_in_series:12,japanese_title:"アリバイのダイヤル",japanese_air_date:"1973-06-24T00:00:00+09:00"},{title:"Dagger of the Mind",original_air_date:"November 26, 1972",runtime:98,guest_staring:"Richard Basehart",guest_staring_role:"Actors Nicholas Framer and his wife, Lillian Stanhope",directed_by:"Richard Quine",written_by:["Richard Levinson & William Link"],teleplay:["Jackson Gillis"],season:2,no_in_season:4,no_in_series:13,japanese_title:"ロンドンの傘",japanese_air_date:"1973-07-29T00:00:00+09:00"},{title:"Requiem for a Falling Star",original_air_date:"January 21, 1973",runtime:73,guest_staring:"Anne Baxter",guest_staring_role:"movie star Nora Chandler",directed_by:"Richard Quine",written_by:["Jackson Gillis"],teleplay:[""],season:2,no_in_season:5,no_in_series:14,japanese_title:"偶像のレクイエム",japanese_air_date:"1973-08-26T00:00:00+09:00"},{title:"A Stitch in Crime",original_air_date:"February 11, 1973",runtime:73,guest_staring:"Leonard Nimoy",guest_staring_role:"Cardiac surgeon Dr. Barry Mayfield",directed_by:"Hy Averback",written_by:["Shirl Hendryx"],teleplay:[""],season:2,no_in_season:6,no_in_series:15,japanese_title:"溶ける糸",japanese_air_date:"1973-10-28T00:00:00+09:00"},{title:"The Most Dangerous Match",original_air_date:"March 4, 1973",runtime:73,guest_staring:"Laurence Harvey",guest_staring_role:"Chess Grandmaster Emmett Clayton",directed_by:"Edward M. Abroms",written_by:["Jackson Gillis","Richard Levinson & William Link"],teleplay:["Jackson Gillis"],season:2,no_in_season:7,no_in_series:16,japanese_title:"断たれた音",japanese_air_date:"1973-11-25T00:00:00+09:00"},{title:"Double Shock",original_air_date:"March 25, 1973",runtime:73,guest_staring:"Martin Landau",guest_staring_role:"Flamboyant television chef Dexter Paris and his twin brother, conservative banker Norman",directed_by:"Robert Butler",written_by:["Jackson Gillis","Richard Levinson & William Link"],teleplay:["Steven Bochco"],season:2,no_in_season:8,no_in_series:17,japanese_title:"二つの顔",japanese_air_date:"1973-12-23T00:00:00+09:00"},{title:"Lovely But Lethal",original_air_date:"September 23, 1973",runtime:73,guest_staring:"Vera Miles",guest_staring_role:"Cosmetics queen Viveca Scott",directed_by:"Jeannot Szwarc",written_by:["Myrna Bercovici"],teleplay:["Jackson Gillis"],season:3,no_in_season:1,no_in_series:18,japanese_title:"毒のある花",japanese_air_date:"1974-09-14T00:00:00+09:00"},{title:"Any Old Port in a Storm",original_air_date:"October 7, 1973",runtime:98,guest_staring:"Donald Pleasence",guest_staring_role:"Wine connoisseur Adrian Carsini",directed_by:"Leo Penn",written_by:["Larry Cohen"],teleplay:["Stanley Ralph Ross"],season:3,no_in_season:2,no_in_series:19,japanese_title:"別れのワイン",japanese_air_date:"1974-06-29T00:00:00+09:00"},{title:"Candidate for Crime",original_air_date:"November 4, 1973",runtime:98,guest_staring:"Jackie Cooper",guest_staring_role:"Nelson Hayward, is coercing the womanizing senatorial candidate",directed_by:"Boris Sagal",written_by:["Larry Cohen"],teleplay:["Irving Pearlberg & Alvin R. Friedman","Roland Kibbee & Dean Hargrove"],season:3,no_in_season:3,no_in_series:20,japanese_title:"野望の果て",japanese_air_date:"1974-08-17T00:00:00+09:00"},{title:"Double Exposure",original_air_date:"December 16, 1973",runtime:73,guest_staring:"Robert Culp",guest_staring_role:"Dr. Bart Keppel, A motivation research specialist",directed_by:"Richard Quine",written_by:["Stephen J. Cannell"],teleplay:[""],season:3,no_in_season:4,no_in_series:21,japanese_title:"意識の下の映像",japanese_air_date:"1974-08-10T00:00:00+09:00"},{title:"Publish or Perish",original_air_date:"January 18, 1974",runtime:73,guest_staring:"Jack Cassidy",guest_staring_role:"Riley Greenleaf, Publisher",directed_by:"Robert Butler",written_by:["Peter S. Fischer"],teleplay:[""],season:3,no_in_season:5,no_in_series:22,japanese_title:"第三の終章",japanese_air_date:"1974-12-14T00:00:00+09:00"},{title:"Mind Over Mayhem",original_air_date:"February 10, 1974",runtime:73,guest_staring:"José Ferrer",guest_staring_role:"Dr. Marshall Cahill, director of a high-tech Pentagon think tank",directed_by:"Alf Kjellin",written_by:["Robert Specht"],teleplay:["Steven Bochco","Dean Hargrove & Roland Kibbee"],season:3,no_in_season:6,no_in_series:23,japanese_title:"愛情の計算",japanese_air_date:"1974-08-31T00:00:00+09:00"},{title:"Swan Song",original_air_date:"March 3, 1974",runtime:98,guest_staring:"Johnny Cash",guest_staring_role:"Gospel-singing superstar Tommy Brown",directed_by:"Nicholas Colasanto",written_by:["Stanley Ralph Ross"],teleplay:["David Rayfiel"],season:3,no_in_season:7,no_in_series:24,japanese_title:"白鳥の歌",japanese_air_date:"1974-09-21T00:00:00+09:00"},{title:"A Friend in Deed",original_air_date:"May 5, 1974",runtime:98,guest_staring:"Richard Kiley",guest_staring_role:"Deputy police commissioner Mark Halperin",directed_by:"Ben Gazzara",written_by:["Peter S. Fischer"],teleplay:[""],season:3,no_in_season:8,no_in_series:25,japanese_title:"権力の墓穴",japanese_air_date:"1974-10-05T00:00:00+09:00"},{title:"An Exercise in Fatality",original_air_date:"September 15, 1974",runtime:98,guest_staring:"Robert Conrad",guest_staring_role:"Renowned exercise guru Milo Janus",directed_by:"Bernard L. Kowalski",written_by:["Larry Cohen"],teleplay:["Peter S. Fischer"],season:4,no_in_season:1,no_in_series:26,japanese_title:"自縛の紐",japanese_air_date:"1975-12-27T00:00:00+09:00"},{title:"Negative Reaction",original_air_date:"October 6, 1974",runtime:98,guest_staring:"Dick Van Dyke",guest_staring_role:"professional photographer Paul Galesko",directed_by:"Alf Kjellin",written_by:["Peter S. Fischer"],teleplay:[""],season:4,no_in_season:2,no_in_series:27,japanese_title:"逆転の構図",japanese_air_date:"1975-12-20T00:00:00+09:00"},{title:"By Dawn's Early Light",original_air_date:"October 27, 1974",runtime:98,guest_staring:"Patrick McGoohan",guest_staring_role:"Colonel Lyle C. Rumford, head of the Haynes Military Academy",directed_by:"Harvey Hart",written_by:["Howard Berk"],teleplay:[""],season:4,no_in_season:3,no_in_series:28,japanese_title:"祝砲の挽歌",japanese_air_date:"1976-01-10T00:00:00+09:00"},{title:"Troubled Waters",original_air_date:"February 9, 1975",runtime:98,guest_staring:"Robert Vaughn",guest_staring_role:"Auto executive Hayden Danziger",directed_by:"Ben Gazzara",written_by:["Jackson Gillis","William Driskill"],teleplay:["William Driskill"],season:4,no_in_season:4,no_in_series:29,japanese_title:"歌声の消えた海",japanese_air_date:"1976-01-03T00:00:00+09:00"},{title:"Playback",original_air_date:"March 2, 1975",runtime:73,guest_staring:"Oskar Werner",guest_staring_role:"Harold Van Wick, the gadget-obsessed president of Midas Electronics",directed_by:"Bernard L. Kowalski",written_by:["David P. Lewis & Booker T. Bradshaw"],teleplay:[""],season:4,no_in_season:5,no_in_series:30,japanese_title:"ビデオテープの証言",japanese_air_date:"1976-12-11T00:00:00+09:00"},{title:"A Deadly State of Mind",original_air_date:"April 27, 1975",runtime:73,guest_staring:"George Hamilton",guest_staring_role:"Psychiatrist Dr. Mark Collier",directed_by:"Harvey Hart",written_by:["Peter S. Fischer"],teleplay:[""],season:4,no_in_season:6,no_in_series:31,japanese_title:"5時30分の目撃者",japanese_air_date:"1976-12-18T00:00:00+09:00"},{title:"Forgotten Lady",original_air_date:"September 14, 1975",runtime:85,guest_staring:"Janet Leigh",guest_staring_role:"Aging former movie star Grace Wheeler",directed_by:"Harvey Hart",written_by:["Bill Driskill"],teleplay:[""],season:5,no_in_season:1,no_in_series:32,japanese_title:"忘れられたスター",japanese_air_date:"1977-01-03T00:00:00+09:00"},{title:"A Case of Immunity",original_air_date:"October 12, 1975",runtime:73,guest_staring:"Héctor Elizondo",guest_staring_role:"Hassan Salah, chief diplomat of the Legation of Swahari",directed_by:"Ted Post",written_by:["James Menzies"],teleplay:["Lou Shaw"],season:5,no_in_season:2,no_in_series:33,japanese_title:"ハッサン・サラーの反逆",japanese_air_date:"1976-12-25T00:00:00+09:00"},{title:"Identity Crisis",original_air_date:"November 2, 1975",runtime:98,guest_staring:"Patrick McGoohan",guest_staring_role:"speech-writing consultant Nelson Brenner",directed_by:"Patrick McGoohan",written_by:["Bill Driskill"],teleplay:[""],season:5,no_in_season:3,no_in_series:34,japanese_title:"仮面の男",japanese_air_date:"1977-09-24T00:00:00+09:00"},{title:"A Matter of Honor",original_air_date:"February 1, 1976",runtime:73,guest_staring:"Ricardo Montalban",guest_staring_role:"Luis Montoya, A Mexican national hero",directed_by:"Ted Post",written_by:["Brad Radnitz"],teleplay:[""],season:5,no_in_season:4,no_in_series:35,japanese_title:"闘牛士の栄光",japanese_air_date:"1977-10-01T00:00:00+09:00"},{title:"Now You See Him...",original_air_date:"February 29, 1976",runtime:85,guest_staring:"Jack Cassidy",guest_staring_role:"Great Santini, a magician extraordinaire",directed_by:"Harvey Hart",written_by:["Michael Sloan"],teleplay:[""],season:5,no_in_season:5,no_in_series:36,japanese_title:"魔術師の幻想",japanese_air_date:"1977-12-31T00:00:00+09:00"},{title:"Last Salute to the Commodore",original_air_date:"May 2, 1976",runtime:98,guest_staring:"Robert Vaughn",guest_staring_role:"Son-in-law Charles Clay",directed_by:"Patrick McGoohan",written_by:["Jackson Gillis"],teleplay:[""],season:5,no_in_season:6,no_in_series:37,japanese_title:"さらば提督",japanese_air_date:"1977-10-08T00:00:00+09:00"},{title:"Fade in to Murder",original_air_date:"October 10, 1976",runtime:73,guest_staring:"William Shatner",guest_staring_role:"Egocentric actor Ward Fowler",directed_by:"Bernard L. Kowalski",written_by:["Henry Garson"],teleplay:["Lou Shaw","Peter S. Feibleman"],season:6,no_in_season:1,no_in_series:38,japanese_title:"ルーサン警部の犯罪",japanese_air_date:"1977-12-17T00:00:00+09:00"},{title:"Old Fashioned Murder",original_air_date:"November 28, 1976",runtime:73,guest_staring:"Joyce Van Patten",guest_staring_role:"Ruth Lytton, Owner of the Lytton Museum",directed_by:"Robert Douglas",written_by:["Lawrence Vail"],teleplay:["Peter S. Feibleman"],season:6,no_in_season:2,no_in_series:39,japanese_title:"黄金のバックル",japanese_air_date:"1977-12-24T00:00:00+09:00"},{title:"The Bye-Bye Sky High IQ Murder Case",original_air_date:"May 22, 1977",runtime:73,guest_staring:"Theodore Bikel",guest_staring_role:"Oliver Brandt, a senior partner in an accounting firm",directed_by:"Sam Wanamaker",written_by:["Robert Malcolm Young"],teleplay:[""],season:6,no_in_season:3,no_in_series:40,japanese_title:"殺しの序曲",japanese_air_date:"1978-05-20T00:00:00+09:00"},{title:"Try and Catch Me",original_air_date:"November 21, 1977",runtime:73,guest_staring:"Ruth Gordon",guest_staring_role:"Mystery author Abigail Mitchell",directed_by:"James Frawley",written_by:["Gene Thompson"],teleplay:["Gene Thompson & Paul Tuckahoe"],season:7,no_in_season:1,no_in_series:41,japanese_title:"死者のメッセージ",japanese_air_date:"1978-04-08T00:00:00+09:00"},{title:"Murder Under Glass",original_air_date:"January 30, 1978",runtime:73,guest_staring:"Louis Jourdan",guest_staring_role:"Renowned restaurant critic Paul Gerard",directed_by:"Jonathan Demme",written_by:["Robert van Scoyk"],teleplay:[""],season:7,no_in_season:2,no_in_series:42,japanese_title:"美食の報酬",japanese_air_date:"1978-05-27T00:00:00+09:00"},{title:"Make Me a Perfect Murder",original_air_date:"February 28, 1978",runtime:98,guest_staring:"Trish Van Devere",guest_staring_role:"TV programmer Kay Freestone",directed_by:"James Frawley",written_by:["Robert Blees"],teleplay:[""],season:7,no_in_season:3,no_in_series:43,japanese_title:"秒読みの殺人",japanese_air_date:"1979-01-02T00:00:00+09:00"},{title:"How to Dial a Murder",original_air_date:"April 15, 1978",runtime:73,guest_staring:"Nicol Williamson",guest_staring_role:"Mind control seminar guru Dr. Eric Mason",directed_by:"James Frawley",written_by:["Anthony Lawrence"],teleplay:["Tom Lazarus"],season:7,no_in_season:4,no_in_series:44,japanese_title:"攻撃命令",japanese_air_date:"1979-01-04T00:00:00+09:00"},{title:"The Conspirators",original_air_date:"May 13, 1978",runtime:98,guest_staring:"Clive Revill",guest_staring_role:"Famous Irish poet and author Joe Devlin",directed_by:"Leo Penn",written_by:["Howard Berk"],teleplay:[""],season:7,no_in_season:5,no_in_series:45,japanese_title:"策謀の結末",japanese_air_date:"1979-01-03T00:00:00+09:00",based_on_an_idea_by:"Pat Robison"}],r={prop:null,desc:[]},s={prop:"no_in_series",desc:!1},o={prop:"original_air_date",desc:!1},l={prop:"japanese_air_date",desc:!1},_={prop:"runtime",desc:!1},d={prop:"guest_staring",desc:!1},c=[{text:"ソート無し",value:r},{text:"シリーズ",value:s},{text:"初回放送日(米)",value:o},{text:"初回放送日(日)",value:l},{text:"放映時間",value:_},{text:"ゲスト",value:d}]}}]);
//# sourceMappingURL=IteratorSort~IteratorSortCustom.ce7ae974.js.map