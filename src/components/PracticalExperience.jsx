export default function PracticalExperience({practicalExperience, onChange}){
    return(
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="companyName">Name of the Company</label>
                <input type="text" id="companyName" value={practicalExperience.companyName} onChange={onChange}/>

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" id="positionTitle" value={practicalExperience.positionTitle} onChange={onChange}/>
                
                <label htmlFor="mainResponsibilities">Main Responsibilities</label>
                <input type="text" id="mainResponsibilities" value={practicalExperience.mainResponsibilities} onChange={onChange}/>
                
                <label htmlFor="dateOfStart">Date of start: </label>
                <input type="text" id="dateOfStart" value={practicalExperience.dateOfStart} onChange={onChange}/>
                
                <label htmlFor="dateOfEnd">Date of End</label>
                <input type="text" id="dateOfEnd" value={practicalExperience.dateOfEnd} onChange={onChange}/>
            </form>
        </section>
    )
}