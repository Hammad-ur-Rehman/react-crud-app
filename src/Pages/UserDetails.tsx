import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Style/App.css";
import Button from "../Component/Button/Button";
import { getUserById, deleteUser } from "../apis/userApis";
import Loading from "../Component/Loader/Loading";

interface User {
  id: string;
  name: string;
  email: string;
}

const Read: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [readData, setReadData] = useState<User | null>(null); // readData is initially null
  const { id } = useParams<{ id: string }>(); // Get the id from URL parameters
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          const userData = await getUserById(id); // Ensure id is a number
          setReadData(userData); // readData is set to the fetched user data
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } 
    };

    if (id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm("Do you want to Delete the User data?");
    if (confirm && id) {
      setLoading(true);
      try {
        await deleteUser(id);
        navigate("/");
      } catch (error) {
        console.error("Error deleting user:", error);
      } 
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="display_data">
            <h2 className="display_heading">Read Data</h2>
            {readData ? (
              <>
                <p>
                  <b>ID:</b> {readData.id}
                </p>
                <p>
                  <b>Name:</b> {readData.name}
                </p>
                <p>
                  <b>Email:</b> {readData.email}
                </p>
                <Button to="/" variant="btn-dark">
                  Back
                </Button>
                <Button to={`/update/${readData.id}`} variant="btn-success">
                  Edit
                </Button>
                <Button onClick={handleDelete} variant="btn-danger">
                  Delete
                </Button>
              </>
            ) : (
              <p>User data not found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Read;
