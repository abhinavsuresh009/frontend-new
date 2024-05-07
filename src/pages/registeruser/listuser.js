import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import Pagination from '../../components/Pagination';
import { AppContext } from '../../context/appContext';

function UserList() {
  const [brcode, setBrcode] = useState('');
  const [comcode, setComcode] = useState('');
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  let { baseurl } = useContext(AppContext)
  const column = ['USERNAME','PHONE', 'EMAIL', 'BRANCH CODE', 'COMPANY CODE']
  const datakey = ['username','phone', 'email', 'brcode', 'comcode']

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseurl}/user/create-user/?page=`, {
        params: {
          comcode: comcode,
          brcode: brcode,
          user_name: userName,
          page: currentPage
        }
      });
      setUsers(response.data.results.data);
      setTotalItems(response.data.count);
      setError('');
    } catch (error) {
      setError(error.response.data.error);
      setUsers([]);
    }
    setLoading(false);
  };

  const handleSetActivePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    handleSearch();
  }, [brcode, comcode, userName, currentPage]);

  const handleReset = () => {
    setBrcode('');
    setComcode('')
    setUserName('');
  };
  return (
    <div>
      <DashBoard />
      <Title title="Users" />
      <div className=" flex w-11/12 ml-auto mr-auto mt-5 text-left flex-wrap gap-x-4">
        <div className="flex items-center">
          <label className="mr-2">Company Code:</label>
          <input type="text" value={comcode} onChange={(e) => setComcode(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Branch Code:</label>
          <input type="text" value={brcode} onChange={(e) => setBrcode(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div className="flex items-center">
          <label className="mr-2">User Name:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Reset</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Table TABLE_ROWS={users} datakey={datakey} HEAD={column} />      
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        activePage={currentPage}
        setActivePage={handleSetActivePage}
      />
    </div>
  );
}

export default UserList;

