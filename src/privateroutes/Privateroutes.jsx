import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import Authcontext from '../contextprovider/Authcontext';


// const googleprovider=new GoogleAuthProvider();

const PrivateRoutes = ({children}) => {
    const{user}=use(Authcontext)

    const location=useLocation()
    // console.log(location);
    
    if (user) {
        return children;
        
    }
    
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    
};

export default PrivateRoutes;

