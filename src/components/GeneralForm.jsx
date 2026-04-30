import { useState } from "react";

export default function GeneralForm() {
    const [info, setInfo] = useState({name: '', email: '', phone: ''});

    const handleChangeInfo = (e) => {
        setInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
    }


    return(
        <article>
            <h2>General Information Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={info.name} onChange={handleChangeInfo}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={info.email} onChange={handleChangeInfo}/>

                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" value={info.phone} onChange={handleChangeInfo}/>

                <button>Send</button>
            </form>
        </article>
    );
}