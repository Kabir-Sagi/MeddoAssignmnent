import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

var Dashboard =()=> {

    const { logout } = useAuth0();
        return (
            <div>
                <div className="container">
                    <button style={{border:"none"}} onClick={()=>{
                        logout({ returnTo: window.location.origin })
                    }}>Logout</button>
                    <div className="card mt-4">
                        <div className="card-body">
                        <h1>Welcome to Dashboard</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
export default Dashboard
