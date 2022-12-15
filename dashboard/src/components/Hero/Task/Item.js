import "./item.css"

const Item = () => {
    return (
        <div className="item-wrapper d-flex">
            <div className="item-one">
                <div className="resol-wrap d-flex justify-content-between align-items-start">
                    <div className="title-wrap">
                    <h3 className="ticket">Unresolved tickets</h3>
                    <p className="textgray">Group: <span>Support</span></p>

                    </div>
                    <a href="#">View details</a>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">Waiting on Feature Request</h3>
                    <p className="number">4238</p>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">Awaiting Customer Response</h3>
                    <p className="number">1005</p>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">Awaiting Developer Fix</h3>
                    <p className="number">914</p>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">Pending</h3>
                    <p className="number">281</p>
                </div>
            </div>
            <div className="item-one">
                <div className="resol-wrap d-flex justify-content-between align-items-start">
                    <div className="title-wrap">
                    <h3 className="ticket">Tasks</h3>
                    <p className="textgray">Today</p>

                    </div>
                    <a href="#">View details</a>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    {/* <h3 className="wait">Create new task</h3> */}
                    <input type="text" className="inputs"  placeholder="Create new task"/>
                    <div className="number form-check">
                        <input className="form-check-input" type="checkbox"/>
                    </div>
                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">  <input className="form-check-input" type="radio"/> &nbsp; &nbsp; Awaiting Customer Response</h3>
                    <p className="bg-warning text-white rounded-5 p-1">URGENT</p>

                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">  <input className="form-check-input" type="radio"/> &nbsp; &nbsp; Awaiting Developer Fix</h3>
                    <p className="bg-success text-white rounded-5 p-1">NEW</p>

                </div>
                <div className="waiting-wrap d-flex justify-content-between align-align-items-center">
                    <h3 className="wait">  <input className="form-check-input" type="radio" checked/> &nbsp; &nbsp; Pending</h3>
                    <p className="bg-secondary text-white rounded-5 p-1">DEFAULT</p>

                </div>
            </div>
        </div>
    )
}

export default Item;