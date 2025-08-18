import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/useAuth";

export function Navigation() {
    const { access, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // Ocultar logout en login y register
    const hideLogout = ["/login", "/register"].includes(location.pathname);
    return (
        <div className="flex justify-between py-3 bg-gray-800 p-4 rounded-md mb-4">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/tasks" className="text-white hover:underline ">Task List</Link>
                    </li>
                    <li>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            <Link to="/task-create" className="text-white">Create Task</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            {access && !hideLogout && (
                <button onClick={() => { logout(); navigate("/login"); }} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
            )}
        </div>
    )
}
