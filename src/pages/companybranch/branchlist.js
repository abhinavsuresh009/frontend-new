import React, { useContext, useEffect, useState } from 'react';
import DashBoard from '../../components/DashBoard';
import { Title } from '../../titles/titles';
import { Table } from '../../components/table/Table';
import { AppContext } from '../../context/appContext';
import Pagination from '../../components/Pagination';
function BranchList(props) {
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0); // Track total number of items
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const column = ['BRANCH NAME','BRANCH CODE','ADDRESS', 'PHONE', 'EMAIL', 'COMPANY CODE']
    const datakey = ['brname','brcode', 'address', 'phone', 'email', 'company']
    const itemsPerPage = 2; // Define the number of items per page
    let { baseurl } = useContext(AppContext)

    useEffect(() => {
      // Fetch data for the current page when component mounts or currentPage changes
      fetchBranch(currentPage); 
    }, [baseurl, currentPage]);
  
    const fetchBranch = async (page) => {
      try {
        const response = await fetch(`${baseurl}/companybranch/branch/www/?page=${page}`);
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
        <Title title="Branch List" />
        <Table TABLE_ROWS={data} datakey={datakey} HEAD={column} />
  
        <Pagination
          totalItems={totalItems} // Pass the dynamically calculated total number of items
          itemsPerPage={itemsPerPage} // Pass the number of items per page
          activePage={currentPage} // Pass the current active page
          setActivePage={handleSetActivePage} // Pass the function to set active page
        />
      </div>
    );
  }

export default BranchList;
