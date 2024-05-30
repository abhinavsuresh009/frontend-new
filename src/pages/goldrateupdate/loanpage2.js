import React from 'react';
import { Title } from '../../titles/titles';
import PdfButton from '../../components/PdfButton';

function LoanPageTwo() {
    return (
        <div className="w-full mr-auto ml-auto ">
            <PdfButton filename="loan-application.pdf">
                <div className="p-2 bg-white">
                    <h1 className="text-2xl font-bold text-center mb-10">TERMS & CONDITIONS</h1>
                    <ol className="text-sm text-justify">
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>1. </span>
                            If full repayment is not made within 12 months from the date hereof or within such period as demanded by the company, Penal Charges up to 3% p.a from the date of overdue above the applicable interest rate will be levied and the company shall have the right to sell the ornaments at the risk of the borrower either by public auction or by private arrangement at any time after 2 weeks from the date of notice of sale, to the borrower and adjust from the net proceeds of such sale, all amounts due to the company in respect of the loan. If there is any surplus on such sale the company shall have the right to and shall appropriate such surplus towards any other liability by the borrower by himself or jointly with others on any account whatsoever to the company in any of its office.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>2. </span>
                            The company has the right to retain the security offered to this loan against any other liabilities due to the company as borrower or guarantor whether such liability has been demanded or not.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>3. </span>
                            The company has the right to assign or transfer the rights under the agreement and all other documents executed by the borrower in favor of the company and to obtain necessary advances from the Banks/Financial Institutions at any time. The address for all communication shall be the one furnished in the application form if not intimated to the company regarding any subsequent change of address in writing and under acknowledgment from the company.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>4. </span>
                            The jewellery pledged is the absolute property of the borrower, no other person is having any right, interest or claim over the same and the borrower has absolute right to pledge them. In the event of any defect in the title to the jewellery, the borrower shall indemnify the company of all harm, costs and consequences.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-start"> {/* Wrapper for list item */}
                                <span className='font-bold'>5. </span>The company is authorized to take loan or advance against repledge or otherwise of the jewellery pledged herein.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>6. </span>
                            Notwithstanding anything contained in Para-1 above regarding the tenure of the Loan, the Company reserves the right to sell the ornaments either by the public auction or by private arrangement at any point of time or in the immediate future, even before the expiry of 12 months if the company is convinced that the market price maximum realizable amount by sale of items has come down below or equal to the total receivable amount from the borrower by way of principal, interest and other charges due thereon, after serving a registered notice to the borrower.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>7. </span>
                            The borrower shall bear, pay and reimburse all charges relating to administration charges, including stamp duty and GST (of any description as may be levied from time to time by Government or other authority) and all other costs and expenses whatsoever in connection with (a) application for and the grant and repayment of loan (b) recovery and realization of the loan together with interests (c) enforcement of security: (d) clearance of arrears of all taxes and any other charges and levies of the Government in respect of Security and insuring the Security.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>8. </span>
                            In the event of loss of pledged ornaments, the liability of the company is limited to replacing the lost ornament with equal net weight disclosed in the pawn ticket.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>9. </span>
                            Broken/damaged/defective jewellery /ornaments are not accepted as security for the loan unless the borrower makes a specific request to accept the same duly authenticating the damage/defect. In all such cases the company doesn’t own any responsibility.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>10. </span>
                            There is always a possibility of marginal weight loss (0 to 500mgs) due to storage/humidity etc which shall not be disputed by the borrower (Pawner).
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>11. </span>
                            Holder of this loan slip is presumed to be the person entitled to redeem the pledge. Borrower should bring this loan slip invariably at the time of releasing the jewellery/ornaments.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>12. </span>
                            Minimum 15 days interest will be charged on the loan even if it be repaid within the said period, besides rental and insurance fee at such other rates the company may fix from time to time.
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between"> {/* Wrapper for list item */}
                                <span className='font-bold'>13. </span>
                            Notwithstanding anything stated above, the maximum value of the pledged items under the pledge will be as shown in the application form duly signed by me, or the then market value of gold as on the date of any claim whichever is less.
                            </div>
                        </li>
                    </ol>
                    <div className="mt-4">
                        <p className="font-bold">BORROWER</p>
                        <p>Date: Report Title</p>
                        <p>Place: adr2adr4</p>
                    </div>
                </div>
            </PdfButton>
        </div>
    );
}

export default LoanPageTwo;
