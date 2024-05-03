import React, { useContext, useEffect, useState } from 'react';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import { AppContext } from '../../context/appContext';
function CustomerList(props) {
  let { baseurl } = useContext(AppContext)
    const [data,setData]=useState([])
    const column = ['CUSTOMER ID','FIRST NAME','ADDRESS', 'ADDRESS2', 'EMAIL', 'COMPANY CODE']
    const datakey = ['cusid','fname', 'address1', 'address2', 'email', 'comcode']
    useEffect(()=>{
        fetch(`${ baseurl }/customer/filter-comcode/www/`).then(response=>response.json()).then((data)=>{console.log(data);setData(data.data)})
    },[])
    return (
        <div>
            <DashBoard />
            <Title title="Customer List"/>
            <Table TABLE_ROWS={data} datakey={datakey} HEAD={column}/>
    
        </div>
    );
}

export default CustomerList;
