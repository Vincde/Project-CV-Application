import './education.css';

function EducationalExperience(education, setEducation) {

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
        <div className='educationalExperience'>
            <h2>Educational Experience: </h2>
            <div>
                <p>School name: </p>
                <input type="text" onChange={(e) => handleInputChange('schoolName', e)}/>
            </div>
            <div>
                <p>Title of Study: </p>
                <input type="text" onChange={(e) => handleInputChange('titleStudy', e)}/>
            </div>
            <div>
                <p>Date of study</p>
                <input type="date" onChange={(e) => handleInputChange('a', e)}/>
            </div>

            <div>{education.titleStudy} {education.schoolName} {education.dateStudy}</div>
        </div>

        
    );

}


export default EducationalExperience;