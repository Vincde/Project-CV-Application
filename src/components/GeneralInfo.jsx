export default function GeneralInformation({generalInfo, onChange}) {
    return(
        <>
        {
            generalInfo.formState === 'sent' ?
            (
                <div>
                    <h4>Form Sent!</h4>
                    <button id="formState" value={"edit"} onClick={onChange}>Edit</button>
                </div>
            ) :
            (
            <section>
                <h2>General Infomation</h2>
                <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={generalInfo.name} onChange={onChange} />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={generalInfo.email} onChange={onChange}/>
                <br />
                <label htmlFor="phone">Phone Number: </label>
                <input type="number" id="phone" value={generalInfo.phone} onChange={onChange}/>
                <br />
                <div className="componentButtons">
                    <button id="formState" value={"sent"} onClick={onChange}>Send</button>
                </div>
            </form>
            </section>
            )
        }
        </>
    );
}