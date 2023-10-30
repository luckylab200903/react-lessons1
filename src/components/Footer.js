import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="py-8 flex justify-center items-center bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <h1 className="text-2xl font-bold m-4">Web Dev Food Makers</h1>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
                velit nec ligula commodo egestas.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <Link to="https://www.linkedin.com/feed/"></Link>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Menu</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold m-2">Connect With Us</h2>
              <ul className="text-sm">
                <li className="m-2">
                  <a href="#">Facebook</a>
                </li>
                <li className="m-2">
                  <a href="#">Twitter</a>
                </li>
                <li className="m-2">
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
























// const Footer = () => {
//     return (
//       <div className="py-8 flex">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-2">
//               <h1 className="text-2xl font-bold mb-4">Web Dev Food Makers</h1>
//               <p className="text-sm text-center">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
//                 velit nec ligula commodo egestas.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
//               <ul className="text-sm">
//                 <li className="mb-2">
//                   <a href="#">Home</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">About Us</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Contact Us</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Menu</a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
//               <ul className="text-sm">
//                 <li className="mb-2">
//                   <a href="#">Facebook</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Twitter</a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#">Instagram</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Footer;
  












// // const Footer=()=>{
// //     return (
// //         <div className="box-border hover:box-content w-3/3 bg-red-700 h-96">
// //             <h1 className="text-center m-4 p-4 text-lg">Web Dev food makers</h1>

// //         </div>
// //     )
// // }
// // export default Footer;