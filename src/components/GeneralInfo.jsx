export default function GeneralInformation({generalInfo, onChange}) {
    return(
        <section>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={generalInfo.name} onChange={onChange} />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={generalInfo.email} onChange={onChange}/>
                <label htmlFor="phone">Phone Number: </label>
                <input type="number" id="phone" value={generalInfo.phone} onChange={onChange}/>
            </form>
        </section>
    );
}