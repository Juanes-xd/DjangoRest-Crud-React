import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data: { title, description } } = await getTask(params.id)
                setValue("title", title)
                setValue("description", description)
            }
        }
        loadTask();
    }, [params.id, setValue])

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success("Task updated successfully")
        } else {
            await createTask(data)
            toast.success("Task created successfully")
        }
        navigate("/tasks")
    })

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={onSubmit}>
                <input className='border border-gray-300 p-2 rounded-md w-full mb-2' type="text" placeholder="title" {...register("title", { required: true })} />
                {errors.title && <span className='text-red-500'>This field is required</span>}
                <textarea className='border border-gray-300 p-2 rounded-md w-full mb-2' rows="4" placeholder="Description" {...register("description", { required: true })}></textarea>
                {errors.description && <span className='text-red-500'>This field is required</span>}
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Save</button>
            </form>
            {params.id && <button onClick={async () => {
                const accepted = window.confirm("Are you sure you want to delete this task?")
                if (accepted) {
                    await deleteTask(params.id)
                    toast.success("Task deleted successfully")
                    navigate("/tasks")
                }
            }} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>}
        </div>
    )
}


