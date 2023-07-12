import bi1 from "./img/bird1.jpg";
import bi2 from "./img/bird2.jpg";
import bi3 from "./img/bird3.jpg";
import bi4 from "./img/bird4.jpg";
const DisplayBirds=()=>{
    const bird=[bi1,bi2,bi3,bi4];
    return(
        <>
        
        {
            bird.map((path,index)=>(
                <img key={index} src={path} alt={`Image ${index+1}`}/>
            ))
        }
        </>
    )
}
export default DisplayBirds;