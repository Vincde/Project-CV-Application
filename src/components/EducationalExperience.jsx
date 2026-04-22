export default function EducationalExperience({educationInfo, onChange}){
    return(
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
                <div>
                    <button>Edit</button>
                    <button>Send</button>
                </div>
            </form>
        </section>
    )
}