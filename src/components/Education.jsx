import '../styles/education.css';

function EducationalExperience({education, setEducation}) {

    function handleInputChange(type, e){
        let newEducation = {};

        if(type === 'schoolName'){
            newEducation = {...education, schoolName: e.target.value};
        }else if(type === 'titleStudy'){
            newEducation = {...education, titleStudy: e.target.value};
        }else{
            newEducation = {...education, dateStudy: e.target.value};
        }

        setEducation({...newEducation});
    }

    return(
        <>
        <h2>Educational Experience: </h2>
        <div className='educationalExperience'>
            
            <div>
                <p>School name: </p>
                <input type="text" onChange={(e) => handleInputChange('schoolName', e)} value={education.schoolName}/>
            </div>
            <div>
                <p>Title of Study: </p>
                <input type="text" onChange={(e) => handleInputChange('titleStudy', e)} value={education.titleStudy}/>
            </div>
            <div>
                <p>Date of study</p>
                <input type="date" onChange={(e) => handleInputChange('a', e)} value={education.dateStudy}/>
            </div>
        </div>
        </>
    );

}


export default EducationalExperience;