import '../styles/education.css';
import React from 'react';

function EducationalExperience({education, setEducation}) {

    function handleInputChange(type, element, e){
        const correctIndex = education.indexOf(element);

        setEducation(prevItem => 
            prevItem.map(item => {
                if(education.indexOf(item) === correctIndex) {
                    if(type === 'schoolName'){
                        return {...item, schoolName:e.target.value}
                    }else if(type === 'titleStudy'){
                        return {...item, titleStudy: e.target.value}
                    }else if(type === 'dateStudy'){
                        return {...item, dateStudy: e.target.value}
                    }else{
                        return {...item};
                    }
                }else{
                    return {...item};
                } 
            })
        );
    }

    function deleteItem(id) {
        const newEducation = education.filter((element) => element.id !== id);
        setEducation([...newEducation]);
    }


    return(
        <>
        <h2>Educational Experience: </h2>
        <div className='educationalExperience'>
            {education.map((element) => {
                return(
            <React.Fragment key={element.id}>
                <div>
                    <p>School name: </p>
                    <input type="text" onChange={(e) => handleInputChange('schoolName', element, e)} value={element.schoolName}/>
                </div>
                <div>
                    <p>Title of Study: </p>
                    <input type="text" onChange={(e) => handleInputChange('titleStudy', element,  e)} value={element.titleStudy}/>
                </div>
                <div>
                    <p>Date of study</p>
                    <input type="date" onChange={(e) => handleInputChange('a', element, e)} value={element.dateStudy}/>
                </div>

                <button onClick={() => deleteItem(element.id)}>Delete</button>

            </React.Fragment>
            )
            })}
            
            
            <button onClick={() => setEducation([...education, {id:crypto.randomUUID(), schoolName: '', titleStudy: '', dateStudy: ''}])}>New</button>
            
        </div>
        </>
    );

}


export default EducationalExperience;