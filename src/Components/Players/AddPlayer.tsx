import { useState } from "react"

export const AddPlayer = () => {
    const {mutate, isPending} = useCreatePlayerMutation();
    const [values, setValues] = useState({
        id: '',
        name: '',
        surname: '',
        teamId: 0
    });

    const handleChange = (e. ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value
        }))
    }

    const  handleSubmit = (e: FormEvent) => {
        e.preventDefauld();

        mutate({
            id: values.id,
            name: values.name,
            surname: values.surname,
            teamId: values.teamId,
        })

        setValues({
            id: '',
            name: '',
            surname: '',
            teamId: 0
        })
    }

    return (
        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
    )
}