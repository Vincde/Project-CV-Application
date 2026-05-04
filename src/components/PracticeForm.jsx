import { useState } from "react";
import arrowUp from './../../public/arrow_drop_up.png'
import arrowDown from './../../public/arrow_drop_down.png'


export default function PracticeForm({sendForm}){
    const [practiceInfo, setPracticeInfo] = useState([]);
    const [inputs, setInputs] = useState({id: -1, companyName: '', positionTitle: '', mainResponsibilities: '', dateStart: '', dateEnd: '', show: false});
    const [key, setKey] = useState(0);


    const handleInputChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.id]: e.target.value}));
    }


     const handleAddInfo = () => {
        let editedObj = [];
        if(inputs.id === -1){
            editedObj = [...practiceInfo, {...inputs, id : key}];
            setPracticeInfo(editedObj);
            setKey(key + 1);
            setInputs({id: -1, companyName: '', positionTitle: '', mainResponsibilities: '', dateStart: '', dateEnd: '', show: false});
        }else{
            practiceInfo.map((el) => {
                if(el.id === inputs.id){
                    editedObj.push({...inputs});
                }else{
                    editedObj.push({...el});
                }
            });
            setPracticeInfo([...editedObj]);
            setInputs({id: -1, companyName: '', positionTitle: '', mainResponsibilities: '', dateStart: '', dateEnd: '', show: false});
        }

        sendForm(editedObj);
    }

     const handleCancelEdit = () => {
        setInputs({id: -1, companyName: '', positionTitle: '', mainResponsibilities: '', dateStart: '', dateEnd: '', show: false});
    }


    const handleEditInfo = (id) => {
        const editObject = practiceInfo.find((el) => el.id === id);
        setInputs({...editObject});
    }

    const handleDeleteInfo = (id) => {
        const deleteObj = practiceInfo.filter((el) => el.id !== id);
        setPracticeInfo([...deleteObj]);
        setInputs({id: -1, companyName: '', positionTitle: '', mainResponsibilities: '', dateStart: '', dateEnd: '', show: false});
        sendForm(deleteObj);
    }




    const showDialog = (id) => {
        const editedObj = [];
        practiceInfo.map((el) => {
            if(el.id === id){
                editedObj.push({...el, show: !el.show});
            }else{
                editedObj.push(el);
            }
        });
        setPracticeInfo([...editedObj]);
    }


    return(
        <article>
            <h2>Practical Experience Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" value={inputs.companyName} onChange={handleInputChange}/>

                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" value={inputs.positionTitle} onChange={handleInputChange}/>

                <label htmlFor="mainResponsibilities">Main Responsibilities</label>
                <textarea id="mainResponsibilities" value={inputs.mainResponsibilities} onChange={handleInputChange}></textarea>
            
                <label htmlFor="dateStart">Date when you started</label>
                <input type="date" id="dateStart" value={inputs.dateStart} onChange={handleInputChange}/>
                
                <label htmlFor="dateEnd">Date when you finished</label>
                <input type="date" id="dateEnd" value={inputs.dateEnd} onChange={handleInputChange}/>
            
                <div>
                    <button onClick={handleAddInfo}>{inputs.id === -1 ? "Send" : "Change"}</button>
                    {inputs.id !== -1 ? <button onClick={handleCancelEdit} style={{marginLeft:"10px"}}>Cancel</button> : null}
                </div>
            </form>



            {
                practiceInfo.map((el) => {
                    return(
                        <div key={el.id} className='infoBox'>
                            <div className="infoBox-section">
                                <span>n. {el.id}</span>
                                <button onClick={() => handleEditInfo(el.id)}>Edit</button>
                                <button onClick={() => handleDeleteInfo(el.id)}>Delete</button>
                                <img src={el.show === true ? arrowUp : arrowDown} alt="show more / show less" onClick={() => showDialog(el.id)}/>
                            </div>
                            {el.show === true ? (
                                <div className="infoBox-section-span">
                               <span><strong>Company name</strong>: {el.companyName}</span>
                               <span><strong>Position Title</strong>: {el.positionTitle}</span>
                               <span><strong>Main Responsibilities</strong>: {el.mainResponsibilities}</span>
                               <span><strong>Date Of Start</strong>: {el.mainResponsibilities}</span>
                               <span><strong>Date Of End</strong>: {el.mainResponsibilities}</span>
                               </div>
                            ) : null}
                        </div>
                    );
                })
            }
        </article>
    );
}