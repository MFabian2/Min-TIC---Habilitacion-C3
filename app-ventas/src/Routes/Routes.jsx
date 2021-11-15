import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateLayout from '../Layout/PrivateLayout'
import Dashboard from '../Pages/Admin/Dashboard'

const Routes = () => {
    return (
        <Router><Switch><Route path={['/dash', '/roles', '/ventas']}><PrivateLayout><Switch><Route path='/dash'><Dashboard/></Route><Route path='/roles'><Roles/></Route><Route path='/ventas'><Ventas /></Route></Switch></PrivateLayout></Route><Route path='/'><PublicLayout><Index /></PublicLayout></Route></Switch></Router>
    )
}

export default Routes
