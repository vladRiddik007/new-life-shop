import React, { useEffect } from 'react'
import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import { Loader } from '../Loader'
import { RouterConfig } from './RouterConfig'

const MainPage = lazy(() => import('../../Pages/MainPage'))
const ProductsPage = lazy(() => import('../../Pages/ProductsPage'))
const ProductPage = lazy(() => import('../../Pages/ProductPage'))
const CheerPage = lazy(() => import('../../Pages/CheerPage'))
const PaymentPage = lazy(() => import('../../Pages/PaymentPage'))
const NewsPage = lazy(() => import('../../Pages/NewsPage'))

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout = () => {
  return (
    <div className="root">
      <div className="app">
        <Header />
        <ScrollToTop />
        <main className="main" style={{ marginTop: 64, minHeight: 'calc(100vh - 57px)' }}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={RouterConfig.mainPage} component={MainPage} />
              <Route exact path={RouterConfig.productPage} component={ProductPage} />
              <Route exact path={RouterConfig.productsPage} component={ProductsPage} />
              <Route exact path={RouterConfig.cheerPage} component={CheerPage} />
              <Route exact path={RouterConfig.paymentPage} component={PaymentPage} />
              <Route exact path={RouterConfig.newsPage} component={NewsPage} />
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
