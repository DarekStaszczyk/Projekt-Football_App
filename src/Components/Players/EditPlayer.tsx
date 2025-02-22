import { ChangeEvent, FormEvent, useState } from "react";
import { PlayerEntity } from "../../types"
import { PlayerForm } from "../Players/PlayerForm";
import { useUpdatePlayerMutation } from "../../queries/useUpdatePlayerMutation";

type EditPlayerProps = {
    player: PlayerEntity;
}

export const EditPlayer = ({player}: EditPlayerProps) => {  
        const { mutate, isPending} = useUpdatePlayerMutation(player.id);

        const [values, setValues] = useState({
            name: player.name,
            surname: player.surname,
            teamId: player.teamId
        });
    
        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value, type } = e.target;
    
            setValues(prevValues => ({
                ...prevValues, 
                [name]: type === 'number' ? Number(value) : value
            }))
        }
    
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
    
            mutate({
                name: values.name,
                surname: values.surname,
                teamId: values.teamId,
            })
        }
    
        return ( 
            <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
        )
    }
