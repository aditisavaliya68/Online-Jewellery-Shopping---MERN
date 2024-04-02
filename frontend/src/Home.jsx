// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import  fh1 from "./image/fh1.png";
// import fh2 from "./image/fh2.jpeg";
// import fh3 from "./image/fh3.jpeg";
// import fh4 from "./image/fh4.jpeg";
// import fh5 from "./image/fh5.jpeg";
// import h5 from "./image/h5.png";
// import h6 from "./image/h6.png";
// import "./home.css";


// export default function Home() {


//   // return (
//   //   <div className="product">
//   //     <img src={fh1} alt="fh1" className="fh1" height={500} width={1200} />
    
//   //   </div>
//   // );
//   return (
//     <>
    
//       <div className="product">
//        <img src={fh1} alt="fh1" className="fh1" height={500} width={1200} />

//       {/* <img src={fh2} alt="fh2" className="fh2" />
//       <img src={fh3} alt="fh3" className="fh3" />
//       <img src={fh4} alt="fh4" className="fh4" />
//       <img src={fh5} alt="fh5" className="fh5" />


//       <div className="silver-item1">
//         <img src={h5} alt="h5" className="h5" height={300} width={600} />
//         <div className="silver-item2">
//           <img src={h6} alt="h6" className="h6" height={300} width={600} />
//         </div>
//       </div> */}
//     </div>
    
//     <div className="product"> <img src={fh2} alt="fh2" className="fh2" />
//       <img src={fh3} alt="fh3" className="fh3" />
//       <img src={fh4} alt="fh4" className="fh4" />
//       <img src={fh5} alt="fh5" className="fh5" /></div>

//       <div className="product">
//       <div className="silver-item">
//         <img src={h5} alt="h5" className="h5" height={300} width={600}  />
        
//       </div>
//       <div className="silver-item">
//           <img src={h6} alt="h6" className="h6" height={300} width={600} />
//         </div>
//         </div>
//     </>
//   );

// }
import React from 'react';
import  fh1 from "./image/fh1.png";
import fh2 from "./image/fh2.jpeg";
import fh3 from "./image/fh3.jpeg";
import fh4 from "./image/fh4.jpeg";
import fh5 from "./image/fh5.jpeg";
import h5 from './image/h5.png'; // Import your image files
import h6 from './image/h6.png'; // Import your image files
import './home.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';


const MyComponent = () => {
 
  const navigateTo = useNavigate();
  // Define click event handlers for h5 and h6 images
  const handleClickH5 = () => {
    console.log('h5 image clicked!');
    navigateTo('/silver')
    // Add your logic here for h5 image click event
  };

  const handleClickH6 = () => {
    console.log('h6 image clicked!');
    navigateTo('/diamond')
    // Add your logic here for h6 image click event
  };
  
  const handleClickFH2 = () => {
    console.log('fh2 image clicked!');
    navigateTo('/nacklace')
    // Add your logic here for h6 image click event
  };
  const handleClickFH3= () => {
    console.log('fh3 image clicked!');
    navigateTo('/ring')
    // Add your logic here for h6 image click event
  };
  const handleClickFH4 = () => {
    console.log('fh4 image clicked!');
    navigateTo('/earring')
    // Add your logic here for h6 image click event
  };
  const handleClickFH5= () => {
    console.log('fh5 image clicked!');
    navigateTo('/bracelet')
    // Add your logic here for h6 image click event
  };


  return (
    <>
     <div className="product">
    <img src={fh1} alt="fh1" className="fh1" height={500} width={1200} />
   </div>
   <div className="product">  
           
 
      <div className="silver-item">
        {/* Add click event handler to h5 image */}
        <img src={fh2} alt="fh2" className="fh2" height={280} width={280} onClick={handleClickFH2} />
      </div>
      <div className="silver-item">
        {/* Add click event handler to h5 image */} 
        <img src={fh3} alt="fh3" className="fh3" height={280} width={280} onClick={handleClickFH3} />
      </div>
      <div className="silver-item">
        {/* Add click event handler to h5 image */}
        <img src={fh4} alt="fh4" className="fh4" height={280} width={280} onClick={handleClickFH4} />
      </div>
      <div className="silver-item">
        {/* Add click event handler to h5 image */}
        <img src={fh5} alt="fh5" className="fh5" height={280} width={280} onClick={handleClickFH5} />
      </div>
   {/* <img src={fh2} alt="fh2" className="fh2" />
   <img src={fh3} alt="fh3" className="fh3" />
   <img src={fh4} alt="fh4" className="fh4" />
  <img src={fh5} alt="fh5" className="fh5" /> */}
  </div>
    
        
    <div className="product">
      <div className="silver-item">
        {/* Add click event handler to h5 image */}
        <img src={h5} alt="h5" className="h5" height={300} width={600} onClick={handleClickH5} />
      </div>
      <div className="silver-item">
        {/* Add click event handler to h6 image */}
        <img src={h6} alt="h6" className="h6" height={300} width={600} onClick={handleClickH6} />
      </div>
    </div>
    </>
   
  );
};

export default MyComponent;
