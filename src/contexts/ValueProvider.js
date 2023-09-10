import { createContext, useMemo, useState, useContext } from "react";
const ValueContext = createContext();
ValueContext.displayName = "ValueContext";
export const useValue = () => {
  const context = useContext(ValueContext);
  if (context === undefined) {
    throw new Error("useValue must be used within a ValueProvider");
  }
  return context;
};
const ValueProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const teamsObject = useMemo(() => {
    return { teams, setTeams };
  }, [teams, setTeams]);
  const [totalUsers, setTotalUsers] = useState([]);
  const usersObject = useMemo(() => {
    return { totalUsers, setTotalUsers };
  }, [totalUsers, setTotalUsers]);
  const [gameweek, setGameweek] = useState([]);
  const gameweekObject = useMemo(() => {
    return { gameweek, setGameweek };
  }, [gameweek, setGameweek]);
  const [player, setPlayer] = useState([]);
  const playerObject = useMemo(() => {
    return { player, setPlayer };
  }, [player, setPlayer]);
  return (
    <ValueContext.Provider
      teams={teamsObject}
      users={usersObject}
      gameweek={gameweekObject}
      player={playerObject}
    >
      {children}{" "}
    </ValueContext.Provider>
  );
};
export default ValueProvider;
