import "./Card.css"

function Card() {
    return(
        <div className="d-flex">
            <div className="left">
                <h1 className="fnt">Why Framer</h1>
                <p className="text-center smallo">Easily bring designs to life with code,<br/> then share them with teammates.</p>
                <button className="btn btn-light boss1 mt-5">See Features</button>
                <button className="btn btn-dark ms-3 mt-5">Get Started</button>
            </div>
            <div className="right">
                <h1 className="fnt">Subscribe Today</h1>
                <p className="text-center smallo">Get 20% off when you choose our<br/> yearly subscription plan.</p>
                <button className="btn btn-light boss2 mt-5">View pricing</button>
            </div>
        </div>      
    );
}

export default Card