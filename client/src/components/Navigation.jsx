import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/tasks">Task List</Link>
                    </li>
                    <li>
                        <Link to="/task-create">Create Task</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
