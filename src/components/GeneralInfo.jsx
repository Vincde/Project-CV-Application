import '../styles/generalInfo.css'

function GeneralInfo({info, setInfo}) {

    function handleChange(type, e){
        let newGenInfo = {};
        if(type === 'name'){
            newGenInfo = {...info, 'name' : e.target.value};
        }else if(type === 'email'){
            newGenInfo = {...info, 'email' : e.target.value};
        }else{
            newGenInfo = {...info, 'phone' : e.target.value}
        }
        setInfo({...newGenInfo});
    }


    return(
        <div className='generalInfo'>
            <h2>General Information:</h2>
            <div>
                <p>Name:</p>
                <input type="text" onChange={(e) => handleChange('name', e)} value={info.name} />
            </div>
            <div>
                <p>Email:</p>
                <input type="text" onChange={(e) => handleChange('email', e)}  value={info.email}/>
            </div>
            <div>
                <p>Phone number:</p>
                <input type="number" onChange={(e) => handleChange('phone', e)}  value={info.phone}/>
            </div>
        </div>
        );
}



export default GeneralInfo;