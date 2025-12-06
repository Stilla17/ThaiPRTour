import { useState } from "react";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
function AdminLogin({ setIsAdmin }) {
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (password === "1234") {
            setIsAdmin(true);
            toast.success('Пароль успешный');
        } else {
            toast.error('Пароль неправильный');
        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <Toaster position="top-right" />
            <div className="p-6 bg-white shadow rounded">
                <h2 className="text-xl font-bold mb-4">Вход в админ-панель</h2>

                <input
                    type="password"
                    placeholder="Введите пароль"
                    className="border px-3 py-2 rounded w-full"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                    Войти
                </button>
            </div>
        </div>
    );
}
export default AdminLogin