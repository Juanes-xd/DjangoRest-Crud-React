import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
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
            const res = await fetch("http://localhost:8000/tasks/api/v1/auth/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (res.ok && data.access) {
                login(data);
                navigate("/tasks");
            } else {
                setError(data.message || "Error en el registro");
            }
        } catch {
            setError("Error en el registro");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Registro</h2>
            <form onSubmit={handleSubmit}>
                <input className="border p-2 rounded w-full mb-2" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                <input className="border p-2 rounded w-full mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" />
                <input className="border p-2 rounded w-full mb-2" name="password" placeholder="Password" value={form.password} onChange={handleChange} required type="password" />
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Registrarse</button>
            </form>
            <button onClick={() => navigate("/login")}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600">
                ¿Ya tienes cuenta? Inicia sesión
            </button>
        </div>
    );
}
