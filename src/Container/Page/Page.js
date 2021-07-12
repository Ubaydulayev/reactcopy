import "./Page.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Page() {
    return(
        <div className="container me-5">
            <div className="row">
                <div className="col-12 col-lg-10 col-md-8 col-sm-6">
                    <div className="page">
                        <h1 className="font fw-bold w-100">Get ahead of the pack.</h1>
                        <p className="text-secondary paragraf">Framer is the best way to create interactive<br/>designs from start to finish.</p>
                        <div className="d-flex justify-content-center link mt-5">
                            <input className="input p-2" type="text" placeholder="Email"></input>
                            <button className="btn btn-primary">Start your free trial</button>
                        </div>
                        <div className="link d-flex justify-content-center align-items-center ">
                            <FontAwesomeIcon icon={faPlay} className="play me-2" />
                            <a className="btn-text text-decoration-none">Watch Intro Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page