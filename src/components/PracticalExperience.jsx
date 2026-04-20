export default function PracticalExperience({practicalExperience, setPracticalExperience, handleChange}){
    return(
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="companyName">Name of the Company</label>
                <input type="text" id="companyName" value={practicalExperience.companyName} onChange={(e) => handleChange(e, practicalExperience, setPracticalExperience)}/>

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" id="positionTitle" value={practicalExperience.positionTitle} onChange={(e) => handleChange(e, practicalExperience, setPracticalExperience)}/>
                
                <label htmlFor="mainResponsibilities">Main Responsibilities</label>
                <input type="text" id="mainResponsibilities" value={practicalExperience.mainResponsibilities} onChange={(e) => handleChange(e, practicalExperience, setPracticalExperience)}/>
                
                <label htmlFor="dateOfStart">Date of start: </label>
                <input type="text" id="dateOfStart" value={practicalExperience.dateOfStart} onChange={(e) => handleChange(e, practicalExperience, setPracticalExperience)}/>
                
                <label htmlFor="dateOfEnd">Date of End</label>
                <input type="text" id="dateOfEnd" value={practicalExperience.dateOfEnd} onChange={(e) => handleChange(e, practicalExperience, setPracticalExperience)}/>
            </form>
        </section>
    )
}