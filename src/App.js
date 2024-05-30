import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Customer from './pages/customer/customer';
import RegisterUser from './pages/registeruser/registeruser';
import PasswordReset from './pages/passwordrest/passwordreset';
import Login from './pages/login/login';
import Payment from './pages/payment/payment';
import Company from './pages/companybranch/company';
import Branch from './pages/companybranch/branch';
import GoldRate from './pages/goldrateupdate/goldrate';
import BranchList from './pages/companybranch/branchlist';
import DayBook from './pages/daybook/daybook';
import CustomerList from './pages/customer/customerlist';
import UserList from './pages/registeruser/listuser';
import CameraCapture from './pages/customer/cameraphoto';
import CompanyDetails from './pages/companybranch/companydetailsform';
import BankEntry from './pages/bankentry/bankentry';
import RegisterCountry from './pages/country/countrycode';
import Payments from './pages/payment/payment';
import GoldLoan from './pages/goldrateupdate/goldloan';
import LoanPage from './pages/goldrateupdate/loanpage';
import LoanApplication from './pages/goldrateupdate/loanapplication';
import LoanApplicationTwo from './pages/goldrateupdate/loanapplication2';
import SelectTerms from './pages/goldrateupdate/termsandconditions';
import VoucherHead from './pages/receiptpayment/voucherhead';
import DashApp from './pages/dashboard/Daigram';
import Receipts from './pages/receiptpayment/receipt';

function App() {  
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/' 
          element={<Login />} exact/>
          <Route path='customer' 
          element={<Customer />} exact/>
          <Route path='register' 
          element={<RegisterUser />} />
          <Route path='reset-password' 
          element={<PasswordReset />} />
          <Route path='payment' 
          element={<Payment />} />
          <Route path='receipt' 
          element={<Receipts />} />
          <Route path='payment' 
          element={<Payments />} />
          <Route path='company' 
          element={<Company />} />
          <Route path='company-details' 
          element={<CompanyDetails />} />
          <Route path='branch' 
          element={<Branch />} />
          <Route path='branchlist' 
          element={<BranchList />} />
          <Route path='daybook-approve' 
          element={<DayBook />} />
          <Route path='goldrate' 
          element={<GoldRate />} />
          <Route path='customerlist' 
          element={<CustomerList />} />
          <Route path='userlist' 
          element={<UserList />} />
          <Route path='camera' 
          element={<CameraCapture />} />
          <Route path='bankentry' 
          element={<BankEntry />} />
          <Route path='register-country' 
          element={<RegisterCountry />} />
          <Route path='goldloan' 
          element={<GoldLoan />} />
          <Route path='loanpage/*' 
          element={<LoanPage />} />
          <Route path='loanapplication' 
          element={<LoanApplication />} />
          <Route path='loanapplication2' 
          element={<LoanApplicationTwo />} />
          <Route path='termsandcondition/*' 
          element={<SelectTerms />} />
          <Route path='voucherhead' 
          element={<VoucherHead />} />
          <Route path='diagram' 
          element={<DashApp />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
