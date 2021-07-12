import "./Contact.css"
import link from "../../img/Screenshot_8.png"

function Contact() {
    return(
        <div>
            <div className="d-flex justify-content-between contact">
                <div className="ms-5">
                    <h3 className="text-light">Framer</h3>
                    <p className="text-secondary">Pricing</p>
                    <p className="text-secondary">Erterprice</p>
                    <p className="text-secondary">Education</p>
                    <p className="text-secondary">Updates</p>
                    <p className="text-secondary">Beta</p>
                </div>
                <div className="">
                    <h3 className="text-light">Features</h3>
                    <p className="text-secondary">Overview</p>
                    <p className="text-secondary">Desing</p>
                    <p className="text-secondary">Code</p>
                    <p className="text-secondary">Collaborate</p>
                </div>
                <div className="">
                    <h3 className="text-light">Get Started</h3>
                    <p className="text-secondary">Tutorials</p>
                    <p className="text-secondary">Resources</p>
                    <p className="text-secondary">Guides</p>
                    <p className="text-secondary">Examples</p>
                    <p className="text-secondary">Docs</p>
                </div>
                <div className="">
                    <h3 className="text-light">About</h3>
                    <p className="text-secondary">Blog</p>
                    <p className="text-secondary">Jobs</p>
                    <p className="text-secondary">Brand Assets</p>
                    <p className="text-secondary">Community</p>
                    <p className="text-secondary">Help Center</p>
                </div>
                <div className="">
                    <h3 className="text-light">Platforms</h3>
                    <p className="text-secondary">Desing iOS</p>
                    <p className="text-secondary">Desing for Android</p>
                </div>
                <div className="">
                    <h3 className="text-light me-5">Framer</h3>
                    <p className="text-secondary">Voyage</p>
                    <p className="text-secondary">Fiber</p>
                </div>
            </div>  
            <div className="d-flex justify-content-center cbg pb-5 pt-5">
                <img src={ link } />
            </div>
        </div>
    );
}

export default Contact