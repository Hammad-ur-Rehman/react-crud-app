// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../Component/Button/Button";
// import { createUser } from "../apis/userApis";
// import Loading from "../Component/Loader/Loading";



// const Create = () => {
//   const [inputdata, setinputdata] = useState({
//     id: "",
//     name: "",
//     email: "",
//   });

//   const [loading, setloading] = useState(true); // Initialize loading to true
//   const [error, seterror] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setloading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!inputdata.id || !inputdata.name || !inputdata.email) {
//       seterror("All fields are required");
//       return;
//     }

//     const postdata = async () => {
//       try {
//         const createnewdata = await createUser(inputdata);
//         setinputdata(createnewdata);
//         alert("Data Posted Successfully");
//         navigate("/");
//       } catch (err) {
//         console.error(err);
//         seterror("Failed to post data");
//       }
//     };

//     postdata();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name") {
//       const trimmedValue = value.replace(/^\s+/, ""); // Remove leading spaces
//       const limitedSpacesValue = trimmedValue.replace(/\s{2,}/g, " "); // Replace multiple consecutive spaces with a single space
//       setinputdata({ ...inputdata, [name]: limitedSpacesValue });
//     } else {
//       setinputdata({ ...inputdata, [name]: value });
//     }
//   };

//   return (
//     <>
//       {loading ? (
        
//          <Loading/>
         
//       ) : (
//         <div className="container">
//           <div className="create_data">
//             <h1 className="create_heading">Data Creation</h1>
//             {error && <p style={{ color: "red", fontSize: 22 }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="id">ID:</label>
//                 <input
//                   type="number"
//                   name="id"
//                   value={inputdata.id}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={inputdata.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="pt-3">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={inputdata.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <Button variant="btn-dark">Submit </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Create;



// After Typescript



import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button/Button";
import { createUser } from "../apis/userApis";
import Loading from "../Component/Loader/Loading";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
interface InputData {
  id: string;
  name: string;
  email: string;
}

const Create: React.FC = () => {
  const [inputdata, setinputdata] = useState<InputData>({
    id: "",
    name: "",
    email: "",
  });

  const [loading, setloading] = useState<boolean>(true);
  const [error, seterror] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputdata.id || !inputdata.name || !inputdata.email) {
      seterror("All fields are required");
      return;
    }

    const postdata = async () => {
      try {
        // Convert id to number before sending to the API
        const dataToSend = { ...inputdata, id: (inputdata.id) };
        const createnewdata = await createUser(dataToSend);
       // Convert id back to string before setting the state
       const newInputData: InputData = {
        id: createnewdata.id.toString(),
        name: createnewdata.name,
        email: createnewdata.email,
      };
        setinputdata(newInputData);
        alert("Data Posted Successfully");
        navigate("/");
      } catch (err) {
        console.error(err);
        seterror("Failed to post data");
      }
    };

    postdata();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      const trimmedValue = value.replace(/^\s+/, ""); // Remove leading spaces
      const limitedSpacesValue = trimmedValue.replace(/\s{2,}/g, " "); // Replace multiple consecutive spaces with a single space
      setinputdata({ ...inputdata, [name]: limitedSpacesValue });
    } else {
      setinputdata({ ...inputdata, [name]: value });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="create_data">
            <h1 className="create_heading">Data Creation</h1>
            {error && <p style={{ color: "red", fontSize: 22 }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  name="id"
                  value={inputdata.id}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={inputdata.name}
                  onChange={handleChange}
                />
              </div>
              <div className="pt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={inputdata.email}
                  onChange={handleChange}
                />
              </div>
              <Button variant="btn-dark" className="">Submit </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;
