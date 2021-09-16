import React, {Component} from 'react'
var moment = require('jalali-moment');

export default function FormPageProductsRow(props){


let p = props.productss

var dateFrom = moment.from(props.datefrom, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
var dateTo = moment.from(props.dateTo, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
var dateCheck = moment.from(p.date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');

var d1 = dateFrom.split("/");
var d2 = dateTo.split("/");
var c = dateCheck.split("/");

var from = new Date(d1[0], parseInt(d1[1])-1, d1[2]);  // -1 because months are from 0 to 11
var to   = new Date(d2[0], parseInt(d2[1])-1, d2[2]);
var check = new Date(c[0], parseInt(c[1])-1, c[2]);

console.log(check > from && check < to)

return(
  check > from && check < to && (props.selname == "" || props.selname.includes(p.name) ) && (props.selprovince == "" || props.selprovince.includes(p.province)) && (props.selcity == "" || props.selcity.includes(p.city))  ?
    <tr>
      <th scope="row">{p.id}</th>
      <td>{p.name}</td>
      <td>{p.province}</td>
      <td>{p.city}</td>
      <td>{p.price}</td>
      <td>{p.date}</td>
      <td><a className="text-danger" onClick={()=>props.deleteItem(p)}><i className="fa fa-trash"></i></a></td>
      <td><a className="text-secondary" onClick={()=>props.editItemClick(p)}><i className="fa fa-edit"></i></a></td>
    </tr>
: ""
)





}