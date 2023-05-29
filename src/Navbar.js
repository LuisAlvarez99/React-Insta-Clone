import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle')
    },
    []);
    return(
        <div className='bg-warning'>
            <div>Clone</div>
            <ul  className="nav flex-column justify-content-start">
                <a href="/">Home</a>
                <a href="/feed">Feed</a>
                {/* <Link className="nav-item" to={'/'}>Home</Link> */}
                {/* <Link className="nav-item" to={'/feed'}>Feed</Link> */}
                {/* <Link className="nav-item" to={'/'}>Profile</Link> */}
            </ul>
        </div>
    )

};
export default Navbar;