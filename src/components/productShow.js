import React, {Component} from 'react'
import FormPageProducts from './formPageProducts'

export default class productShow extends Component{

    render(){
        let p = {products:[
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

    }


return(
<div>

<FormPageProducts products={p.products} />
</div>

)

    }


}