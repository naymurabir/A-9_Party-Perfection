import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner text-error w-12"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoutes;