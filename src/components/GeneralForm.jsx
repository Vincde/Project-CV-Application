export default function GeneralForm() {
    

    return(
        <article>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone"/>
            </form>
        </article>
    );
}