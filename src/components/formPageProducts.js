import React,{Component} from 'react'
import $ from 'jquery';
import FormPageProductsRow from './formPageProductsRow'
import '@progress/kendo-theme-default/dist/all.css';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import  { RangeDatePicker } from "jalali-react-datepicker";
import {EditPage} from './editPage'
var moment = require('jalali-moment');
const itemRender = (li, itemProps) => {
  const index = itemProps.index;
  const itemChildren = <span style={{
    color: "#032f"
  }}>{li.props.children} {index}</span>;
  return React.cloneElement(li, li.props, itemChildren);
};


var dateto = new Date();

export default class FormPageProducts extends Component{
  componentDidMount() {
    $('input').addClass('form-control');  
    dateto = new Date();
  }

constructor(props){
super(props)
this.state={
  selname : "",
  selprovince : "",
  selcity : "",
  cityarr :[],
  province:[{name:'اصفهان',city:['زرین شهر','گلشن','کاشان','خوانسار','بهارستان','دستگرد']},{name:'تهران',city:['پیشوا','ری','تهران','ورامین','قرچک','فشم']},{name:'یزد',city:['یزد','اردکان','بافق','میبد','هرات','تفت']}],
  allcities:['زرین شهر','گلشن','کاشان','خوانسار','بهارستان','دستگرد','پیشوا','ری','تهران','ورامین','قرچک','فشم','یزد','اردکان','بافق','میبد','هرات','تفت'],
  datefrom:moment(new Date(dateto.getFullYear()-1,dateto.getMonth(),dateto.getDay())).locale('fa').format('YYYY/MM/DD'),
  dateTo:moment(new Date()).locale('fa').format('YYYY/MM/DD') ,
  edititem:false,
  productitem:[]

}
this.datepickerfun = this.datepickerfun.bind(this)
this.editItemClick = this.editItemClick.bind(this)
}
 
editItemClick(product){
  this.setState({
    edititem:true,
    productitem:product
  })

}

formItemClick(){
  this.setState({
    edititem:false
  })

}

datepickerfun({ start, end }) {
this.setState({
  datefrom:moment(start).locale('fa').format('YYYY/MM/DD'),
  dateto:moment(end).locale('fa').format('YYYY/MM/DD')
})
}
getcities(){

  this.state.cityarr.length = 0
  this.state.selprovince.map(prvns=>    
    this.state.cityarr.push((this.state.province.find(prov => prvns == prov.name).city))
    )
    return this.state.cityarr.toString().split(',')

  }

nameChange=(event)=>{
this.setState({
  selname : event.target.value
})
}

provinceChange=(event)=>{
  
  this.setState({
    selprovince : event.target.value
  })

  }


  cityChange=(event)=>{
    this.setState({
      selcity : event.target.value
    })
    }



render(){




if(!this.state.edititem){
return(
    <div>
    <div className="col-md-12"  style={{textAlign:'right',fontSize: '20px',margin:'7px',borderBottom:'2px solid',padding:'5px',width:'fit-content'}}>اطلاعات افراد</div>
    <div className="col-md-12 searchform">



    <div class="text-right m-2 clearfix"><div class="float-right">جستجو :</div><div class="float-left"><button class="btn btn-success">جدید</button></div></div>
    <div className="col-md-3 col-xs-6 d-inline-block p-1">
    <div  className="d-block slabel">نام :</div>
    <div className="d-inline-block">
    <MultiSelect data={this.props.products.map(product=>`${product.name}`)} onChange={this.nameChange} value={this.state.selname} itemRender={itemRender} />
    </div>
    </div>
    <div className="col-md-3 col-xs-6 d-inline-block  p-1">
    <div className="d-block slabel">استان :</div>

    <div className="d-inline-block">
    <MultiSelect data={this.props.products.map(product=>`${product.province}`)} onChange={this.provinceChange} value={this.state.selprovince} itemRender={itemRender} />
    </div> 
    </div>

    <div className="col-md-3 col-xs-6 d-inline-block  p-1">
    <div className="d-block slabel">شهر :</div>

    <div className="d-inline-block">
    <MultiSelect data={this.state.selprovince == '' ? this.state.allcities.sort()  : this.getcities() } onChange={this.cityChange} value={this.state.selcity} itemRender={itemRender} />
    </div> 
    </div>
    <div className="col-md-3 col-xs-3 d-inline-block p-1 date-pick">
    <div className="d-inline-block slabel">تاریخ :</div>
    <RangeDatePicker fromLabel="از" toLabel="تا" onClickSubmitButton={this.datepickerfun} start={this.state.datefrom} end={this.state.dateTo}/>
    </div>

        </div>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ردیف</th>
      <th scope="col">نام</th>
      <th scope="col">استان</th>
      <th scope="col">شهر</th>
      <th scope="col">کد ملی</th>
      <th scope="col">تاریخ</th>
      <th scope="col">حذف</th>
      <th scope="col">ویرایش</th>
    </tr>
  </thead>
  <tbody>
{this.props.products.map(product => <FormPageProductsRow deleteItem={this.props.deleteItem} datefrom={this.state.datefrom} dateTo={this.state.dateTo} productss={product} editItemClick={this.editItemClick} key={product.id} selname={this.state.selname} selcity={this.state.selcity} selprovince={this.state.selprovince}/>)}
  </tbody>
</table>
</div>
)
}else{
  return(
<EditPage changeName={this.props.changeName} changeDate={this.props.changeDate} productitem={this.state.productitem} key={ this.state.productitem.id || -1 } formItemClick={this.formItemClick}/>
  )
}
}
}