import React, { useState } from 'react'
import FormPageProducts from './formPageProducts'
var moment = require('jalali-moment');


function changeName(id){

}




export function ProductShow (){


function changeDate(product,value){

    setProCh(productsStore.find(i=>i.id == product.id?i.date=moment(value.value).locale('fa').format('YYYY/MM/DD'):''));


}

function deleteItem(product){
    setProCh(productsStore.filter(i=>i.id !== product.id));
  }

    const [productsStore, setProCh] = useState([
        {
            id:1,
            name:'علی',
            province:'اصفهان',
            city:'کاشان',
            price:122,
            date:'1400/05/12'
        },{
            id:2,
            name:'احمد',
            province:'تهران',
            city:'شهریار',
            price:50,
            date:'1400/02/7'
        },{
            id:3,
            name:'رضا',
            province:'یزد',
            city:'بافق',
            price:74,
            date:'1400/10/02'
        }
    ]

    
);


return(
<div>
<FormPageProducts products={productsStore} changeDate={(d,p)=>changeDate(d,p)} changeName={changeName} deleteItem={(d)=>deleteItem(d)}/>
</div>

)




}