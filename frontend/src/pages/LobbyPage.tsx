import { Lobby } from "../components/lobby/Lobby";

type LobbyPageProps = {
  onNavigate: (destination: string) => void;
};

function LobbyPage({ onNavigate }: LobbyPageProps) {
  return <Lobby onNavigate={onNavigate} />;
}

export default LobbyPage;
