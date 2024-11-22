import { Outlet, useNavigate } from 'react-router-dom';

const System = () => {

    const navigate = useNavigate();


    return (
        <div className="system-container">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: "#e3f2fd" }}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => navigate("/login")}>Log out</span>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div className="system-list">
                <Outlet />
            </div>
        </div>
    );
};

export default System;
