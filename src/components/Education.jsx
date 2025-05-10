import '../styles/education.css';

function EducationalExperience({education, setEducation}) {

    function handleInputChange(type, element, index, e){
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

    return(
        <>
        <h2>Educational Experience: </h2>
        <div className='educationalExperience'>
            {education.map((element, index) => {
                return(
            <>
                <div>
                    <p>School name: </p>
                    <input type="text" onChange={(e) => handleInputChange('schoolName', element, index, e)} value={element.schoolName}/>
                </div>
                <div>
                    <p>Title of Study: </p>
                    <input type="text" onChange={(e) => handleInputChange('titleStudy', element, index,  e)} value={element.titleStudy}/>
                </div>
                <div>
                    <p>Date of study</p>
                    <input type="date" onChange={(e) => handleInputChange('a', element, index, e)} value={element.dateStudy}/>
                </div>
            </>
            )
            })}
            
            
            <button onClick={() => setEducation([...education, {schoolName: '', titleStudy: '', dateStudy: ''}])}>New</button>
            
        </div>
        </>
    );

}


export default EducationalExperience;