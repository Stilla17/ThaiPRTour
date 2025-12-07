import axios from "axios";

// === MOCKAPI BASE URL ===
const BASE = "https://68c141a798c818a69401336f.mockapi.io";

// === USERS ===
// Берём пользователей из register и админов из logij
export const getUsers = async () => {
  const resRegister = await axios.get(`${BASE}/register`);
  const resAdmins = await axios.get(`${BASE}/logij`);

  // Преобразуем админов в "юзеров" для таблицы
  const admins = resAdmins.data.map(a => ({
    id: a.id,
    firstName: a.username,
    lastName: "",
    age: 0,
    email: a.username + "@admin.com",
    active: a.active,
    role: a.role
  }));

  const users = resRegister.data.map(u => ({
    id: u.id,
    firstName: u.username || "",
    lastName: u.lastName || "",
    age: u.age || 0,
    email: u.email || "",
    active: true,
    role: "user"
  }));

  return [...admins, ...users];
};

// === ADMINS ===
export const getAdmins = async () => {
  const res = await axios.get(`${BASE}/logij`);
  return res.data;
};
export const addAdmin = async (admin) =>
  (await axios.post(`${BASE}/logij`, admin)).data;
export const deleteAdmin = async (id) =>
  await axios.delete(`${BASE}/logij/${id}`);
export const toggleAdminStatus = async (admin) =>
  await axios.put(`${BASE}/logij/${admin.id}`, { ...admin, active: !admin.active });

// === PRODUCTS ===
export const getProducts = async () => {
  const res = await axios.get(`${BASE}/products`);
  return res.data;
};

// === COMMENTS ===
export const getComments = async () => {
  const res = await axios.get(`${BASE}/comments`);
  return res.data;
};
