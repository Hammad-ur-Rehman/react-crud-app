import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getUserById } from "../apis/userApis";
import Button from "../Component/Button/Button";
import Loading from "../Component/Loader/Loading";

interface InputData {
  id: any;
  name: string;
  email: string;
}

const Update = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>(); // Ensure id is a string
  const numericId = id ? id : undefined; // Convert to number if id exists

  const [inputdata, setInputData] = useState<InputData>({
    id: numericId, // Use undefined if numericId is undefined
    name: "",
    email: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [originaldata, setOriginalData] = useState<InputData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (numericId === undefined) return; // Exit if numericId is not valid
      setLoading(true);
      try {
        const currentData = await getUserById(numericId);
        console.log(currentData);
        setInputData(currentData);
        setOriginalData(currentData);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [numericId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name ,value } = e.target;
    if (name === "name") {
      const trimmedValue = value.replace(/^\s+/, "");          // Remove leading spaces
      const limitedSpacesValue = trimmedValue.replace(/\s{2,}/g, " "); // Replace multiple consecutive spaces with a single space
      setInputData({ ...inputdata, [name]: limitedSpacesValue });
    } else {
      setInputData({ ...inputdata, [name]: value });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (JSON.stringify(inputdata) === JSON.stringify(originaldata)) {
      alert("No Data Updated");
      return;
    }

    const updateData = async () => {
      if (numericId === undefined) return; // Exit if numericId is not valid
      try {
        const updateRecord = await updateUser(numericId, inputdata);
        setInputData(updateRecord);
        alert("Data Updated Successfully");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    updateData();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="update_data">
            <h1 className="update_heading">Data Updation</h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  disabled
                  name="id"
                  value={inputdata.id ?? ""} // Use empty string if id is undefined
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
              <Button variant="btn-secondary">Update Data</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Update;
