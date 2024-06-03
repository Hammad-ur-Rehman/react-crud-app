import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getUserById } from "../api/Api";
import Button from "../Component/Button";
import Loading from "../Component/Loading";
const Update = ({}) => {
  const [loading, setloading] = useState(true);

  const { id } = useParams();

  const [inputdata, setinputdata] = useState({
    id: id,
    name: "",
    email: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [originaldata, setoriginaldata] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const currentData = await getUserById(id);
        setinputdata(currentData);
        setoriginaldata(currentData)
      } catch (error) {
        console.error("Error fetching user data:", error);
        setloading(false);
      }
    };

    fetchData();
  }, []);

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

  const handlesubmit = (event) => {
    event.preventDefault();

    if (JSON.stringify(inputdata) === JSON.stringify(originaldata)) {
      alert("No Data Updated");
      navigate("/");
      return;
    }

    const updatedata = async () => {
      try {
        const updaterecord = await updateUser(id, inputdata);
        setinputdata(updaterecord);
        alert("Data Updated Successfull");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    updatedata();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="update_data">
            <h1 className="update_heading">Data Updation</h1>

            <form onSubmit={handlesubmit}>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  disabled
                  name="id"
                  value={inputdata.id}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={inputdata.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="pt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={inputdata.email}
                  onChange={handleChange}
                ></input>
              </div>
              <Button className="update_btn">Update Data</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Update;
