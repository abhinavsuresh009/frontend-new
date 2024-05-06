import React, { useContext, useEffect, useState } from 'react';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import { AppContext } from '../../context/appContext';
import Pagination from '../../components/Pagination';

function CustomerList(props) {
  const { baseurl } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Track total number of items
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const column = ['CUSTOMER ID','FIRST NAME','ADDRESS', 'ADDRESS2', 'EMAIL', 'COMPANY CODE'];
  const datakey = ['cusid','fname', 'address1', 'address2', 'email', 'comcode'];
  const itemsPerPage = 2; // Define the number of items per page

  useEffect(() => {
    // Fetch data for the current page when component mounts or currentPage changes
    fetchCustomers(currentPage); 
  }, [baseurl, currentPage]);

  const fetchCustomers = async (page) => {
    try {
      const response = await fetch(`${baseurl}/customer/filter-comcode/www/?page=${page}`);
      const jsonData = await response.json();
      setData(jsonData.results.data);
      setTotalItems(jsonData.count); // Update totalItems based on the total number of items received
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSetActivePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <DashBoard />
      <Title title="Customer List" />
      <Table TABLE_ROWS={data} datakey={datakey} HEAD={column} />

      {/* Pagination controls */}
      <Pagination
        totalItems={totalItems} // Pass the dynamically calculated total number of items
        itemsPerPage={itemsPerPage} // Pass the number of items per page
        activePage={currentPage} // Pass the current active page
        setActivePage={handleSetActivePage} // Pass the function to set active page
      />
    </div>
  );
}

export default CustomerList;
