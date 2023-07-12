import f1 from "./img/food1.jpg";
import f2 from "./img/food2.jpg";
import f3 from "./img/food3.jpg";
import f4 from "./img/food4.jpg";
const DisplayFood=()=>{
    const food=[f1,f2,f3,f4];
    return(
        <>
        
        {
            food.map((path,index)=>(
                <img key={index} src={path} alt={`Image ${index+1}`}/>
            ))
        }
        
        </>
    )
}
export default DisplayFood;