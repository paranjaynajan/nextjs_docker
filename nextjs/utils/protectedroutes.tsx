import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet,} from "react-router-dom";
import { Providercontext } from '../provider/idel_timer';



const ProtectedRoutes: React.FC = () => {

    const isAuthenticated = localStorage.getItem("token") || "";
    // const nav = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     if (!isAuthenticated && location.pathname !== "/signup") {
    //         nav("/");
    //     }
    // }, [isAuthenticated, location.pathname]);

    if (!true) {
        return (
            <Providercontext>
                <Outlet />
            </Providercontext>
        )
    }
    else {
        return (<Navigate to="/" replace={true} />)
    }
}

export default ProtectedRoutes