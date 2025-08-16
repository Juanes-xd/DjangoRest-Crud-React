import { Link } from "react-router-dom"

export function Navigation() {
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
        </div>
    )
}
