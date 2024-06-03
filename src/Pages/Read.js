import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Crudd.css";
import Button from "../Component/Button";
import { getUserById } from "../api/Api";
import Loading from "../Component/Loading";
const Read = () => {
  const [loading, setloading] = useState(true);
  const [readdata, setReadData] = useState({});
  const { id } = useParams(); // Get the id from URL parameters

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setloading(true);
    const showdata = async () => {
      try {
        const userdata = await getUserById(id);
        setReadData(userdata);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setloading(false);
      }
    };

    if (id) {
      showdata();
    } else {
      setloading(false);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="display_data">
            <h2 className="display_heading">Read Data</h2>
            <p><b>ID:</b>{readdata.id}</p>
            <p><b>Name:</b>{readdata.name}</p>
            <p><b>Email:</b>{readdata.email}</p>
            <Button to="/" className="readbtn">
              Back
            </Button>
            <Button to={`/update/${readdata.id}`} className="edit_btn">
              Edit
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Read;
