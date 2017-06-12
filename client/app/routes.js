/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';

import ListPage from './containers/ListPage';
import AnonPage from './containers/AnonPage';

import LeftNav from './containers/LeftNav'
import TopBar from './containers/TopBar'

class Wrapper extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (<span>
                <TopBar />
                <LeftNav />
                <Route path="/runtime/:id" component={ListPage}/>
            </span>)
    }

}

export default () => (
    <App>
        <Route path="/" exact={true} component={AnonPage}/>
        <Route path="/runtime" component={Wrapper}>

        </Route>
    </App>
);
