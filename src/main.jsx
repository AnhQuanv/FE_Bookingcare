// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './containers/Auth/Login.jsx'
import { path } from './utils/constant.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { persister, store } from './redux/store.js'
import { Provider } from 'react-redux'
import System from './containers/Auth/System.jsx'
import UserManage from './containers/System/UserManage.jsx'
import ProductManage from './containers/System/ProductManage.jsx'
import RegisterPackageGroupOrAcc from './containers/System/RegisterPackageGroupOrAcc.jsx'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ],
  },
  {
    path: path.LOGIN,
    element: <Login />
  },
  {
    path: path.SYSTEM,
    element: <System />,
    children: [
      {
        path: "user-manage",
        element: <UserManage />,
      },
      {
        path: "product-manage",
        element: <ProductManage />,
      },
      {
        path: "register-package-group-or-account",
        element: <RegisterPackageGroupOrAcc />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <RouterProvider router={router} />
    </PersistGate>
    {/* // <StrictMode> */}
    {/* // </StrictMode>, */}
  </Provider>
)


