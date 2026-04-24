export default function EducationalExperience({educationInfo, onChange}){
    return(
        <>
        { educationInfo.formState === 'sent' ? 
            (
                <div>
                    <h4>Form Sent!</h4>
                    <button value={'edit'} id="formState" onClick={onChange}>Edit</button>
                </div>
            ) : (
            <section>
            <h2>Educational Experience</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="schoolName">Name of the school you graduated in: </label>
                <input type="text" id="schoolName" value={educationInfo.schoolName} onChange={onChange}/>
                <br />
                <label htmlFor="titleOfStudy">Title of study achieved: </label>
                <input type="text" id="titleOfStudy" value={educationInfo.titleOfStudy} onChange={onChange}/>
                <br />
                <label htmlFor="dateOfStudy">Date you graduated in: </label>
                <input type="text" id="dateOfStudy" value={educationInfo.dateOfStudy} onChange={onChange}/>
                <br />
                <div className="componentButtons">
                    <button value={'sent'} id="formState" onClick={onChange}>Send</button>
                </div>
            </form>
        </section>
            )
        }
        
        </>
    )
}