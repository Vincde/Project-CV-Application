export default function CompleteCV({infos, setInfos}) {

    function handlePreviousPage(){
        for(const element of setInfos){
            element((prev) => ({...prev, formState: 'edit'}));
        }
    }


    return(
        <>
            <div>
                <h1>CV</h1>
                <h2>{infos[0].name}</h2>
            </div>
        
        <button onClick={handlePreviousPage}>Edit</button>
        </>
    )
}