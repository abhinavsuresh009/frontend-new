import React from 'react';
import { Title } from '../../titles/titles';
import SimpleTable from '../../components/table/Simpletable';

function GoldLoan() {
    return (
        <div className="w-11/12 mr-auto ml-auto">
            <Title title='GoldLoan Details' />
            <div className="flex flex-col xl:flex-row w-full justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                <div className="order-3 w-full xl:w-5/12 h-72 overflow-scroll">
                    <table className="w-full border-collapse text-lg">
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 ">Loan Account No.</td>
                                <td className="border px-4 py-2">LN123456789</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Loan Amount</td>
                                <td className="border px-4 py-2">$10,000</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">Interest Rate</td>
                                <td className="border px-4 py-2">7%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Loan Tenure</td>
                                <td className="border px-4 py-2">12 months</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">Loan Start Date</td>
                                <td className="border px-4 py-2">01/01/2024</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Loan End Date</td>
                                <td className="border px-4 py-2">01/01/2025</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">Processing Charge</td>
                                <td className="border px-4 py-2">$200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-2 w-full xl:w-5/12 h-72 overflow-scroll">
                    <table className="w-full border-collapse text-lg">
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2 font-medium">Customer Name</td>
                                <td className="border px-4 py-2">Abhinav</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Customer ID</td>
                                <td className="border px-4 py-2">123456</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Mobile Number</td>
                                <td className="border px-4 py-2">+91 8589877125</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Date of Birth</td>
                                <td className="border px-4 py-2">10/08/1899</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Address</td>
                                <td className="border px-4 py-2">Kannur, Kerala</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Email</td>
                                <td className="border px-4 py-2">abhinavsuresh159@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-1 w-full xl:w-2/12 flex justify-center items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRmLwDXMW-bIgptLzWFORvh9HavcFxzdRqjZFsy-ldg&s"
                        alt="Customer"
                        className="w-36 h-36 rounded-md"
                    />
                </div>
            </div>
            <hr className="my-4" />
            <div className='flex flex-col xl:flex-row justify-between space-y-4 xl:space-y-0'>
                <div className="w-full xl:w-5/12">
                    {/* Placeholder for additional content if needed */}
                </div>
                    <SimpleTable />
            </div>
            <hr className="my-4" />
            <div className="h-72 w-full overflow-scroll ">
                <table className="w-full min-w-max table-auto text-left text-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">hcode</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Tr Date</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Debit</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">123</td>
                            <td className="px-6 py-4 whitespace-nowrap">02/12/23</td>
                            <td className="px-6 py-4 whitespace-nowrap">123432</td>
                            <td className="px-6 py-4 whitespace-nowrap">100000</td>
                            <td className="px-6 py-4 whitespace-nowrap">8000</td>
                            <td className="px-6 py-4 whitespace-nowrap">Loan</td>
                            <td className="px-6 py-4 whitespace-nowrap">Easy</td>
                            <td className="px-6 py-4 whitespace-nowrap">card</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">123</td>
                            <td className="px-6 py-4 whitespace-nowrap">02/12/23</td>
                            <td className="px-6 py-4 whitespace-nowrap">123432</td>
                            <td className="px-6 py-4 whitespace-nowrap">100000</td>
                            <td className="px-6 py-4 whitespace-nowrap">8000</td>
                            <td className="px-6 py-4 whitespace-nowrap">Loan</td>
                            <td className="px-6 py-4 whitespace-nowrap">Easy</td>
                            <td className="px-6 py-4 whitespace-nowrap">card</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">123</td>
                            <td className="px-6 py-4 whitespace-nowrap">02/12/23</td>
                            <td className="px-6 py-4 whitespace-nowrap">123432</td>
                            <td className="px-6 py-4 whitespace-nowrap">100000</td>
                            <td className="px-6 py-4 whitespace-nowrap">8000</td>
                            <td className="px-6 py-4 whitespace-nowrap">Loan</td>
                            <td className="px-6 py-4 whitespace-nowrap">Easy</td>
                            <td className="px-6 py-4 whitespace-nowrap">card</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GoldLoan;


