import React, { useEffect, useState } from "react";
import Button from "../Component/Button";
import { getUsers ,deleteUser } from "../api/Api";
import Loading from "../Component/Loading";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  console.log("Data received in Home:", data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        setData(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      try {
        await deleteUser(id);
        alert("Record Deleted Successfully");
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <>
      {loading ? (
        <div className="spinner">
            <Loading/>
        </div>
      ) : (
        <div className="container">
          <div className="crud_homedata">
            <h2>Crud App with Json Server</h2>
            <Button to="/create" className="createdata_btn">
              Create data
            </Button>
            <table className="table_data">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>
                        <Button to={`/update/${d.id}`} className="edit_btn">
                          Edit
                        </Button>
                        <button
                          className="del-btn"
                          onClick={() => handleDelete(d.id)}
                        >
                          Delete
                        </button>
                        <Button to={`/read/${d.id}`} className="readbtn">
                          Read
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
