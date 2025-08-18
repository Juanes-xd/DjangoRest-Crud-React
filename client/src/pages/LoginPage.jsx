import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/api/v1/auth/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (res.ok && data.access) {
                login(data);
                navigate("/tasks");
            } else {
                setError("Credenciales incorrectas");
            }
        } catch {
            setError("Error en el login");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input className="border p-2 rounded w-full mb-2" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                <input className="border p-2 rounded w-full mb-2" name="password" placeholder="Password" value={form.password} onChange={handleChange} required type="password" />
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Entrar</button>
            </form>
            <button onClick={() => navigate("/register")}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600">
                ¿No tienes cuenta? Regístrate
            </button>
        </div>
    );
}
