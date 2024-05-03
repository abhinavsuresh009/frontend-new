import React, { useContext, useEffect, useState } from 'react';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import { AppContext } from '../../context/appContext';
function UserList(props) {
    let { baseurl } = useContext(AppContext)
    const [data,setData]=useState([])
    const column = ['USERNAME','PHONE', 'EMAIL', 'BRANCH CODE', 'COMPANY CODE']
    const datakey = ['username','phone', 'email', 'brcode', 'comcode']
    useEffect(()=>{
        fetch(`${ baseurl }/user/create-user/`).then(response=>response.json()).then((data)=>{console.log(data);setData(data.data)})
    },[])
    return (
        <div>
            <DashBoard />
            <Title title="User List"/>

            <Table TABLE_ROWS={data} datakey={datakey} HEAD={column}/>
    
        </div>
    );
}

export default UserList;
