import React from "react";
import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <h1 className="text-3xl text-center"> Loading users..</h1>;
  }

  return (
    <div className="">
      <h1 className="text-3xl text-blue-900 text-center">List of users</h1>
      <div className="flex justify-center flex-wrap items-center gap-3">
        {users.map((user) => {
            const {id,name, email, address:{suite, street, city}} = user
          return (
            <div
              key={id}
              className="border border-gray-300 shadow-lg p-2 max-w-[200px] rounded-xl "
            >
              <h1>{name}</h1>
              <p>{email}</p>
              <p>
                Address: {suite}, {street}
                {city}.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
