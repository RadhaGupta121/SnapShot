import img1 from "./img/mountain1.jpg"
import img2 from "./img/mountain2.jpg";
import img3 from "./img/mountain 3.jpg";
import img4 from "./img/mountain4.jpg";





const DisplayMountain=()=>
{
    const mountain=[img1,img2,img3,img4];
   
    
    
    return (
        
        <>
        <div >
        {mountain.map((path,index)=>(
            <img key={index} src={path} alt={`Image ${index+1}`}/>
        ))}

        
      
        </div>
       
        </>
    )
}
export default DisplayMountain;