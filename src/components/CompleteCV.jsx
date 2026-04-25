import person from './../../public/person.jpeg';
import personName from './../../public/person_icon.png';
import personEmail from './../../public/mail_icon.png';
import personPhone from './../../public/phone_icon.png';

export default function CompleteCV({infos, setInfos}) {

    function handlePreviousPage(){
        for(const element of setInfos){
            element((prev) => ({...prev, formState: 'edit'}));
        }
    }


    return(
        <>
            <div className="cv-container">
                <section>
                    <h1>About Me</h1>
                    <img src={person} alt="person described in the curriculum" />
                    <div>
                        <img src={personName} alt="person's name" />
                        <span>{infos[0].name}</span>
                    </div>
                    <div>
                        <img src={personEmail} alt="person's mail" />
                        <span>{infos[0].email}</span>
                    </div>
                    <div>
                        <img src={personPhone} alt="person's phone" />
                        <span>{infos[0].phone}</span>
                    </div>
                </section>
                <section>
                    <h2>Educational Experience</h2>
                    <p>School Name: {}</p>
                    <p>Title Of Study</p>
                    <p>Date Of Study</p>
                </section>
                <section></section>
            </div>
        
        <button onClick={handlePreviousPage}>Edit</button>
        </>
    )
}