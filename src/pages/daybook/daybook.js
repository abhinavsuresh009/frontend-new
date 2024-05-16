import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DaybookTable() {
    const [daybooks, setDaybooks] = useState([]);
    const [selectedDaybookId, setSelectedDaybookId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [approverId, setApproverId] = useState(''); 
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // Get the date part
    const time = now.toTimeString().split(' ')[0]; // Get the time part up to seconds
    const approvedtime = `${date} ${time}`;


    useEffect(() => {
        fetchData();
        setApproverId(123);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://10.54.1.62:8000/receiptpayment/daybooks/');
            setDaybooks(response.data);
        } catch (error) {
            console.error('Error fetching daybooks:', error);
        }
    };

    const handleApprove = async (daybookId) => {
        setSelectedDaybookId(daybookId);
        setShowModal(true);
    };

    const confirmApprove = async () => {
        const approvalData = {
            approvedby: approverId, 
            approvedtime: approvedtime
        };

        try {
            await axios.post(`http://10.54.1.62:8000/receiptpayment/daybooks/approve/${selectedDaybookId}/`, approvalData);
            // Update the approved status in the UI
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

    return (
        <div className="container mx-auto">
            <h1 className="text-xl font-bold mb-4">Daybook List</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">hcode</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Head Code</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party Name</th>
                        {/* Add more headers here */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved By</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved Time</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {daybooks.map(daybook => (
                        <tr key={daybook.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.hcode}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.tr_head}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.name}</td>
                            {/* Add more data cells here */}
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.approved ? 'Yes' : 'No'}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.approvedby}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{daybook.approvedtime}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {!daybook.approved && (
                                    <>
                                        <button onClick={() => handleApprove(daybook.id)} className="text-indigo-600 hover:text-indigo-900">Approve</button>
                                        {showModal && selectedDaybookId === daybook.id && (
                                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                                    </div>

                                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                            <div className="sm:flex sm:items-start">
                                                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                                        Are you sure you want to approve?
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                            <button onClick={confirmApprove} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                                Yes
                                                            </button>
                                                            <button onClick={closeModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DaybookTable;


