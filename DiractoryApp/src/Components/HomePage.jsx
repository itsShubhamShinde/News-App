import React from 'react'
import './Style.css'
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="outerDiv">
            <div className='headingDiv'>Shubham's Directory App</div>
            <div className="bodyDiv">
                <div className="buttonDiv">
                    <Link to="/">
                        <button>Add New Person</button>
                    </Link>
                    <Link to='/display'>
                        <button>Retrive Information</button>
                    </Link>
                </div>
                <div className="AnswerDiv">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomePage