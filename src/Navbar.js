import React from 'react'
import Cusines from './Cusines'
import { Route, BrowserRouter as Router } from "react-router-dom"
function Navbar() {
    const changePage = () => {
        console.log("finction");
        <Cusines />;
        <Route path="/cusines" component={Cusines} />
    }
    return (
        <Router>
            <div className='flex justify-between p-5 bg-primary p-5 rounded-2xl'>
                <div className='flex justify-evenly gap-20 p-5'>
                    <h2>Image</h2>
                </div>

                <div className='flex justify-evenly gap-20 p-5 '>
                    <div>
                        <button className='hover:bg-secondary py-2 px-4' onClick={changePage}>Cuisines</button>
                    </div>
                    <div>
                        <button className='hover:bg-secondary py-2 px-4'>Favourites</button>
                    </div>
                    <div>
                        <button className='hover:bg-secondary py-2 px-4' >Profile</button>
                    </div>
                </div>
            </div>

        </Router >
    )
}

export default Navbar