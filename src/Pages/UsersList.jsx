import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/api';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => setUsers(await getUsers());
    fetchData();
  }, []);

  return (
    <div>
      <h2>Список пользователей</h2>
      {users.map((u) => (
        <div key={u.id}>
          {u.firstName} {u.lastName} — {u.age} лет
        </div>
      ))}
    </div>
  );
};

export default UsersList;
