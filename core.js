/* 库存与补货试算台: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const window=num(d.window,'统计天数',1),safety=num(d.safety),rows=tableRows(d).map(r=>{const stock=num(r.stock),sales=num(r.sales),lead=num(r.lead),incoming=num(r.incoming),avg=sales/window,target=avg*(lead+safety),buy=Math.max(0,Math.ceil(target-stock-incoming));return [required(r.sku,'SKU'),stock,sales,avg.toFixed(2),avg?(stock/avg).toFixed(1):'无销量',lead,incoming,Math.ceil(target),buy,avg&&stock/avg<lead?'现货可能在到货前耗尽':'按当前均值估算'];});return {metrics:[metric('商品数量',rows.length),metric('建议补货合计',rows.reduce((s,r)=>s+r[8],0))],columns:['SKU','现货','期间销量','日均销量','现货可用天数','采购周期','周期内到货','目标库存','补货参考','提示'],rows,sections:[note('计算公式','补货参考=max(0, 向上取整(日均销量×(采购周期＋安全天数)−现货−周期内到货))。') ]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
