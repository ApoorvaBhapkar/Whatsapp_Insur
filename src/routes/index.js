// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const invoiceGenerate = lazy(() => import('../pages/protected/invoiceGenerate'))
const invoice = lazy(() => import('../pages/protected/invoice'))
const RegisterUser = lazy(() => import('../pages/protected/RegisterUser'))
const ManagerTable = lazy(() => import('../pages/protected/ManagerTable'))
const ExecutiveTable = lazy(() => import('../pages/protected/ExecutiveTable'))
const fileUpload = lazy(() => import('../pages/protected/fileUpload'))
const CustomerData = lazy(() => import('../pages/protected/CustomerData'))
const NotifyCustomer = lazy(() => import('../pages/protected/NotifyCustomer'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/register-user', // the url
    component: RegisterUser, // view rendered
  },
  {
    path: '/manager-table', // the url
    component: ManagerTable, // view rendered
  },
  {
    path: '/executive-table', // the url
    component: ExecutiveTable, // view rendered
  },
  {
    path: '/file-upload', // the url
    component: fileUpload, // view rendered
  },
  {
    path: '/customer-data', // the url
    component: CustomerData, // view rendered
  },
  {
    path: '/notify-customer', // the url
    component: NotifyCustomer, // view rendered
  },
  {
    path: '/invoice-generate', // the url
    component: invoiceGenerate, // view rendered
  },
  {
    path: '/invoice', // the url
    component: invoice, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
