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
                <div><label htmlFor="title">Title</label></div>
                <input type="text" name="title" id="title" value={values.name} onChange={handleChange} />
            </div>
            <div>
            <div><label htmlFor="description">Description</label></div>
                <textarea name="description" id="description" value={values.surname} onChange={handleChange} />
            </div>
            <div>
            <div><label htmlFor="year">Year</label></div>
                <input type="number" name="year" id="year" value={values.teamId} onChange={handleChange} />
            </div>
            <button type="submit" disabled={isPending}>Save</button>
        </form>
    )
}