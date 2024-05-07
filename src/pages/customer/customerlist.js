import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import Pagination from '../../components/Pagination';
import { AppContext } from '../../context/appContext';

function CustomerList() {
  const [brcode, setBrcode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  let { baseurl } = useContext(AppContext)
  const { comcode } = useContext(AppContext)

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseurl}/customer/filter-comcode/${comcode}/`, {
        params: {
          brcode: brcode,
          customer_name: customerName,
          start_date: startDate,
          end_date: endDate,
          page: currentPage
        }
      });
      setCustomers(response.data.results.data);
      setTotalItems(response.data.count);
      setError('');
    } catch (error) {
      setError(error.response.data.error);
      setCustomers([]);
    }
    setLoading(false);
  };

  const handleSetActivePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    handleSearch();
  }, [brcode, customerName, startDate, endDate, currentPage]);

  const getCurrentDate = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    return currentDate;
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // Automatically set end date to start date if it's before the selected start date
    if (endDate < e.target.value) {
      setEndDate(e.target.value);
    }
  };

  // Function to handle change in end date
  const handleEndDateChange = (e) => {
    // Only update end date if it's after the selected start date
    if (e.target.value >= startDate) {
      setEndDate(e.target.value);
    }
  };
  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setBrcode('');
    setCustomerName('');
  };
  return (
    <div>
      <DashBoard />
      <Title title="Customers" />
      <div className=" flex w-11/12 ml-auto mr-auto mt-5 text-left flex-wrap gap-x-4">
        <div className="flex items-center">
          <label className="mr-2">Branch Code:</label>
          <input type="text" value={brcode} onChange={(e) => setBrcode(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Customer Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="border rounded px-2 py-1" />
        </div>
        <div className="flex items-center ml-auto">
          <label className="mr-2">Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} max={getCurrentDate()} className="border rounded px-2 py-1" />
        </div>
        <div className="flex items-center">
          <label className="mr-2">End Date:</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} max={getCurrentDate()} min={startDate} className="border rounded px-2 py-1" />
        </div>
        <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Reset</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Table
        TABLE_ROWS={customers}
        HEAD={['CUSTOMER ID', 'FIRST NAME', 'ADDRESS', 'ADDRESS2', 'EMAIL', 'COMPANY CODE', 'TRDATE', 'Branch Code']}
        datakey={['cusid', 'fname', 'address1', 'address2', 'email', 'comcode', 'trdate', 'brcode']}
      />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        activePage={currentPage}
        setActivePage={handleSetActivePage}
      />
    </div>
  );
}

export default CustomerList;
