import { useState } from "react"
import { EditPlayer } from "./EditPlayer"
import { PlayerEntity } from "../../types"
import { DeletePlayer } from "../Players/DeletePlayer"

type SinglePlayerProps = {
    player: PlayerEntity,
}

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');

    const toggleEditMode = () => {
        setMode(prevMode => prevMode === 'edit' ? 'none' : 'edit');
    }
    
    const toggleDeleteMode = () => {
        setMode(prevMode => prevMode === 'delete' ? 'none' : 'delete');
    }


    return (
        <li>
            <h2><strong>{player.name}</strong> {player.surname}</h2>
            <p>Drużyna: {player.teamId}</p>

            <button onClick={toggleEditMode}>{mode === 'edit' ? 'Cancel' : 'Edit'}</button>
            {mode === 'edit' ? <EditPlayer player={player} />: undefined }

            <button onClick={toggleDeleteMode}>{mode === 'delete' ? 'Cancel' : 'Delete'}</button>
            {mode === 'delete' ? <DeletePlayer onCancel={toggleDeleteMode} player={player} />: undefined }
            </li>
    )
}