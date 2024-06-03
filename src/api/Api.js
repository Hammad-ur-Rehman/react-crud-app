// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Home from "../Pages/Home";
// import Read from "../Pages/Read";
// import { useParams } from "react-router-dom";
// const Api = () => {
//   const [data, setData] = useState([]);
//   const [readdata, setReadData] = useState({});
//   const { id } = useParams(); // Get the id from URL parameters

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     axios
//       .get("http://localhost:3030/users")
//       .then((res) => {
//         console.log("Data fetched:", res.data);
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [data]);

//   //Read Data

//   useEffect(() => {
//     // Fetch individual user data if id is present
//     if (id) {
//       axios
//         .get(`http://localhost:3030/users/${id}`)
//         .then((res) => setReadData(res.data))
//         .catch((err) => console.log(err));
//     }
//   }, [id]);

//   //Create Data

//   // const createData = (inputdata) => {
//   //   axios
//   //     .post("http://localhost:3030/users/", inputdata)
//   //     .then((res) => {
//   //       alert("Data Posted Successfully");
//   //       setData((prevData) => [...prevData, res.data]);
//   //       navigate("/");
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //       seterror("Failed to post data");
//   //     });
//   // };
  

//   //Delete Data

//   const handleDelete = (id) => {
//     const confirm = window.confirm("Do you like to Delete?");
//     if (confirm) {
//       axios
//         .delete(`http://localhost:3030/users/${id}`)
//         .then((res) => {
//           alert("Record Deleted Successful");
//           setData(data.filter((item) => item.id !== id));
//         })

//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <>
//       {id ? (
//         <Read readdata={readdata} />
//       ) : (
//         <Home handleDelete={handleDelete} data={data} />
//       )}
//     </>
//   );
// };

// export default Api;


import axios from "axios";

const BASE_URL = 'http://localhost:3030';

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getUserById = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/users/${id}`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const createUser = async (userData) => {
    try {
        const res = await axios.post(`${BASE_URL}/users`, userData);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteUser = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/users/${id}`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateUser = async (id, userData) => {
    try {
        const res = await axios.put(`${BASE_URL}/users/${id}`, userData);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}
