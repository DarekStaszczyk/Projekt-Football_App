import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Players } from "./Components/Players/Players";
import { PlayerStats } from "./Components/Players/PlayerStats";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <PlayerStats />
      <Players />
    </QueryClientProvider>
  )
}