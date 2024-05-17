// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     telephone: "",
//     address: "",
//     country: "",
//     gender: "",
//     subscription: [],
//   });

//   const [submittedData, setSubmittedData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("submittedData")) || [];
//     setSubmittedData(storedData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name === "fullName") {
//       console.log(value);
//     }

//     if (type === "checkbox") {
//       if (checked) {
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           subscription: [...prevFormData.subscription, value],
//         }));
//       } else {
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           subscription: prevFormData.subscription.filter(
//             (sub) => sub !== value
//           ),
//         }));
//       }
//     } else {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newSubmittedData;
//     if (editIndex !== null) {
//       newSubmittedData = submittedData.map((data, index) =>
//         index === editIndex ? formData : data
//       );
//       setEditIndex(null);
//     } else {
//       newSubmittedData = [...submittedData, formData];
//     }

//     setSubmittedData(newSubmittedData);
//     localStorage.setItem("submittedData", JSON.stringify(newSubmittedData));
//     setFormData({
//       fullName: "",
//       email: "",
//       telephone: "",
//       address: "",
//       country: "",
//       gender: "",
//       subscription: [],
//     });
//     alert("Form submitted successfully!");
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setFormData(submittedData[index]);
//   };

//   return (
//     <div className="container mx-auto max-w-screen-lg px-4">
//       <h1 className="text-3xl font-semibold mb-6">Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2">Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="border rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Telephone:</label>
//           <input
//             type="tel"
//             name="telephone"
//             value={formData.telephone}
//             onChange={handleChange}
//             required
//             className="border rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="border rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Country:</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//             className="border rounded px-4 py-2 w-full"
//           >
//             <option value="">Select a country</option>
//             {["USA", "Canada", "UK", "Australia", "India"].map(
//               (country, index) => (
//                 <option key={index} value={country}>
//                   {country}
//                 </option>
//               )
//             )}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Gender:</label>
//           <label className="inline-block mr-4">
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={formData.gender === "Male"}
//               onChange={handleChange}
//               required
//               className="mr-2"
//             />{" "}
//             Male
//           </label>
//           <label className="inline-block">
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={formData.gender === "Female"}
//               onChange={handleChange}
//               required
//               className="mr-2"
//             />{" "}
//             Female
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Subscription:</label>
//           <label className="inline-block mr-4">
//             <input
//               type="checkbox"
//               name="subscription"
//               value="Weekly"
//               checked={formData.subscription.includes("Weekly")}
//               onChange={handleChange}
//               className="mr-2"
//             />{" "}
//             Weekly
//           </label>
//           <label className="inline-block mr-4">
//             <input
//               type="checkbox"
//               name="subscription"
//               value="Monthly"
//               checked={formData.subscription.includes("Monthly")}
//               onChange={handleChange}
//               className="mr-2"
//             />{" "}
//             Monthly
//           </label>
//           <label className="inline-block">
//             <input
//               type="checkbox"
//               name="subscription"
//               value="Yearly"
//               checked={formData.subscription.includes("Yearly")}
//               onChange={handleChange}
//               className="mr-2"
//             />{" "}
//             Yearly
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="bg-gray-800 hover:bg-gray-800 text-gray-800 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </form>
//       <h2 className="text-2xl font-semibold mt-8">Submitted Data</h2>
//       {/* <table className="w-full mt-4">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Full Name</th>
//             <th className="border px-4 py-2">Email</th>
//             <th className="border px-4 py-2">Telephone</th>
//             <th className="border px-4 py-2">Address</th>
//             <th className="border px-4 py-2">Country</th>
//             <th className="border px-4 py-2">Gender</th>
//             <th className="border px-4 py-2">Subscription</th>
//             <th className="border px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedData.map((data, index) => (
//             <tr key={index} className="border-b">
//               <td className="border px-4 py-2">{data.fullName}</td>
//               <td className="border px-4 py-2">{data.email}</td>
//               <td className="border px-4 py-2">{data.telephone}</td>
//               <td className="border px-4 py-2">{data.address}</td>
//               <td className="border px-4 py-2">{data.country}</td>
//               <td className="border px-4 py-2">{data.gender}</td>
//               <td className="border px-4 py-2">{data.subscription.join(", ")}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}

//       <div className="overflow-x-auto mb-48">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2">Full Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Telephone</th>
//               <th className="px-4 py-2">Address</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Gender</th>
//               <th className="px-4 py-2">Subscription</th>
//               <th className="px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index} className="bg-white">
//                 <td className="border px-4 py-2">{data.fullName}</td>
//                 <td className="border px-4 py-2">{data.email}</td>
//                 <td className="border px-4 py-2">{data.telephone}</td>
//                 <td className="border px-4 py-2">{data.address}</td>
//                 <td className="border px-4 py-2">{data.country}</td>
//                 <td className="border px-4 py-2">{data.gender}</td>
//                 <td className="border px-4 py-2">{data.subscription.join(", ")}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    address: "",
    country: "",
    gender: "",
    subscription: [],
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    setSubmittedData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          subscription: [...prevFormData.subscription, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          subscription: prevFormData.subscription.filter(
            (sub) => sub !== value
          ),
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newSubmittedData;
    if (editIndex !== null) {
      newSubmittedData = submittedData.map((data, index) =>
        index === editIndex ? formData : data
      );
      setEditIndex(null);
    } else {
      newSubmittedData = [...submittedData, formData];
    }

    setSubmittedData(newSubmittedData);
    localStorage.setItem("submittedData", JSON.stringify(newSubmittedData));
    setFormData({
      fullName: "",
      email: "",
      telephone: "",
      address: "",
      country: "",
      gender: "",
      subscription: [],
    });
    alert("Form submitted successfully!");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(submittedData[index]);
  };
  // max-w-screen-lg
  return (
    <div className="container mx-auto  px-4 py-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold mb-6 text-white">Registration Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Telephone:</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            {["USA", "Canada", "UK", "Australia", "India"].map(
              (country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              )
            )}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Gender:</label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
              className="form-radio text-blue-600"
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
              className="form-radio text-pink-600"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Subscription:</label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name="subscription"
              value="Weekly"
              checked={formData.subscription.includes("Weekly")}
              onChange={handleChange}
              className="form-checkbox text-green-600"
            />
            <span className="ml-2 text-gray-700">Weekly</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name="subscription"
              value="Monthly"
              checked={formData.subscription.includes("Monthly")}
              onChange={handleChange}
              className="form-checkbox text-yellow-600"
            />
            <span className="ml-2 text-gray-700">Monthly</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="subscription"
              value="Yearly"
              checked={formData.subscription.includes("Yearly")}
              onChange={handleChange}
              className="form-checkbox text-purple-600"
            />
            <span className="ml-2 text-gray-700">Yearly</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <h2 className="text-3xl font-semibold mt-8 text-white">Submitted Data</h2>
      <div className="overflow-x-auto mb-48 mt-4">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Telephone</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Subscription</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index} className="bg-gray-50 border-b">
                <td className="border px-4 py-2">{data.fullName}</td>
                <td className="border px-4 py-2">{data.email}</td>
                <td className="border px-4 py-2">{data.telephone}</td>
                <td className="border px-4 py-2">{data.address}</td>
                <td className="border px-4 py-2">{data.country}</td>
                <td className="border px-4 py-2">{data.gender}</td>
                <td className="border px-4 py-2">{data.subscription.join(", ")}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

