import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

var Dashboard =()=> {

    const { logout } = useAuth0();
        return (
            <div>
                <div className="container">
                    
                    <div className="card mt-4">
                        <div className="card-body">
                        <h1>Welcome to Dashboard</h1>
                        </div>
                        <div className="card-footer">
                        <button className="btn-primary btn-lg mt-2 p-2" style={{border:"none"}} onClick={()=>{
                        logout({ returnTo: window.location.origin })
                    }}>Click To Logout</button>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
export default Dashboard
