import { ChangeEvent, FormEvent, useState } from "react"
import { useCreatePlayerMutation } from "../../queries/useCreatePlayerMutation";
import { PlayerForm} from "./PlayerForm";

export const AddPlayer = () => {
    const { mutate, isPending } = useCreatePlayerMutation();
    const [values, setValues] = useState({
        id: '',
        name: '',
        surname: '',
        teamId: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setValues(prevValues => ({
            ...prevValues, 
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        mutate({
            name: values.name,
            surname: values.surname,
            teamId: values.teamId,
        })

        setValues({
            id: '',
            name: '',
            surname: '',
            teamId: ''
        })
    }

    return (
        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
    )
}
