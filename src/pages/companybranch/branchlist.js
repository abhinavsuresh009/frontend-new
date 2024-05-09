import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import Pagination from '../../components/Pagination';
import { AppContext } from '../../context/appContext';

function BranchList() {
  const [brName, setBranchName] = useState('');
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  let { baseurl, comcode } = useContext(AppContext)
  const column = ['BRANCH NAME','BRANCH CODE','ADDRESS', 'PHONE', 'EMAIL', 'COMPANY CODE']
  const datakey = ['brname','brcode', 'address', 'phone', 'email', 'company']

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseurl}/companybranch/branch/${comcode}/`, {
        params: {
          brname: brName,
          page: currentPage
        }
      });
      setBranches(response.data.results.data);
      setTotalItems(response.data.count);
      setError('');
    } catch (error) {
      setError(error.response.data.error);
      setBranches([]);
    }
    setLoading(false);
  };
  const handleSetActivePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    handleSearch();
  }, [brName, currentPage]);

  // const handleReset = () => {
 
  //   setBranchName('');
  // };
  return (
    <div>
      <DashBoard />
      <Title title="Branches" />
      <div className=" flex w-11/12 ml-auto mr-auto mt-5 text-left flex-wrap gap-x-4">
        <div className="flex items-center">
          <label className="mr-2">Branch Name:</label>
          <input type="text" value={brName} onChange={(e) => setBranchName(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        {/* <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Reset</button> */}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Table TABLE_ROWS={branches} datakey={datakey} HEAD={column} />      
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        activePage={currentPage}
        setActivePage={handleSetActivePage}
      />
    </div>
  );
}

export default BranchList;


