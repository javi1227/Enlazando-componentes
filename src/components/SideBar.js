import React from 'react';
import image from '../assets/images/logo-DH.png';

import {Link} from 'react-router-dom';


function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                <li className="nav-item">
                    <Link to="GenresInDb" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>GenresInDb</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="LastMovieInDb" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>LastMovieInDb</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="ContentRowMovies" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentRowMovies</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="ContentWrapper" className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentWrapper</span>
                    </Link>
                </li>
            


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </>
    )
}
export default SideBar;
