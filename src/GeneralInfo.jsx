import { useState } from "react";

function GeneralInfo() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState();


    return(
        <div>
            <div>
                <p>Name:</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <p>Email:</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <p>Phone number:</p>
                <input type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
        </div>
        );
}



export default GeneralInfo;