import "./Pagetwo.css"
import snapchat from "../../img/Screenshot_5.svg"
import icon6 from "../../img/Screenshot_7.svg"
import icon7 from "../../img/Screenshot_6.svg"

function Pagetwo() {
    return(
        <div className="tpbag">
            <div className="row">
                <div className="col-lg-12 col-md-8 col-sm-4">
                    <div>
                        <h1 className="twoPageText text-center">Framer is for teams, too.</h1>
                        <p className="text-light text-center tpsubtitle mt-3">Join a growing list of companies who use Framer<br/> to make all the products you know and love.</p>
                        <button className="btn btn-light tpbutton mt-4">Learn about Enterprise</button>
                    </div>
                    <div className="icons d-flex justify-content-between">
                        <img src={ snapchat } className="ms-5" />
                        <img src={ icon6 } />
                        <img src={ icon7 } />
                        <img src={ snapchat } />
                        <img src={ icon6 } />
                        <img src={ icon7 } />
                        <img src={ snapchat } />
                        <img src={ icon6 } />
                        <img src={ icon7 } className="me-5" />
                    </div>
                    <hr className="hr"></hr>
                </div>
            </div>
        </div>
    );
}

export default Pagetwo