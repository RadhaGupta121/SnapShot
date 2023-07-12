import b1 from "./img/beach1.jpg";
import b2 from "./img/beach2.jpg";
import b3 from "./img/beach3.jpg";
import b4 from "./img/beach4.jpg";
const DisplayBeach=()=>{
    const beach=[b1,b2,b3,b4];
    return(
        <>
        
        {
            beach.map((path,index)=>(
                <img key={index} src={path} alt={`Image ${index+1}`}/>
            ))
        }
        </>
    )
}
export default DisplayBeach;