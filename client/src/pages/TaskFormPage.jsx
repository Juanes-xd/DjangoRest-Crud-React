import { useForm } from 'react-hook-form'

export function TaskFormPage() {

    const { register } = useForm()


    return (
        <div>
            <form action="">
                <input type="text" placeholder="tittle" {...register("title,", { required: true })} />
                <textarea rows="4" placeholder="Desccription"></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}


