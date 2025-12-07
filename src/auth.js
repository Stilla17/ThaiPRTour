import axios from "axios";

// ВАШ MOCKAPI ДЛЯ АДМИНОВ
const API_ADMINS = "https://68c141a798c818a69401336f.mockapi.io/logij";

const auth = {
  login: async (username, password) => {
    try {
      const res = await axios.get(API_ADMINS);
      const admins = res.data;

      const superadmin = admins.find(a => a.role === "superadmin" && a.username === username && a.password === password);
      if (superadmin && superadmin.active !== false) { // Проверка активности
        localStorage.setItem("role", "superadmin");
        localStorage.setItem("user", username);
        return "superadmin";
      }

      const admin = admins.find(a => (a.role === "admin" || a.role === "moderator" || a.role === "editor") && a.username === username && a.password === password);
      if (admin && admin.active !== false) { // Проверка активности
        // Сохраняем как общую роль 'admin'
        localStorage.setItem("role", "admin"); 
        localStorage.setItem("user", username);
        return "admin";
      }

      return null;
    } catch (error) {
      console.error("Auth API Error:", error);
      return 'error'; 
    }
  },

  logout: () => {
    localStorage.clear();
  },

  getRole: () => localStorage.getItem("role"),
  getUser: () => localStorage.getItem("user")
};

export default auth;