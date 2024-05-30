import React from 'react';
import { Title } from '../../titles/titles';
import PdfButton from '../../components/PdfButton';

function LoanApplicationTwo() {
    return (
        <div>
           <PdfButton filename="loan-application.pdf">
            <div className="w-11/12 mr-auto ml-auto ">
                <p className='text-right font-bold text-sm'><span> Place: </span><span> fax:1232144</span></p>
                <p className='text-right font-bold text-sm'><span> Date: </span><span> 16-may-2024</span></p>
                <p className='font-bold text-sm'>cfl4345</p>
                <p className=' font-bold text-sm'>Rs.</p>
                <p className='text-sm mt-3'>ON DEMAND I promise to pay M/s. Chemm Finance Ltd or order at Banglore the sum of Rs 22100.00 with interest at the date of 22% per annum(MAX)
                    or at such revised rates as the company may fix From time to time from the date hereof until payment in full, for value received.
                </p>
                <table className="text-sm min-w-full bg-white table-fixed  mb-10 mt-10">
                    <tr className=" h-20">
                        <td className="text-sm px-4 py-2 w-1/3">
                            Name
                        </td>
                        <td className="text-sm px-4 py-2 w-1/3">
                            KAMAKSHI<br />
                            #39 RAMANA GARDEN<br />
                            NEW MISSION ROAD<br />
                            BANGOLRE 560027
                        </td>
                        <td className="text-center border-2 border-gray-800 px-4 py-2 w-1/3 h-40 text-xl font-bold">
                            Stamb
                        </td>
                    </tr>
                </table>
                <p className='text-sm'>W/o VENKATESH</p>
                <p className='text-sm'><span>Lan phone : 8589874589</span><span className='ml-72'>Mobile : 8589877125</span></p>
                <hr className='mt-40 border-3 border-gray-800 mb-10' />
                <h1 className='font-bold text-center'>CONSIDERATION RECEIPT</h1>
                <p className='text-sm text-right font-bold mt-10'><span> place: </span><span> fax:1232144</span></p>
                <p className='text-sm text-right font-bold'><span> Date: </span><span> 16-may-2024</span></p>
                <p className='text-sm font-bold'>cfl4345</p>
                <p className='text-sm font-bold'>Rs. 44100.00</p>
                <p className='text-sm'>I/We KAMAKSHI Acknowledge receipt of the dull consideration of 44,100.00 being the proceeds of the On Demand Pronotr executed
                    bt me/us this day in favor of CHEMM FINANCE LTD. fax: 080-22210559
                </p>
                <div className='flex justify-between'>
                    <p className='text-sm font-bold mt-20 mb-20 '>WITNESS</p>
                    <p className='text-sm font-bold mt-20 mb-20'>SIGNATURE</p>
                </div>
            </div>
            </PdfButton>
        </div>
    );
}

export default LoanApplicationTwo;
