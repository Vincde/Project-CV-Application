import { useState } from "react";

function GeneralInfo() {

    return(
        <div>
            <div>
                <p>Name:</p>
                <input type="text" onChange={(e) => (e.target.value)} />
            </div>
            <div>
                <p>Email:</p>
                <input type="text" onChange={(e) => (e.target.value)}/>
            </div>
            <div>
                <p>Phone number:</p>
                <input type="number" onChange={(e) => (e.target.value)} />
            </div>
        </div>
        );
}



export default GeneralInfo;