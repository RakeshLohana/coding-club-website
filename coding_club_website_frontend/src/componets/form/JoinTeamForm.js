import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './joinTeams.css';



const JoinOurTeamForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    year: '',
    heardAbout: '',
    whyJoin: '',
    projects: '',
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
      const response = await axios.post('http://localhost:4000/joinTeam', formData);
      console.log(response.data);
      // Handle the API response as needed
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '80px' }}>
     <h2 id='register-tag' >Join our team now</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
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
          className="form-control"
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
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <select
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
          className="form-control"
        >
          <option value="">Select Year</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="heardAbout">Where did you hear about our club?</label>
        <select
          id="heardAbout"
          name="heardAbout"
          value={formData.heardAbout}
          onChange={handleChange}
          required
          className="form-control"
        >
          <option value="">Select Option</option>
          <option value="Social Media">Social Media</option>
          <option value="Teachers">Teachers</option>
          <option value="Friends">Friends</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Other">Other</option>
        </select>
        {formData.heardAbout === 'Other' && (
          <input
            type="text"
            name="otherOption"
            placeholder="Please specify"
            value={formData.otherOption}
            onChange={handleChange}
            required
            className="form-control"
          />
        )}
      </div>

      <div className="form-group">
        <label htmlFor="whyJoin">Why do you want to join our club?</label>
        <textarea
          id="whyJoin"
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="projects">List your projects:</label>
        <textarea
          id="projects"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <button type="submit" className="button ">Submit</button>

    </form>
  );
};

export default JoinOurTeamForm;
























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const JoinOurTeamForm = () => {
//     const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     year: '',
//     heardAbout: '',
//     whyJoin: '',
//     projects: '',
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
//       const response = await axios.post('http://localhost:4000/joinTeam', formData);
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
//         <label htmlFor="year">Year:</label>
//         <select
//           id="year"
//           name="year"
//           value={formData.year}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Year</option>
//           <option value="First">First</option>
//           <option value="Second">Second</option>
//           <option value="Third">Third</option>
//           <option value="Fourth">Fourth</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="heardAbout">Where did you hear about our club?</label>
//         <select
//           id="heardAbout"
//           name="heardAbout"
//           value={formData.heardAbout}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Option</option>
//           <option value="Social Media">Social Media</option>
//           <option value="Teachers">Teachers</option>
//           <option value="Friends">Friends</option>
//           <option value="LinkedIn">LinkedIn</option>
//           <option value="Other">Other</option>
//         </select>
//         {formData.heardAbout === 'Other' && (
//           <input
//             type="text"
//             name="otherOption"
//             placeholder="Please specify"
//             value={formData.otherOption}
//             onChange={handleChange}
//             required
//           />
//         )}
//       </div>

//       <div>
//         <label htmlFor="whyJoin">Why do you want to join our club?</label>
//         <textarea
//           id="whyJoin"
//           name="whyJoin"
//           value={formData.whyJoin}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="projects">List your projects:</label>
//         <textarea
//           id="projects"
//           name="projects"
//           value={formData.projects}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default JoinOurTeamForm;
