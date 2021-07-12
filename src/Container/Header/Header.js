import "./Header.css"
import logo from "../../../src/img/Group.svg"

function Header() {
    return (
        <header> 
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo mt-3">
                    <img src={ logo } />
                </div>
                <div className="mt-3">
                    <a className="btn-text text-decoration-none me-5">Featurs</a>
                    <a className="btn-text text-decoration-none me-5">Get Started</a>
                    <a className="btn-text text-decoration-none me-5">Community</a>
                    <a className="btn-text text-decoration-none me-5">Blog</a>
                    <a className="btn-text text-decoration-none me-5">Enterpice</a>
                    <a className="btn-text text-decoration-none me-5">Pricing</a>
                    <button className="btn btn-primary">Free trial</button>
                </div>
            </div>
            <hr />
        </header>
    );
}

export default Header