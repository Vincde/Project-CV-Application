import { useState } from "react";

export default function GeneralForm({sendForm}) {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: '', image: ''});
    const [sent, setSent] = useState(false);

    const handleChangeInput = (e) => {
        setGeneralInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
    }


    const handleSendInfo = () => {
        setSent(true);
        sendForm({...generalInfo});
    }



    return(
        <article>
            <h2>General Information Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>

                <label htmlFor="name">Name</label>
                <input type="text"
                id="name" 
                value={generalInfo.name} 
                onChange={handleChangeInput} 
                disabled={sent === true}/>

                <label htmlFor="email">Email</label>
                <input type="email" 
                id="email" 
                value={generalInfo.email} 
                onChange={handleChangeInput}
                disabled={sent === true}/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" 
                placeholder="123-456-7890"
                id="phone" 
                value={generalInfo.phone} 
                onChange={handleChangeInput}
                disabled={sent === true}/>

                <label htmlFor="image">Image</label>
                <input type="file" 
                id="image"  
                accept="image/*"
                onChange={handleChangeInput}
                disabled={sent === true}/>


                {/* function DettagliFile({ fileSelezionato }) {
  const [anteprima, setAnteprima] = useState(null);

  // Usiamo useEffect per generare l'anteprima ogni volta che la prop cambia
  useEffect(() => {
    if (!fileSelezionato) return;

    // Creiamo l'URL temporaneo per l'immagine
    const objectUrl = URL.createObjectURL(fileSelezionato);
    setAnteprima(objectUrl);

    // Pulizia: quando il componente viene smontato o il file cambia, 
    // liberiamo la memoria revocando l'URL precedente
    return () => URL.revokeObjectURL(objectUrl);
  }, [fileSelezionato]);
  

  <img src={anteprima}  />
  */}

                <div>
                    <button onClick={handleSendInfo}>Send</button>
                    <button onClick={() => setSent(false)} style={{marginLeft:"10px"}}>Edit</button>
                </div>
            </form>
        </article>
    );
}