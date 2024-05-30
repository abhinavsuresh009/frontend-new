import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Title } from '../../titles/titles';
import DashBoard from '../../components/DashBoard';
import { AppContext } from '../../context/appContext';
import ApprovalModal from '../../components/ApprovalModal';
import DaybookTableComponent from '../../components/ApproveTable';

function DaybookTable() {
    const [daybooks, setDaybooks] = useState([]);
    const [selectedDaybookId, setSelectedDaybookId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [approverId, setApproverId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Define the number of rows per page
    const { baseurl } = useContext(AppContext);
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    const approvedtime = `${date} ${time}`;

    useEffect(() => {
        fetchData();
        setApproverId(123);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseurl}/receiptpayment/daybooks/`);
            setDaybooks(response.data.data);
        } catch (error) {
            console.error('Error fetching daybooks:', error);
        }
    };

    const handleApprove = (daybookId) => {
        setSelectedDaybookId(daybookId);
        setShowModal(true);
    };

    const confirmApprove = async () => {
        const approvalData = {
            approvedby: approverId,
            approvedtime: approvedtime,
        };

        try {
            await axios.post(`${baseurl}/receiptpayment/daybooks/approve/${selectedDaybookId}/`, approvalData);
            setDaybooks(daybooks.map(daybook => {
                if (daybook.id === selectedDaybookId) {
                    return { ...daybook, approved: true, approvedby: approverId, approvedtime: approvalData.approvedtime };
                }
                return daybook;
            }));
        } catch (error) {
            console.error('Error approving daybook:', error);
        }
        setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <DashBoard />
            <Title title='Daybook Approve' />
            <DaybookTableComponent
                daybooks={daybooks}
                onApprove={handleApprove}
                TABLE_HEAD={["hcode", "Credit", "Debit", "Type", "Mode", "Narration", "Approved", "Approved By", "Approved Time", "Actions"]}
                datakey={["hcode", "credit", "debit", "type", "mode", "name", "approved", "approvedby", "approvedtime"]}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
            />
            <ApprovalModal
                isVisible={showModal}
                onClose={closeModal}
                onConfirm={confirmApprove}
            />
        </div>
    );
}

export default DaybookTable;