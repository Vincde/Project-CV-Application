import './practical.css';

function Practical({practice, setPractice}) {

    function handleChange(type, e) {
        let newChange = {};

        if(type === 'compName'){
            newChange = {...practice, companyName: e.target.value};
        }else if(type === 'posTitle'){
            newChange = {...practice, positionTitle: e.target.value};
        }else if(type === 'responsblt'){
            newChange = {...practice, mainRespons: e.target.value};
        }else if(type === 'from'){
            newChange = {...practice, dateFrom: e.target.value};
        }else{
            newChange = {...practice, dateUntil: e.target.value};
        }

        setPractice(newChange);
    }


    return(
        <div className='practical'>
            <h2>Practical Experiences: </h2>
            <div>
                <p>Company Name: </p>
                <input type="text" onChange={(e) => handleChange('compName', e)}/>
            </div>
            <div>
                <p>Position title: </p>
                <input type="text" onChange={(e) => handleChange('posTitle', e)} />
            </div>
            <div>
                <p>Main responsibilities: </p>
                <input type="text" onChange={(e) => handleChange('responsblt', e)} />
            </div>
            <div>
                <p>Worked from: </p>
                <input type="date" onChange={(e) => handleChange('from', e)} />
            </div>
            <div>
                <p>To:  </p>
                <input type="date" onChange={(e) => handleChange('to', e)} />
            </div>
        </div>
        
    );

}

export default Practical;