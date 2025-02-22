import { useGetPlayerQuery } from "../../queries/useGetPlayerQuery"

export const PlayerStats = () => {
    const { data, isFetching } = useGetPlayerQuery();

    if(isFetching) return <p>Loading player stats...</p>

    return (
        <div>
            Player count: <strong>{data?.length || 'No data'}</strong>
        </div>
    )
}