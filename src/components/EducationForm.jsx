export default function EducationForm(){
 
    



    return(
        <article>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName"/>

                <label htmlFor="titleOfStudy">Title Of Study</label>
                <input type="text" id="titleOfStudy" />

                <label htmlFor="dateOfStudy">Date of Study</label>
                <input type="date" id="dateOfStudy"/>
            </form>
        </article>
    );
}