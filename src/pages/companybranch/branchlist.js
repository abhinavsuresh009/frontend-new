import React, { useContext, useEffect, useState } from 'react';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import { AppContext } from '../../context/appContext';
function BranchList(props) {
    
  let { baseurl } = useContext(AppContext)
    const [data,setData]=useState([])
    const column = ['BRANCH NAME','BRANCH CODE','ADDRESS', 'PHONE', 'EMAIL', 'COMPANY CODE']
    const datakey = ['brname','brcode', 'address', 'phone', 'email', 'company']
    useEffect(()=>{
        fetch(`${ baseurl }/companybranch/branch/www/`).then(response=>response.json()).then((data)=>{console.log(data);setData(data.data)})
    },[])
    return (
        <div>
            <DashBoard />
            <Title title="Branch List"/>
            <Table TABLE_ROWS={data} datakey={datakey} HEAD={column}/>
        </div>
    );
}

export default BranchList;
