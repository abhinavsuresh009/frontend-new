import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Customer from './pages/customer/customer';
import RegisterUser from './pages/registeruser/registeruser';
import PasswordReset from './pages/passwordrest/passwordreset';
import Login from './pages/login/login';
import Payment from './pages/payment/payment';
import Receipt from './pages/receipt/receipt';
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
          <Route path='reciept' 
          element={<Receipt />} />
          <Route path='company' 
          element={<Company />} />
          <Route path='company-details' 
          element={<CompanyDetails />} />
          <Route path='branch' 
          element={<Branch />} />
          <Route path='branchlist' 
          element={<BranchList />} />
          <Route path='daybook' 
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
        </Routes>
      </Router>
    </div>
  );
}
export default App;
