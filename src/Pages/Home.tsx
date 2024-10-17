// import React, { useEffect, useState } from "react";
// import Button from "../Component/Button/Button";
// import  {getUsers,deleteUser} from "../apis/userApis";
// import Loading from "../Component/Loader/Loading";

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const users = await getUsers();
//         setData(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Do you like to Delete the User?");
//     if (confirm) {
//       try {
//         await deleteUser(id);
//         alert("Record Deleted Successfully");
//         setData((prevData) => prevData.filter((item) => item.id !== id));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <div className="spinner">
//           <Loading />
//         </div>
//       ) : (
//         <div className="container">
//           <div className="crud_homedata">
//             <h2>Crud App with Json Server</h2>
//             <Button to="/create" variant="btn-dark">
//               Create data
//             </Button>
//             <table className="table_data">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data && data.length > 0 ? (
//                   data.map((user, i) => (
//                     <tr key={i}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td className="table_btn">
//                         <Button to={`/update/${user.id}`} variant="btn-success">
//                           Edit
//                         </Button>
//                         <Button
//                           variant="btn-danger"
//                           onClick={() => handleDelete(user.id)}
//                         >
//                           Delete
//                         </Button>
//                         <Button to={`/read/${user.id}`} variant="btn-info">
//                           Read
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4">No data available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

 
 // After Typescript


import React, { useEffect, useState } from "react";
import Button from "../Component/Button/Button";
import { getUsers, deleteUser } from "../apis/userApis";
import Loading from "../Component/Loader/Loading";


interface User {
  id: string;
  name: string;
  email: string;
}


const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
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

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Do you like to Delete the User?");
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
          <Loading />
        </div>
      ) : (
        <div className="container">
          <div className="crud_homedata">
            <h2>Crud App with Json Server</h2>
            <Button to="/create" variant="btn-dark">
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
                  data.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="table_btn">
                        <Button to={`/update/${user.id}`} variant="btn-success">
                          Edit
                        </Button>
                        <Button
                          variant="btn-danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                        <Button to={`/read/${user.id}`} variant="btn-info">
                          Read
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No data available</td>
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
