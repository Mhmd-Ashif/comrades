// import { useState } from "react";
// import "./App.css";

import Register from "./pages/Register";
import Response from "./pages/Response";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   // Initialize state for form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     dno: "",
//     dept: "",
//     year: "",
//     interest: "", // For radio button
//   });

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission (for now, just log data)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, dno, dept, year, interest } = formData;

//     // Validate that all fields are filled
//     if (!name || !dno || !dept || !year || !interest) {
//       alert("Please fill in all fields and select your interest.");
//       return;
//     }

//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         {/* Form Section */}
//         <div className="form-section">
//           <form onSubmit={handleSubmit}>
//             <h2>Neural Nexus Department Event Registration</h2>

//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </label>

//             <label>
//               D.No:
//               <input
//                 type="number"
//                 name="dno"
//                 value={formData.dno}
//                 onChange={handleInputChange}
//                 placeholder="Enter your D.No"
//                 required
//               />
//             </label>

//             <label>
//               Dept:
//               <input
//                 type="text"
//                 name="dept"
//                 value={formData.dept}
//                 onChange={handleInputChange}
//                 placeholder="Enter your Dept"
//                 required
//               />
//             </label>

//             <label>
//               Year:
//               <select
//                 name="year"
//                 value={formData.year}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select Year</option>
//                 <option value="1st Year">1st Year</option>
//                 <option value="2nd Year">2nd Year</option>
//                 <option value="3rd Year">3rd Year</option>
//                 <option value="4th Year">4th Year</option>
//               </select>
//             </label>

//             <div className="note">
//               <p>
//                 <strong>NOTE:</strong> Registration fee is 20 rupees.
//               </p>
//             </div>

//             <div className="radio-section">
//               <p>Are you interested:</p>
//               <div className="radio-options">
//                 <label>
//                   <input
//                     type="radio"
//                     name="interest"
//                     value="yes"
//                     onChange={handleInputChange}
//                     checked={formData.interest === "yes"}
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="interest"
//                     value="no"
//                     onChange={handleInputChange}
//                     checked={formData.interest === "no"}
//                   />
//                   No
//                 </label>
//               </div>
//             </div>

//             <button type="submit" className="submit-button">
//               Register
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="image-section">
//           <img src="../public/logoimage.png" alt="Poster" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<Response />} />
      </Routes>
    </BrowserRouter>
  );
}
