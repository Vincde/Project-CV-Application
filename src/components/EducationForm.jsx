import arrowUp from './../../public/arrow_drop_up.png';
import arrowDown from './../../public/arrow_drop_down.png';


import { useState } from "react";

export default function EducationForm({sendForm}){
    const [educationInfo, setEducationInfo] = useState([]);
    const [inputs, setInputs] = useState({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: '', show: false});
    const [key, setKey] = useState(0);


    const handleInputChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleAddInfo = () => {
        let editedObj = [];
        if(inputs.id === -1){
            editedObj = [...educationInfo, {...inputs, id : key}];
            setEducationInfo(editedObj);
            setKey(key + 1);
            setInputs({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: '', show: false});
        }else{
            educationInfo.map((el) => {
                if(el.id === inputs.id){
                    editedObj.push({...inputs});
                }else{
                    editedObj.push({...el});
                }
            });
            setEducationInfo([...editedObj]);
            setInputs({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: '', show: false});
        }

        sendForm(editedObj);
    }

    const handleCancelEdit = () => {
        setInputs({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: '', show: false});
    }


    const handleEditInfo = (id) => {
        const editObject = educationInfo.find((el) => el.id === id);
        setInputs({...editObject});
    }

    const handleDeleteInfo = (id) => {
        const deleteObj = educationInfo.filter((el) => el.id !== id);
        setEducationInfo([...deleteObj]);
        setInputs({id: -1, schoolName: '', titleOfStudy: '', dateOfStudy: '', show: false});
        sendForm(deleteObj);
    }


    const showDialog = (id) => {
        const editedObj = [];
        educationInfo.map((el) => {
            if(el.id === id){
                editedObj.push({...el, show: !el.show});
            }else{
                editedObj.push(el);
            }
        });
        setEducationInfo([...editedObj]);
        sendForm(editedObj);
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

                <div>
                    <button onClick={handleAddInfo}>{inputs.id === -1 ? "Send" : "Change" }</button>
                    {inputs.id !== -1 ? <button onClick={handleCancelEdit} style={{marginLeft:"10px"}}>Cancel</button> : null}
                </div>
            </form>

            {
                educationInfo.map((el) => {
                    return(
                        <div key={el.id} className='infoBox'>
                            <div className="infoBox-section">
                                <span>n. {el.id}</span>
                                <button onClick={() => handleEditInfo(el.id)}>Edit</button>
                                <button onClick={() => handleDeleteInfo(el.id)}>Delete</button>
                                <img src={el.show === true ? arrowUp : arrowDown} alt="show more / show less" onClick={() => showDialog(el.id)}/>
                            </div>
                            {el.show === true ? (
                                <>
                                <span>SchoolName: {el.schoolName}</span><br />
                               <span>Title Of Study: {el.titleOfStudy}</span><br />
                               <span>Date Of Study: {el.dateOfStudy}</span><br />
                               </>
                            ) : null}
                        </div>
                    );
                })
            }
        </article>
    );
}