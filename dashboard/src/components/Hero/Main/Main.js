import "./Main.css"
import Image from "../../../assets/images/graph.png"
import List from "../Lists/List";

const Main = () => {
    return (
        <div className="wrapper">
            <div className="title-wrap d-flex">
                <div className="wraps">
                <div className="text-wrap d-flex justify-content-between align-items-end">
                <div className="trend">
                    <h3 className="todays">Today’s trends</h3>
                    <p className="dates">as of 25 May 2019, 09:41 PM</p>
                    </div>
                   <div className="days d-flex align-items-center">
                   <p className="parag">Today</p>
                    <p className="parag">Yesterday</p>
                   </div>
                </div>
                   <div className="img-wrap">
                    <img className="d-block" src={Image} alt="Templae" width={780} height={406} />
                   </div>
                </div>
           <ul className="list-unstyled lists">
           <List />
           </ul>
            </div>
        </div>
    )
}

export default Main;