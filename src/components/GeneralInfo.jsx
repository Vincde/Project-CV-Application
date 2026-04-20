export default function GeneralInformation({generalInfo, setGeneralInfo, handleChange}) {
    return(
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={generalInfo.name} onChange={(e) => handleChange(e, generalInfo, setGeneralInfo)} />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={generalInfo.email} onChange={(e) => handleChange(e, generalInfo, setGeneralInfo)}/>
                <label htmlFor="phone">Phone Number: </label>
                <input type="number" id="phone" value={generalInfo.phone} onChange={(e) => handleChange(e, generalInfo, setGeneralInfo)}/>
            </form>
        </section>
    );
}