import '../styles/practical.css';

function Practical({practice, setPractice}) {

    function handleChange(type, element, e) {
        const correctIndex = practice.indexOf(element);


        setPractice(prevItem =>
            prevItem.map(item => {
            if(practice.indexOf(item) === correctIndex){
                if(type === 'compName'){
                    return {...item, companyName: e.target.value};
                }else if(type === 'posTitle'){
                    return {...item, positionTitle: e.target.value};
                }else if(type === 'responsblt'){
                    return {...item, mainRespons: e.target.value};
                }else if(type === 'from'){
                    return {...item, dateFrom: e.target.value};
                }else if(type === 'to'){
                    return {...item, dateUntil: e.target.value};
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
    <h2>Practical Experiences: </h2>
        <div className='practical'>
            {practice.map((element) => {
                <>
                <div>
                <p>Company Name: </p>
                <input type="text" onChange={(e) => handleChange('compName', element, e)} value={element.companyName}/>
            </div>
            <div>
                <p>Position title: </p>
                <input type="text" onChange={(e) => handleChange('posTitle', element, e)} value={element.positionTitle}/>
            </div>
            <div>
                <p>Main responsibilities: </p>
                <input type="text" onChange={(e) => handleChange('responsblt', element, e)} value={element.mainRespons}/>
            </div>
            <div>
                <p>Worked from: </p>
                <input type="date" onChange={(e) => handleChange('from', element, e)} value={element.dateFrom}/>
            </div>
            <div>
                <p>To:  </p>
                <input type="date" onChange={(e) => handleChange('to', element, e)} value={element.dateUntil}/>
            </div>
                </>
            })}
            
            <button onClick={() => setPractice([...practice], {companyName: '', positionTitle: '', mainRespons: '', dateFrom: '', dateUntil: ''})}>New</button>
        </div>
    </>        
    );

}

export default Practical;