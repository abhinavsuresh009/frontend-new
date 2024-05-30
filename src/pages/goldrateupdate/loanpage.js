import React from 'react';
import { Title } from '../../titles/titles';
import PdfButton from '../../components/PdfButton';

function LoanPage() {
    return (
        <div className="w-11/12 mr-auto ml-auto">
            <PdfButton filename="loan-application.pdf">
                <div style={{ padding: '20px', backgroundColor: 'white', width: '100%' }}>
                    <Title title='GoldLoan Sanction' />
                    <p>To</p>
                    <h3 className='ml-5 font-bold text-sm'>KAMAKSHI,</h3>
                    <p className='text-sm'>A Loan of Rs 44,100.00 is Sanctioned to you against pledge of gold ornaments on following terms</p>
                    <div className='flex justify-center'>
                        <div className='flex justify-center w-10/12 mt-10'>
                            <table className="text-sm bg-white w-full text-center">
                                <tbody>
                                    <tr className="">
                                        <td className="border px-4 py-2">Gold Loan No.</td>
                                        <td className="border px-4 py-2">LN123456789</td>
                                        <td className="border px-4 py-2" rowSpan="3">
                                            <div className="h-full flex flex-col justify-center">
                                                <div>Rate of interest</div>
                                                <div>Compounded monthly</div>
                                                <div>Up to 30 days - 18%</div>
                                                <div>31D to 60D - 20%</div>
                                                <div>61D to 90D - 21%</div>
                                                <div>91D to 365D - 22%</div>
                                                <div>Penalty Charges: Max 3% (Applicable beyond 365 days)</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className="border px-4 py-2 font-medium">Date of Pledge</td>
                                        <td className="border px-4 py-2">16-May-2024</td>
                                    </tr>
                                    <tr className="">
                                        <td className="border px-4 py-2 font-medium">Period</td>
                                        <td className="border px-4 py-2">365 Days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className='text-center mt-5 mb-5'>Processing fees: 0.10% with Maximum Rs 200</p>
                    <h1 className='text-center font-bold text-xl mb-5'>Details of ornaments</h1>
                    <div className="w-full">
                        <table className="text-sm w-full min-w-max text-left text-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-2 sm:px-4 py-2">SL.No</th>
                                    <th className="border px-2 sm:px-4 py-2">Description</th>
                                    <th className="border px-2 sm:px-4 py-2">Status</th>
                                    <th className="border px-2 sm:px-4 py-2">Count</th>
                                    <th className="border px-2 sm:px-4 py-2">Gross Weight in Grams</th>
                                    <th className="border px-2 sm:px-4 py-2">Net Weight in Grams</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-2 sm:px-4 py-2">1</td>
                                    <td className="border px-2 sm:px-4 py-2">Quality product</td>
                                    <td className="border px-2 sm:px-4 py-2"></td>
                                    <td className="border px-2 sm:px-4 py-2">2</td>
                                    <td className="border px-2 sm:px-4 py-2">6.300</td>
                                    <td className="border px-2 sm:px-4 py-2">5.700</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 sm:px-4 py-2">2</td>
                                    <td className="border px-2 sm:px-4 py-2">Quality product</td>
                                    <td className="border px-2 sm:px-4 py-2"></td>
                                    <td className="border px-2 sm:px-4 py-2">2</td>
                                    <td className="border px-2 sm:px-4 py-2">6.300</td>
                                    <td className="border px-2 sm:px-4 py-2">5.700</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 sm:px-4 py-2">2</td>
                                    <td className="border px-2 sm:px-4 py-2">Quality product</td>
                                    <td className="border px-2 sm:px-4 py-2"></td>
                                    <td className="border px-2 sm:px-4 py-2">2</td>
                                    <td className="border px-2 sm:px-4 py-2">6.300</td>
                                    <td className="border px-2 sm:px-4 py-2">5.700</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </PdfButton>
        </div>
    );
}

export default LoanPage;
