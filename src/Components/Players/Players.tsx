import { AddPlayer } from "./AddPlayer";
import { useGetPlayerQuery } from "../../queries/useGetPlayerQuery";
import { SinglePlayer } from "./SinglePlayer";

export const Players = () => {
    const { data, isFetching } = useGetPlayerQuery();

    if(isFetching) return <p>Loading...</p>

    if(!data) return <p>No data... </p>

    return (
        <div>
            <h1>Players</h1>
            <AddPlayer />
        <ul>
            {data.map(player => <SinglePlayer player={player} key={player.id} />)}
        </ul>
        </div>
    );
}