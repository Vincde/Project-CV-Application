export default function EducationalExperience({educationInfo, onChange}){
    return(
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="schoolName">Name of the school you graduated in: </label>
                <input type="text" id="schoolName" value={educationInfo.schoolName} onChange={onChange}/>
                <label htmlFor="titleOfStudy">Title of study achieved: </label>
                <input type="text" id="titleOfStudy" value={educationInfo.titleOfStudy} onChange={onChange}/>
                <label htmlFor="dateOfStudy">Date you graduated in: </label>
                <input type="text" id="dateOfStudy" value={educationInfo.dateOfStudy} onChange={onChange}/>
            </form>
        </section>
    )
}