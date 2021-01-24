import { LinearProgress } from '@material-ui/core'
import React from 'react'
import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'

const MainPage = lazy(() => import('../../Pages/MainPage'))
const ProductsPage = lazy(() => import('../../Pages/ProductsPage'))
const ProductPage = lazy(() => import('../../Pages/ProductPage'))

const Layout = () => {
  return (
    <div className="root">
      <div className="app">
        <Header />
        <main className="main" style={{ marginTop: 64, minHeight: 'calc(100vh - 57px)' }}>
          <Suspense fallback={<LinearProgress />}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/product/:id" component={ProductPage} />
              <Route exact path="/products/:alias" component={ProductsPage} />
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
