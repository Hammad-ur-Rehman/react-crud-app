import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";
import { createUser } from "../api/Api";
import Loading from "../Component/Loading";
const Create = () => {
  const [inputdata, setinputdata] = useState({
    id: "",
    name: "",
    email: "",
  });

  const [loading, setloading] = useState(true); // Initialize loading to true
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlesubmit = (event) => {
    event.preventDefault();
    if (!inputdata.id || !inputdata.name || !inputdata.email) {
      seterror("All fields are required");
      return;
    }

    const postdata = async () => {
      try {
        const createnewdata = await createUser(inputdata);
        setinputdata(createnewdata);
        alert("Data Posted Successfully");
        navigate("/");
      } catch (err) {
        console.error(err);
        seterror("Failed to post data");
      }
    };

    postdata();
  };

  const handleChange = (e) => {
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
        
         <Loading/>
         
      ) : (
        <div className="container">
          <div className="create_data">
            <h1 className="create_heading">Data Creation</h1>
            {error && <p style={{ color: "red", fontSize: 22 }}>{error}</p>}
            <form onSubmit={handlesubmit}>
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
              <Button className="create_btn">Submit </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;
