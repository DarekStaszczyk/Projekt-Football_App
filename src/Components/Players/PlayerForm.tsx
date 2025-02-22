import { ChangeEvent, FormEvent } from "react";
import { PlayerDto } from "../../types";

type PlayerFromProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    values: PlayerDto;
    isPending: boolean;
    
}

export const PlayerForm = ( { handleSubmit, handleChange, values, isPending }: PlayerFromProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div><label htmlFor="name">Imie</label></div>
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
            </div>
            <div>
            <div><label htmlFor="surname">Nazwisko</label></div>
                <input name="surname" id="surname" value={values.surname} onChange={handleChange} />
            </div>
            <div>
            <div><label htmlFor="teamId">Numer drużyny</label></div>
                <input type="number" name="teamId" id="teamId" value={values.teamId} onChange={handleChange} />
            </div>
            <button type="submit" disabled={isPending}>Save</button>
        </form>
    )
}