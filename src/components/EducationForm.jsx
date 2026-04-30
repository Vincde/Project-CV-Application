import { useState } from "react";

export default function EducationForm({sendForm}){
    const [educationInfo, setEducationInfo] = useState([]);
    const [inputs, setInputs] = useState({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: ''});
    const [key, setKey] = useState(0);


    const handleInputChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleAddInfo = () => {
        if(inputs.id === -1){
            setEducationInfo([...educationInfo, {...inputs, id : key}]);
            setKey(key + 1);
        }else{
            const editedObj = [];
            educationInfo.map((el) => {
                if(el.id === inputs.id){
                    editedObj.push({...inputs});
                }else{
                    editedObj.push({...el});
                }
            });
            setInputs((prev) => ({...prev, id: -1}));
        }

        sendForm([...educationInfo]);
    }


    const handleEditInfo = (id) => {
        const editObject = educationInfo.find((el) => el.id === id);
        setInputs({...editObject});
    }

    const handleDeleteInfo = (id) => {
        const deleteObj = educationInfo.filter((el) => el.id !== id);
        setEducationInfo([...deleteObj]);
    }


    return(
        <article>
            <h2>Education Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" value={inputs.schoolName} onChange={handleInputChange}/>

                <label htmlFor="titleOfStudy">Title Of Study</label>
                <input type="text" id="titleOfStudy" value={inputs.titleOfStudy} onChange={handleInputChange}/>

                <label htmlFor="dateOfStudy">Date of Study</label>
                <input type="date" id="dateOfStudy" value={inputs.dateOfStudy} onChange={handleInputChange}/>

                <button onClick={handleAddInfo}>Send</button>
            </form>

            {
                educationInfo !== null ? (

                educationInfo.map((el) => {
                    return(
                        <div key={el.id}>
                            <h3>id : {el.id}</h3>
                            <button onClick={() => handleEditInfo(el.id)}>Edit</button>
                            <button onClick={() => handleDeleteInfo(el.id)}>Delete</button>
                        </div>
                    );
                })

            ) : null
            }
        </article>
    );
}