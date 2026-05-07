import { useState } from "react";

export default function GeneralForm({sendForm}) {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''});
    const [sent, setSent] = useState(false);

    const handleChangeInput = (e) => {
        setGeneralInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
    }


    const handleSendInfo = () => {
        setSent(true);
        sendForm({...generalInfo});
    }



    return(
        <article>
            <h2>General Information Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="name">Name</label>
                <input type="text"
                id="name" 
                value={generalInfo.name} 
                onChange={handleChangeInput} 
                disabled={sent === true}/>

                <label htmlFor="email">Email</label>
                <input type="email" 
                id="email" 
                value={generalInfo.email} 
                onChange={handleChangeInput}
                disabled={sent === true}/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" 
                placeholder="123-456-7890"
                id="phone" 
                value={generalInfo.phone} 
                onChange={handleChangeInput}
                disabled={sent === true}/>

                <div>
                    <button onClick={handleSendInfo}>Send</button>
                    <button onClick={() => setSent(false)} style={{marginLeft:"10px"}}>Edit</button>
                </div>
            </form>
        </article>
    );
}