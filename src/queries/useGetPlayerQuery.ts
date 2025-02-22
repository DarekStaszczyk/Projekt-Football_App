import { useQuery } from "@tanstack/react-query"
import { PlayerEntity } from "../types";
import { useApi } from "../hooks/useApi";

export const useGetPlayerQuery = () => {
    const { apiGet } = useApi();

    const { data, isFetching } = useQuery<PlayerEntity[]>({
        queryKey: ['players'],
        queryFn: async() => {
            return apiGet<PlayerEntity[]>('players');
        }
    })

    return { data, isFetching }
}