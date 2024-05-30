import React from 'react';
import PdfButton from '../../components/PdfButton';

function LoanApplication() {
  return (
    <div className="w-11/12 mr-auto ml-auto bg-white">
      <PdfButton filename="loan-application.pdf">
        <div className="flex flex-row space-x-reverse">
          <div>
            <p>From</p>
            <p className="text-xs ml-10">KAMAKSHI<br />#39 RAMANNA GARDEN <br />NEW MISSION ROAD <br />BANGLORE 560027</p>
            <p>To</p>
            <p className="text-xs ml-10">The Manager<br />CHEMM FINANCE LTD. <br />fax: 080-22210559 Banglore</p>
            <p>Dear Sir,</p>
            <p className="ml-10 text-xs">Please grant me a Loan Rs 44,100.00 on the security of 12.3 grams of Gold Ornaments tendered herewith, the details of which are furnished below.</p>
          </div>
          <div className="flex flex-col items-end w-full">
            <p className="justify-end"><span>Date</span>:<span> 16-07-2023</span></p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRmLwDXMW-bIgptLzWFORvh9HavcFxzdRqjZFsy-ldg&s"
              alt="Customer"
              className="w-36 h-36 rounded-md mt-10"
            />
          </div>
        </div>
        <h1 className="text-center font-bold text-sm mt-1 mb-5">Details of ornaments</h1>
        <div className="w-full">
          <table className="text-xs w-full h-32 text-left text-lg">
            <thead>
              <tr className="bg-gray-100 h-5">
                <th className="sm:px-4 py-2">SL.No</th>
                <th className="border px-2 sm:px-4 py-2">Description</th>
                <th className="border px-2 sm:px-4 py-2">Status</th>
                <th className="border px-2 sm:px-4 py-2">Count</th>
                <th className="border px-2 sm:px-4 py-2">Gross Weight<br /> in Grams</th>
                <th className="border px-2 sm:px-4 py-2">Net Weight<br /> in Grams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm border px-2 sm:px-4 py-2">1</td>
                <td className="text-sm border px-2 sm:px-4 py-2">Quality product</td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2">2</td>
                <td className="text-sm border px-2 sm:px-4 py-2">6.300</td>
                <td className="text-sm border px-2 sm:px-4 py-2">5.700</td>
              </tr>
              <tr>
                <td className="text-sm border px-2 sm:px-4 py-2">1</td>
                <td className="text-sm border px-2 sm:px-4 py-2">Quality product</td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2">2</td>
                <td className="text-sm border px-2 sm:px-4 py-2">6.300</td>
                <td className="text-sm border px-2 sm:px-4 py-2">5.700</td>
              </tr>
              <tr>
                <td className="text-sm border px-2 sm:px-4 py-2">1</td>
                <td className="text-sm border px-2 sm:px-4 py-2">Quality product</td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2">2</td>
                <td className="text-sm border px-2 sm:px-4 py-2">6.300</td>
                <td className="text-sm border px-2 sm:px-4 py-2">5.700</td>
              </tr>
              {/* Repeat rows as needed */}
              <tr>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2">Total</td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2"></td>
                <td className="text-sm border px-2 sm:px-4 py-2">5.700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5">Signature</p>
        <span className="text-xs font-bold ">KYC Collected</span>
        <span className="text-xs ml-20 font-bold ">AADHAR Collected</span>
        <table className="border-2 border-gray-500 min-w-full mt-5 bg-white table-fixed">
          <tbody>
            <tr className="h-10">
              <td className="text-xs border-2 border-gray-200 px-4 py-2 w-1/3">
                Certified that the Gross, Net weight of the jewellery, valuation rate quality have been verified by me and are correct
                <div className="text-sm text-center font-bold">Appraiser</div>
              </td>
              <td className="text-xs border-2 border-gray-300 px-4 py-2 w-1/3">
                Gross Net weight, valuation Rate verified Ornaments taken into Custody
                <div className="text-sm text-center mt-3 font-bold">Joint Custodian</div>
              </td>
              <td className="text-xs border-2 border-gray-300 px-4 py-2 w-1/3">
                Loan sanctioned Rs 44100
                <div className="text-sm text-center mt-10 font-bold">Manager</div>
              </td>
            </tr>
            <tr className="w-full">
              <td className="text-xs text-center w-1/2 border-2 border-gray-300 px-4 py-2" colSpan={2}>
                The ornaments specified herein have been returned to the pawner
                <div className="text-xs text-center mt-5 font-bold">Joint Custodian</div>
              </td>
              <td className="text-xs text-center w-1/2 border-2 border-gray-300 px-4 py-2">
                Received the ornaments pledged in tact
                <div className="text-xs text-center mt-5 font-bold mt-10">Signature of Pawner/Authorised Representatives</div>
              </td>
            </tr>
            <tr>
              <td className="text-xs h-20 text-center border-2 border-gray-300 px-4 py-2 w-full" colSpan="2">Particulars of Auction(if any)</td>
              <td className="text-xs h-20 text-center border-2 border-gray-300 px-4 py-2 w-full">
                Amount Rs
                <div className="text-sm text-center mt-3 font-bold text-right mr-10">Signature of officer incharge</div>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 mb-5 text-xs">
          I state that the maximum value of the pledged items under this pledge will be Rs 700000 (Rupees________________________) or the then market value of gold
          as on the date of any claim whichever is less.
        </p>
        <p className="text-xs mt-5 text-right font-bold mr-10 mb-10">Signature of applicant</p>
      </PdfButton>
    </div>
  );
}

export default LoanApplication;
