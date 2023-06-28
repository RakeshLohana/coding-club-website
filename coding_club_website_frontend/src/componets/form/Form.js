import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './form.css'; 

const MyFormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    department: '',
    batch: '',
    competition: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendDataToAPI();
    navigate('/');
  };

  const sendDataToAPI = async () => {
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:4000/storeTask', formData);
      console.log(response.data);
      // Handle the API response as needed
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="my-form">
    <h2 id='register-tag' >Register in upcoming events</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="batch">Batch:</label>
        <select
          id="batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          required
        >
          <option value="">Select Batch</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="competition">Select Competition:</label>
        <select
          id="competition"
          name="competition"
          value={formData.competition}
          onChange={handleChange}
          required
        >
          <option value="">Select Competition</option>
          <option value="Web Development">Web Development</option>
          <option value="Game Development">Game Development</option>
          <option value="App Development">App Development</option>
          <option value="Speed Programming">Speed Programming</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default MyFormComponent;

















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const MyFormComponent = () => {

//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: '',
//     contactNumber: '',
//     email: '',
//     department: '',
//     batch: '',
//     competition: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     await sendDataToAPI();
//     navigate("/")
//   };

//   const sendDataToAPI = async () => {
//     try {
//       console.log(formData)
//       const response = await axios.post('http://localhost:4000/storeTask', formData);
//       console.log(response.data);
//       // Handle the API response as needed
//     } catch (error) {
//       console.error(error);
//       // Handle any errors that occur during the API call
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit} style={{marginTop:"200px"}}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="contactNumber">Contact Number:</label>
//         <input
//           type="tel"
//           id="contactNumber"
//           name="contactNumber"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="department">Department:</label>
//         <input
//           type="text"
//           id="department"
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="batch">Batch:</label>
//         <select
//           id="batch"
//           name="batch"
//           value={formData.batch}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Batch</option>
//           <option value="2019">2019</option>
//           <option value="2020">2020</option>
//           <option value="2021">2021</option>
//           <option value="2022">2022</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="competition">Select Competition:</label>
//         <select
//           id="competition"
//           name="competition"
//           value={formData.competition}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Competition</option>
//           <option value="Web Development">Web Development</option>
//           <option value="Game Development">Game Development</option>
//           <option value="App Development">App Development</option>
//           <option value="Speed Programming">Speed Programming</option>
//           <option value="Logistics">Logistics</option>
//         </select>
//       </div>

//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default MyFormComponent;


 
