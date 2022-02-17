import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountPage from '../features_app/dashboard/account/AccountPage';
import HomeDashboard from '../features_app/dashboard/home/HomeDashboard';
import CreateProducts from '../features_app/dashboard/products/create/CreateNewProducts';
import MainProductPage from '../features_app/dashboard/products/MainProductPage';
import ProfilePage from '../features_app/dashboard/profile/ProfilePage';
import DashboardLayout from '../utilities/DashboardLayout';
import SettingPage from '../features_app/dashboard/setting/SettingPage'
import DetailProducts from '../features_app/dashboard/products/detail/DetailProducts';
import UpdateProductPage from '../features_app/dashboard/products/update/UpdateProductPage';
import LoginPage from '../features_app/auth/login/LoginPage';
import RegisterPage from '../features_app/auth/register/RegisterPage';
import ErrorPage from '../features_app/error404/ErrorPage';
import ForgotPage from '../features_app/auth/forgot/ForgotPage';
import CompleteRegister from '../features_app/dashboard/complete_register/CompleteRegister';

function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/forgot-password" component={ForgotPage} />
          <DashboardLayout exact path="/dashboard" component={HomeDashboard} />
          <DashboardLayout exact path="/completing-register" component={CompleteRegister} />
          <DashboardLayout exact path="/dashboard/products" component={MainProductPage} />
          <DashboardLayout exact path="/dashboard/create-product" component={CreateProducts} />
          <DashboardLayout exact path="/dashboard/update-product/:slug" component={UpdateProductPage} />
          <DashboardLayout exact path="/dashboard/detail-product/:slug" component={DetailProducts} />
          <DashboardLayout exact path="/dashboard/profile" component={ProfilePage} />
          <DashboardLayout exact path="/dashboard/account" component={AccountPage} />
          <DashboardLayout exact path="/dashboard/setting" component={SettingPage} />
          <Route exact path="*" component={ErrorPage} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRoute;
