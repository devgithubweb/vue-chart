webpackJsonp([1],{0:function(t,a){},1:function(t,a){},"Gf/I":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),r=e("Gu7T"),s=e.n(r),n=e("BO1k"),c=e.n(n),l=e("fZjL"),o=e.n(l),h=e("Dd8w"),d=e.n(h),f=e("woOf"),u=e.n(f),x=(e("nFqq"),u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("bmQh"))),m=function(){var t=this,a=x.select("#"+this.chartData.selector),e={palette:{fill:["#005792","#ffcdcd"],stroke:"#d1f4fa"},bar:{hPadding:8,vPadding:5},x:{axisHeight:10,ticks:5},y:{domain:[],range:[],axisWidth:null}},i=function(t){return e.x.scale(t.metric)},r=function(){return((t.displayHeight-e.x.axisHeight-t.header-e.bar.vPadding)/t.ds.length-1)/t.metric.length},s=function(a,i){return i*(t.displayHeight-e.x.axisHeight-t.header)/t.ds.length+1+t.header+e.bar.offset*r()},n=function(a){t.addTooltip(a,window.event)},c=function(a){t.removeTooltip(a)},l=[];return this.metric.forEach(function(e,i){l.push(a.selectAll("rect.r"+i).data(t.ds.map(function(t){return{metric:t.metric[i],dim:t.dim}})))}),e=this.setOverrides(e,this.chartData.overrides),this.ds[0]&&this.ds[0].dim&&(e.y.axisWidth=e.y.axisWidth||10*this.ds.reduce(function(t,a){return a.dim&&a.dim.length>t?a.dim.length:t},0)),e.x.scale=x.scaleLinear().domain([0,t.max]).range([0,t.width-e.bar.hPadding-e.y.axisWidth]),t.ds.forEach(function(t){return e.y.domain.push(t.dim)}),t.ds.forEach(function(a,i){return e.y.range.push((t.displayHeight-e.x.axisHeight-t.header+e.bar.vPadding)*i/t.ds.length)}),e.y.scale=x.scaleOrdinal().domain(e.y.domain).range(e.y.range),e.x.axis=x.axisBottom().ticks(e.x.ticks,"s").scale(e.x.scale),e.y.axis=x.axisLeft().scale(e.y.scale),e.x.yOffset=t.displayHeight-e.x.axisHeight,e.x.xOffset=e.bar.hPadding+e.y.axisWidth,e.y.yOffset=e.bar.vPadding+t.header-1,e.y.xOffset=e.y.axisWidth,t.ds[0].dim&&a.append("g").attr("class","axis").attr("transform","translate("+e.y.xOffset+", "+e.y.yOffset+")").call(e.y.axis),a.append("g").attr("class","axis").attr("transform","translate("+e.x.xOffset+", "+e.x.yOffset+")").call(e.x.axis),function(l){t.metric.forEach(function(a,o){e.bar.offset=o,l[o].enter().append("rect").attr("fill",e.palette.fill[o]).attr("stroke",e.palette.stroke).attr("class",t.selector).attr("class","r"+o).attr("width",i).attr("height",r).attr("y",s).attr("x",e.y.axisWidth+e.bar.hPadding).on("mouseover",n).on("mouseout",c)}),t.goal&&t.generateGoal(e,a,!1,e.y.axisWidth+e.bar.hPadding)}(l),function(n){t.metric.forEach(function(t,a){e.bar.offset=a,n[a].transition().attr("width",i).attr("height",r).attr("y",s).attr("x",e.y.axisWidth+e.bar.hPadding)}),t.goal&&t.generateGoal(e,a,!1,e.y.axisWidth+e.bar.hPadding)}(l),function(a){t.metric.forEach(function(t,e){a[e].exit().remove()})}(l),e},y=u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("n7yu")),p=function(){var t=this,a=y.select("#"+this.chartData.selector),e={palette:{fill:["#005792","#ffcdcd"],stroke:"#d1f4fa"},bar:{hPadding:0,vPadding:0},x:{axisHeight:20,domain:[],range:[]},y:{axisWidth:30,ticks:5}},i=function(){return((t.width-e.y.axisWidth)/t.chartData.data.length-1)/t.metric.length},r=function(a){return t.displayHeight-e.y.scale(a.metric)},s=function(a,r){return r*(t.width-e.y.axisWidth)/t.chartData.data.length+e.y.axisWidth+e.bar.offset*i()},n=function(t){return e.y.scale(t.metric)},c=function(a){t.addTooltip(a,window.event)},l=function(a){t.removeTooltip(a)},o=[];return this.metric.forEach(function(e,i){o.push(a.selectAll("rect.r"+i).data(t.ds.map(function(t){return{metric:t.metric[i],dim:t.dim}})))}),(e=this.setOverrides(e,this.chartData.overrides)).y.scale=y.scaleLinear().domain([0,t.max]).range([t.displayHeight,t.header]),t.ds.forEach(function(t){return e.x.domain.push(t.dim)}),t.ds.forEach(function(a,i){return e.x.range.push((t.chartData.width-e.y.axisWidth+e.bar.vPadding)*i/t.ds.length)}),e.x.scale=y.scaleOrdinal().domain(e.x.domain).range(e.x.range),e.y.axis=y.axisLeft().ticks(e.y.ticks,"s").scale(e.y.scale),e.x.axis=y.axisBottom().scale(e.x.scale),e.x.yOffset=t.displayHeight,e.x.xOffset=e.y.axisWidth,e.y.yOffset=0,e.y.xOffset=e.y.axisWidth,a.append("g").attr("class","axis").attr("transform","translate("+e.y.xOffset+", "+e.y.yOffset+")").call(e.y.axis),t.ds[0].dim&&a.append("g").attr("class","axis").attr("transform","translate("+e.x.xOffset+", "+e.x.yOffset+")").call(e.x.axis),function(a){t.metric.forEach(function(o,h){e.bar.offset=h,a[h].enter().append("rect").attr("fill",e.palette.fill[h]).attr("stroke",e.palette.stroke).attr("class",t.selector).attr("class","r"+h).attr("width",i).attr("height",r).attr("x",s).attr("y",n).on("mouseover",c).on("mouseout",l)})}(o),function(a){t.metric.forEach(function(t,c){e.bar.offset=c,a[c].transition().attr("width",i).attr("height",r).attr("x",s).attr("y",n)})}(o),function(a){t.metric.forEach(function(t,e){a[e].exit().remove()})}(o),e},g=u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("1gFY")),v=function(t){var a=this,e=g.select("#"+this.chartData.selector),i={palette:{lineFill:["#ffcdcd","#005792"],pointFill:"#005792",pointStroke:"#d1f4fa"},x:{domain:[],range:[],axisHeight:20},y:{axisWidth:30,ticks:5}};i.lineFunction=[],this.metric.forEach(function(t,a){i.lineFunction.push(g.line().x(function(t){return i.x.scale(t.dim)+i.y.axisWidth+5}).y(function(t){return i.y.scale(t.metric[a])}))});var r=[];this.metric.forEach(function(t,i){r.push(e.selectAll("circle.r"+i).data(a.ds.map(function(t){return{metric:t.metric[i],dim:t.dim}})))});var s=[];return this.metric.forEach(function(t,i){s.push(e.selectAll("path#p"+i).data(a.ds))}),function(t){t.y.scale=g.scaleLinear().domain([a.min,a.max]).range([a.displayHeight-t.x.axisHeight,a.header]),a.ds.forEach(function(a){return t.x.domain.push(a.dim)}),a.ds.forEach(function(e,i){return t.x.range.push((a.width*i-a.header)/a.ds.length)}),t.x.scale=g.scaleOrdinal().domain(t.x.domain).range(t.x.range)}(i=this.setOverrides(i,this.chartData.overrides)),function(t){t.x.axis=g.axisBottom().scale(t.x.scale),t.x.xOffset=t.y.axisWidth+5,t.x.yOffset=a.displayHeight-t.x.axisHeight,t.y.axis=g.axisLeft().ticks(t.y.ticks,"s").scale(t.y.scale),t.y.xOffset=t.y.axisWidth,t.y.yOffset=0,e.append("g").attr("class","axis").attr("transform","translate("+t.x.xOffset+", "+t.x.yOffset+")").call(t.x.axis),e.append("g").attr("class","axis").attr("transform","translate("+t.y.xOffset+","+t.y.yOffset+")").call(t.y.axis)}(i),function(t,r){a.metric.forEach(function(t,e){r[e].enter().append("path").attr("d",i.lineFunction[e](a.ds)).attr("fill","none").attr("id","p"+e).attr("stroke",i.palette.lineFill[e]).attr("stroke-width",3)}),a.metric.forEach(function(e,r){i.offset=r,t[r].enter().append("circle").attr("class",a.selector).attr("class","r"+r).attr("r",2).on("mouseover",function(t){a.addTooltip(t,window.event)}).on("mouseout",function(t){a.removeTooltip(t)}).attr("cx",function(t){return i.x.scale(t.dim)+i.y.axisWidth+5}).attr("cy",function(t){return i.y.scale(t.metric)})}),a.goal&&a.generateGoal(i,e,!0,0)}(r,s),function(t,r){a.metric.forEach(function(t,e){r[e].transition().attr("d",i.lineFunction[e](a.ds))}),a.metric.forEach(function(a,e){i.offset=e,t[e].transition().attr("cx",function(t){return i.x.scale(t.dim)+i.y.axisWidth+5}).attr("cy",function(t){return i.y.scale(t.metric)}).attr("cx",function(t){return i.x.scale(t.dim)+i.y.axisWidth+5}).attr("cy",function(t){return i.y.scale(t.metric)})}),a.goal&&a.generateGoal(i,e,!0,0)}(r,s),function(t,e){a.metric.forEach(function(a,e){t[e].exit().remove()}),a.metric.forEach(function(t,a){e[a].exit().remove()})}(r,s),i},w=u()({},e("sHXk"),e("dJjO"),e("Mx2h")),b=function(){var t=this,a=w.select("#"+this.chartData.selector),e={palette:{pointFill:"#005792",pointStroke:"#d1f4fa"},x:{domain:[],range:[],axisHeight:20},y:{axisWidth:30,ticks:5},r:{width:5}},i=a.selectAll("circle").data(this.ds);return function(a){a.y.scale=w.scaleLinear().domain([t.minTriplet.v2,t.maxTriplet.v2]).range([t.displayHeight-a.x.axisHeight,t.header]),a.x.scale=w.scaleLinear().domain([t.minTriplet.v1,t.maxTriplet.v1]).range([0,t.width])}(e=this.setOverrides(e,this.chartData.overrides)),function(e){e.x.axis=w.axisBottom().scale(e.x.scale),e.x.xOffset=e.y.axisWidth+5,e.x.yOffset=t.displayHeight-e.x.axisHeight,e.y.axis=w.axisLeft().ticks(e.y.ticks,"s").scale(e.y.scale),e.y.xOffset=e.y.axisWidth,e.y.yOffset=0,a.append("g").attr("class","axis").attr("transform","translate("+e.x.xOffset+", "+e.x.yOffset+")").call(e.x.axis),a.append("g").attr("class","axis").attr("transform","translate("+e.y.xOffset+","+e.y.yOffset+")").call(e.y.axis)}(e),function(a){a.enter().append("circle").attr("class",t.selector).attr("r",e.r.width).attr("cx",function(t){return e.x.scale(t.metric[0])+e.y.axisWidth+5}).attr("cy",function(t){return e.y.scale(t.metric[1])})}(i),function(t){t.transition().attr("r",e.r.width).attr("cx",function(t){return e.x.scale(t.metric[0])+e.y.axisWidth+5}).attr("cy",function(t){return e.y.scale(t.metric[1])})}(i),function(t){t.exit().remove()}(i),e},D=u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("1gFY")),O=function(){var t=this,a=D.select("#"+this.chartData.selector),e={radius:null,ordinalColors:["#d1f4fa","#005792","#ffe6eb","#ffcdcd"]};e.radius=this.height>this.width?(this.width-.1*this.width)/2:(this.height-.1*this.height)/2;var i=D.scaleOrdinal().range(e.ordinalColors),r=function(t,a){return i(a)},s=function(a){t.addTooltip(a.data,window.event)},n=function(a){t.removeTooltip(a)},c=D.arc().outerRadius(e.radius-10).innerRadius(25),l=D.pie().sort(null).value(function(t){return t.metric}),o=a.selectAll(".arc").data(l(this.ds));return e=this.setOverrides(e,this.chartData.overrides),function(a){a.enter().append("g").attr("transform","translate("+t.width/2+","+t.height/2+")").append("path").merge(a).attr("class","arc").attr("d",c).attr("fill",r).on("mouseover",s).on("mouseout",n).attr("transform","translate(0,"+t.header+")")}(o),function(t){t.transition().attr("d",c).attr("fill",r)}(o),function(t){t.exit().remove()}(o),e},H=u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("1gFY")),k=function(){var t=this,a=H.select("#"+this.chartData.selector),e={palette:{stroke:"#d1f4fa",fill:"#005792"},x:{domain:[],range:[],axisHeight:45,axisWidth:45},y:{axisWidth:45}},i=function(a){var i=" "+t.width+", "+e.x.yOffset+" ";return i+=" "+e.x.axisHeight+", "+e.x.yOffset+" ",i+=a.map(function(t){return[e.x.scale(t.dim)+e.y.axisWidth+5,e.y.scale(t.metric)].join(",")}).join(" ")},r=a.selectAll("polygon").data([this.ds]);return(e=this.setOverrides(e,this.chartData.overrides)).y.scale=H.scaleLinear().domain([0,t.max]).range([t.displayHeight-e.x.axisHeight,t.titleHeight]),e.y.axis=H.axisLeft().ticks(10,"s").scale(e.y.scale),t.ds.forEach(function(t){return e.x.domain.push(t.dim)}),t.ds.forEach(function(a,i){return e.x.range.push((t.width-e.x.axisWidth)*i/t.ds.length)}),e.x.scale=H.scaleOrdinal().domain(e.x.domain).range(e.x.range),e.x.axis=H.axisBottom().scale(e.x.scale),e.polyFunction=H.line().x(function(t){return e.x.scale(t.dim)+e.y.axisWidth+5}).y(function(t){return e.y.scale(t.metric)}),e.x.xOffset=e.y.axisWidth+5,e.x.yOffset=t.displayHeight-e.x.axisHeight,e.y.xOffset=e.y.axisWidth,e.y.yOffset=0,a.append("g").append("g").attr("class","axis").attr("transform","translate("+e.x.xOffset+", "+e.x.yOffset+")").call(e.x.axis),t.ds[0].dim&&a.append("g").append("g").attr("class","axis").attr("transform","translate("+e.y.xOffset+","+e.y.yOffset+")").call(e.y.axis),r.enter().append("polygon").attr("stroke",e.palette.stroke).attr("fill",e.palette.fill).attr("points",i),function(t){t.transition().attr("points",i)}(r),function(t){t.exit().remove()}(r),e},C=u()({},e("sHXk"),e("dJjO"),e("Mx2h"),e("1gFY")),W=function(t){var a=this,e=C.select("#"+this.chartData.selector),i={palette:{pointFill:"#005792",pointStroke:"#d1f4fa"},x:{domain:[],range:[],axisHeight:20},y:{axisWidth:30,ticks:5},r:{}},r=e.selectAll("circle").data(this.ds);return function(t){t.y.scale=C.scaleLinear().domain([a.minTriplet.v2,a.maxTriplet.v2]).range([a.displayHeight-t.x.axisHeight,a.header]),t.x.scale=C.scaleLinear().domain([a.minTriplet.v1,a.maxTriplet.v1]).range([0,a.width]),t.r.scale=C.scaleLinear().domain([a.minTriplet.v3,a.maxTriplet.v3]).range([0,20])}(i=this.setOverrides(i,this.chartData.overrides)),function(t){t.x.axis=C.axisBottom().scale(t.x.scale),t.x.xOffset=t.y.axisWidth+5,t.x.yOffset=a.displayHeight-t.x.axisHeight,t.y.axis=C.axisLeft().ticks(t.y.ticks,"s").scale(t.y.scale),t.y.xOffset=t.y.axisWidth,t.y.yOffset=0,e.append("g").attr("class","axis").attr("transform","translate("+t.x.xOffset+", "+t.x.yOffset+")").call(t.x.axis),e.append("g").attr("class","axis").attr("transform","translate("+t.y.xOffset+","+t.y.yOffset+")").call(t.y.axis)}(i),function(t){t.enter().append("circle").attr("class",a.selector).attr("r",function(t){return i.r.scale(t.metric[2])}).attr("cx",function(t){return i.x.scale(t.metric[0])+i.y.axisWidth+5}).attr("cy",function(t){return i.y.scale(t.metric[1])})}(r),function(t){t.transition().attr("r",function(t){return i.r.scale(t.metric[2])}).attr("cx",function(t){return i.x.scale(t.metric[0])+i.y.axisWidth+5}).attr("cy",function(t){return i.y.scale(t.metric[1])})}(r),function(t){t.exit().remove()}(r),i},E=u()({},e("sHXk")),T={install:function(t){t.component("v-chart",{props:["chartData"],data:function(){return{selector:this.chartData.selector+"-"+this.chartData.chartType}},methods:d()({initalizeChart:function(){var t=this[this.chartData.chartType]("init");this.drawTitle(),this.generateLegend(t)},refreshChart:function(){this.clearAxis(),this[this.chartData.chartType]("refresh")},clearAxis:function(){E.select("#"+this.chartData.selector).selectAll(".axis").remove()},clearCanvas:function(){E.select("#"+this.chartData.selector).selectAll("*").remove()},drawTitle:function(){E.select("#"+this.chartData.selector).append("text").attr("x",this.width/2).attr("y",this.titleHeight-.1*this.titleHeight).style("text-anchor","middle").text(this.chartData.title),E.select("#"+this.chartData.selector).append("text").attr("x",this.width/2).attr("y",this.titleHeight-.1*this.titleHeight+this.subtitleHeight).style("text-anchor","middle").text(this.chartData.subtitle)},addTooltip:function(t,a){E.select("#"+this.chartData.selector).append("rect").attr("x",a.offsetX-5-50).attr("y",a.offsetY-13-25).attr("height","16px").attr("width","80px").attr("class","tt").attr("fill","white"),E.select("#"+this.chartData.selector).append("text").attr("x",a.offsetX-50).attr("y",a.offsetY-25).attr("class","tt").attr("font-size","10px").text(t.dim+":"+t.metric)},removeTooltip:function(){E.select("#"+this.chartData.selector).selectAll(".tt").remove()},setOverrides:function(t,a){a=a||{};var e=o()(t),i=!0,r=!1,s=void 0;try{for(var n,l=c()(e);!(i=(n=l.next()).done);i=!0){var h=n.value;u()(t[h],a[h])}}catch(t){r=!0,s=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}return t},generateLegend:function(t){var a=this;this.chartData.legends&&!0===this.chartData.legends.enabled&&(t.palette.lineFill=Array.isArray(t.palette.lineFill)?t.palette.lineFill:new Array(t.palette.lineFill),t.palette.fill=Array.isArray(t.palette.fill)?t.palette.fill:new Array(t.palette.fill),this.metric.forEach(function(e,i){E.select("#"+a.chartData.selector).append("text").attr("x",a.width-60).attr("y",.95*a.height-15*i).style("text-anchor","middle").text(a.metric[i]),E.select("#"+a.chartData.selector).append("g").attr("class","legends").append("rect").attr("x",a.width-30).attr("y",.95*a.height-15*i-10).attr("width",30).attr("height",10).style("fill",function(){return t.palette.lineFill[i]||t.palette.fill[i]})}))},generateGoal:function(t,a,e,i){a.selectAll("line#goal").remove();var r=e?t.y.axisWidth:t.x.scale(this.goal)+i,s=e?500:t.x.scale(this.goal)+i,n=e?t.y.scale(this.goal)+i:this.header,c=e?t.y.scale(this.goal)+i:this.displayHeight-t.x.axisHeight;a.append("line").attr("x1",r).attr("x2",s).attr("y1",n).attr("y2",c).attr("id","goal").style("stroke","#708090").style("stroke-width",1)}},{barChart:m},{vBarChart:p},{scatterPlot:b},{pieChart:O},{areaChart:k},{lineGraph:v},{bubbleChart:W}),computed:{ds:function(){var t=this,a={metric:[]};return a.metric=Array.isArray(this.chartData.metric)?a.metric=this.chartData.metric:new Array(this.chartData.metric),a.dim=this.chartData.dim,a.data=this.chartData.data,a.data.map(function(e){var i={metric:[]};return a.metric[0]?a.metric.forEach(function(t,a){i.metric[a]=e[t]||0}):i.metric[0]=e||0,i.dim=t.chartData.dim?e[t.chartData.dim]:null,i})},goal:function(){return this.chartData.goal},metric:function(){var t=Array.isArray(this.chartData.metric)?this.chartData.metric:new Array(this.chartData.metric);return t},height:function(){return this.chartData.height||200},width:function(){return this.chartData.width||200},max:function(){var t=0,a=[];return this.ds.forEach(function(t){a=a.concat([].concat(s()(t.metric)))}),a.forEach(function(a){t=t>a?t:a}),t},maxTriplet:function(){var t={v1:0,v2:0,v3:0};return this.ds.forEach(function(a){t.v1=t.v1>a.metric[0]?t.v1:a.metric[0],t.v2=t.v2>a.metric[1]?t.v2:a.metric[1],t.v3=t.v3>a.metric[2]?t.v3:a.metric[2]}),t},min:function(){var t=[];return this.ds.forEach(function(a){t=t.concat([].concat(s()(a.metric)))}),Math.min.apply(Math,s()(t.map(function(t){return t})))},minTriplet:function(){var t={v1:[],v2:[],v3:[]};return this.ds.forEach(function(a){t.v1.push(a.metric[0]),t.v2.push(a.metric[1]),t.v3.push(a.metric[2])}),{v1:Math.min.apply(Math,s()(t.v1.map(function(t){return t}))),v2:Math.min.apply(Math,s()(t.v2.map(function(t){return t}))),v3:Math.min.apply(Math,s()(t.v3.map(function(t){return t})))}},displayHeight:function(){return this.chartData.legends&&!0===this.chartData.legends.enabled?.8*this.height:this.height},titleHeight:function(){return this.chartData.title?this.chartData.textHeight||25:0},subtitleHeight:function(){return this.chartData.subtitle?.66*this.chartData.textHeight||16.5:0},header:function(){return this.titleHeight+this.subtitleHeight}},mounted:function(){this.initalizeChart()},watch:{chartData:{handler:function(){this.refreshChart()},deep:!0}},template:"<svg :id='this.chartData.selector' x='5' y='5' :height='this.height + 20' :width='this.width + 20'> </svg>"})}},A=T;"undefined"!=typeof window&&window.Vue&&window.Vue.use(T);var _=[{month:"Jan",year:2018,total:475,forecast:500,yoy:1.05,actual:!0},{month:"Feb",year:2018,total:515,forecast:525,yoy:1.03,actual:!0},{month:"Mar",year:2018,total:390,forecast:480,yoy:.95,actual:!0},{month:"Apr",year:2018,total:430,forecast:440,yoy:.8,actual:!0},{month:"May",year:2018,total:510,forecast:500,yoy:.7,actual:!0},{month:"Jun",year:2018,total:399,forecast:450,yoy:.75,actual:!0},{month:"Jul",year:2018,total:601,forecast:550,yoy:1,actual:!0},{month:"Aug",year:2018,total:496,forecast:480,yoy:1.15,actual:!0},{month:"Sep",year:2018,total:379,forecast:440,yoy:1.1,actual:!0},{month:"Oct",year:2018,total:410,forecast:430,yoy:.85,actual:!1},{month:"Nov",year:2018,total:490,forecast:500,yoy:.95,actual:!1},{month:"Dec",year:2018,total:610,forecast:625,yoy:1.01,actual:!1}],F={name:"barChartExample",methods:{newItem:function(){this.sales.push({month:null,year:null,total:null,actual:!1})},removeItem:function(t,a){a.preventDefault(),this.sales.splice(t,1)}},data:function(){return{sales:_,areaChartData:{chartType:"areaChart",selector:"areaChart",title:"Area Chart",width:300,height:200,metric:["total"],dim:"month",data:_,legends:{enabled:!0,height:25,width:50}},bubbleChartData:{chartType:"bubbleChart",selector:"chart",title:"Bubble Plot",subtitle:"Sales by month",width:600,height:500,metric:["total","forecast","yoy"],data:_,goal:500,legends:{enabled:!0,height:25,width:50}},lineGraphData:{chartType:"lineGraph",selector:"lineGraph",title:"Line Graph",width:200,subtitle:"Sales by month",height:200,goal:500,metric:["total","forecast"],dim:"month",data:_,legends:{enabled:!0,height:25,width:50},overrides:{palette:{fill:["#34495E","#4fc08d"],stroke:"#41B883"}}},vBarChartData:{chartType:"barChart",selector:"vChart",title:"Bar Chart",subtitle:"Sales by month",width:300,height:300,metric:["total","forecast"],dim:"month",data:_,legends:{enabled:!0,height:25,width:50},overrides:{}},pieChartData:{chartType:"pieChart",selector:"pieChart",title:"Pie Chart",subtitle:"Sales by month",width:300,height:200,metric:"total",dim:"month",data:_}}}},L={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-6 col-md-4"},[t._l(t.sales,function(a,i){return e("div",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sales[i].total,expression:"sales[index].total",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.sales[i].total},on:{input:function(a){a.target.composing||t.$set(t.sales[i],"total",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}}),t._v(" "),e("button",{attrs:{type:"submit"},on:{click:function(a){t.removeItem(i,a)}},model:{value:t.sales[i],callback:function(a){t.$set(t.sales,i,a)},expression:"sales[index]"}},[t._v(" [-] ")])])}),t._v(" "),e("button",{on:{click:t.newItem}},[t._v(" [+] ")])],2),t._v(" "),e("div",{staticClass:"col-6 col-md-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("v-chart",{attrs:{chartData:t.bubbleChartData}})],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("v-chart",{attrs:{chartData:t.areaChartData}})],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("v-chart",{attrs:{chartData:t.lineGraphData}})],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("v-chart",{attrs:{chartData:t.vBarChartData}})],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-6"},[e("v-chart",{attrs:{chartData:t.pieChartData}})],1)])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("img",{staticClass:"logo",attrs:{src:e("dLd/")}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"https://github.com/ignoreintuition/v-chart-plugin"}},[a("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",alt:"Fork me on GitHub"}})])}]};var P={name:"App",components:{chartExample:e("VU/8")(F,L,!1,function(t){e("ZPJS")},null,null).exports}},M={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("chartExample")],1)},staticRenderFns:[]};var G=e("VU/8")(P,M,!1,function(t){e("Gf/I")},null,null).exports;i.a.config.productionTip=!1,i.a.use(A),new i.a({el:"#app",components:{App:G},template:"<App/>"})},ZPJS:function(t,a){},"dLd/":function(t,a,e){t.exports=e.p+"static/img/logo.7eeeac5.png"}},["NHnr"]);
//# sourceMappingURL=app.2a515c02f246ccee676f.js.map