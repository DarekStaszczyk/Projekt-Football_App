import { useDeletePlayerMutation } from "../../queries/useDeletePlayerMutation";
import { PlayerEntity } from "../../types"

type DeletePlayerProps = {
    onCancel: () => void;
    player: PlayerEntity;
}

export const DeletePlayer = ({ onCancel, player }: DeletePlayerProps) => {
    const { mutate, isPending } = useDeletePlayerMutation(player.id);

    const handleDelete = () => {
        mutate();
    }

    if (isPending) return <p>Loading...</p>

    return (
        <div>
            <p>Do you really want to delete player <strong>{player.name}{player.surname}</strong>?</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )

}