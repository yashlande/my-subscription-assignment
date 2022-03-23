import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import React from 'react'
import SubscriptionList from './components/SubscriptionList';
import Product from './components/Product';

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SubscriptionList />
                    </Route>

                    <Route path="/addnew">
                        <Product />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes