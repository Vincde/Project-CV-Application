export default function PracticalExperience({practicalExperience, onChange}){
    return(
        <section>
            <h2>Practical Experience</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="companyName">Name of the Company: </label>
                <input type="text" id="companyName" value={practicalExperience.companyName} onChange={onChange}/>

                <br />

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" id="positionTitle" value={practicalExperience.positionTitle} onChange={onChange}/>
                
                <br />

                <label htmlFor="mainResponsibilities">Main Responsibilities: </label>
                <textarea type="text" id="mainResponsibilities" value={practicalExperience.mainResponsibilities} onChange={onChange}></textarea>
                
                <br />

                <label htmlFor="dateOfStart">Date of start: </label>
                <input type="date" id="dateOfStart" value={practicalExperience.dateOfStart} onChange={onChange}/>
                
                <br />

                <label htmlFor="dateOfEnd">Date of End: </label>
                <input type="date" id="dateOfEnd" value={practicalExperience.dateOfEnd} onChange={onChange}/>
                
                <br />

                <div className="componentButtons">
                    <button>Edit</button>
                    <button>Send</button>
                </div>
            </form>
        </section>
    )
}