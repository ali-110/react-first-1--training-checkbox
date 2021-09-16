import React from "react";
import { DatePicker } from "jalali-react-datepicker";


export function EditPage(props){

return(

    <div className="text-right editform m-3">
              <div>ویرایش :</div>
      <form className="m-3 p-3">

  <div class="form-group">
    <label for="exampleFormControlTextarea1">نام</label>
    <input class="form-control" id="inputname" defaultValue={props.productitem.name}></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">استان</label>
    <input class="form-control" id="inputprovince" defaultValue={props.productitem.province}></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">شهر</label>
    <input class="form-control" id="inputcity" type="text" defaultValue={props.productitem.city}></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">کد ملی</label>
    <input class="form-control" id="inputnationalcode"  onChange={props.changeName(props.productitem.id)} defaultValue={props.productitem.price}></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">تاریخ</label>
    <DatePicker timePicker={false} onClickSubmitButton={(event)=>props.changeDate(props.productitem,event)} value={props.productitem.date}/>
  </div>
  <div class="form-group submitbutt">
  <button type="submit" class="btn btn-success m-1" >ثبت</button>
  <button type="submit" onClick={props.formItemClick}  class="btn btn-danger m-1" >بازگشت</button>
  </div>
</form>
    </div>

)

}









