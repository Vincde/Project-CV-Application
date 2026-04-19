export default function GeneralInformation({name, email, phone, handleChange}) {
    return(
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={handleChange}/>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={handleChange}/>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="number" id="phoneNumber" value={phone} onChange={handleChange}/>
            </form>
        </section>
    );
}