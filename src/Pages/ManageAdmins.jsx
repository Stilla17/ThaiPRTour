import React, { useEffect, useState } from 'react';
import { getAdmins, addAdmin, deleteAdmin } from '../api/api';

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');

  const fetchAdmins = async () => {
    const data = await getAdmins();
    setAdmins(data);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const addHandler = async () => {
    if (!newUser || !newPass) return;
    await addAdmin({ username: newUser, password: newPass, role: 'admin' });
    setNewUser('');
    setNewPass('');
    fetchAdmins();
  };

  const deleteHandler = async (id) => {
    await deleteAdmin(id);
    fetchAdmins();
  };

  return (
    <div>
      <h2>Управление админами</h2>
      {admins.map((a) => (
        <div key={a.id}>
          {a.username} ({a.password})
          <button onClick={() => deleteHandler(a.id)}>Удалить</button>
        </div>
      ))}
      <h3>Добавить админа</h3>
      <input
        placeholder="Логин"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <input
        placeholder="Пароль"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />
      <button onClick={addHandler}>Добавить</button>
    </div>
  );
};

export default ManageAdmins;
