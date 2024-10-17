import axios from "axios";


interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties here
}

// interface NewUser {
//   name: string;
//   email: string;
//   // Add other user properties here
// }

// interface UpdateUser {
//   name?: string;
//   email?: string;
//   // Add other user properties here
// }


const BASE_URL = "http://localhost:3030";

export const getUsers = async():Promise<User[]> => {
  try {
    const res = await axios.get<User[]>(`${BASE_URL}/users`);
    return res.data;
  } catch (error:any){
    throw new Error(error);
  }
};

export const getUserById = async (id:string):Promise<User> => {
  try {
     console.log(id);
    const res = await axios.get<User>(`${BASE_URL}/users/${id}`);
    return res.data;
  } catch (error:any){
    throw new Error(error);
  }
};

export const createUser = async (userData:Partial<User>):Promise<User> => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, userData);
    return res.data;
  } catch (error:any){
    throw new Error(error);
  }
};


export const deleteUser = async (id:string):Promise<void> => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/${id}`);
    return res.data;
  } catch (error:any){

    console.log(error)

  }
};

export const updateUser = async (id:string, userData:Partial<User>):Promise<User> => {
  try {
    const res = await axios.put<User>(`${BASE_URL}/users/${id}`, userData);
    return res.data;
  } catch (error:any){
    throw new Error(error);
  }
};
