export default function PracticeForm(){
   



    return(
        <article>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName"/>

                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" />

                <label htmlFor="mainResponsibilities">Main Responsibilities</label>
                <textarea id="mainResponsibilities"></textarea>
            
                <label htmlFor="dateStart">Date when you started</label>
                <input type="date" id="dateStart"/>
                
                <label htmlFor="dateEnd">Date when you finished</label>
                <input type="date" id="dateEnd"/>
            
            </form>
        </article>
    );
}