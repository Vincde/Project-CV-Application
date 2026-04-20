export default function EducationalExperience({educationInfo, setEducationInfo, handleChange}){
    return(
        <section>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="schoolName">Name of the school you graduated in: </label>
                <input type="text" id="schoolName" value={educationInfo.schoolName} onChange={(e) => handleChange(e, educationInfo, setEducationInfo)}/>
                <label htmlFor="titleOfStudy">Title of study achieved: </label>
                <input type="text" id="titleOfStudy" value={educationInfo.titleOfStudy} onChange={(e) => handleChange(e, educationInfo, setEducationInfo)}/>
                <label htmlFor="dateOfStudy">Date you graduated in: </label>
                <input type="text" id="dateOfStudy" value={educationInfo.dateOfStudy} onChange={(e) => handleChange(e, educationInfo, setEducationInfo)}/>
            </form>
        </section>
    )
}