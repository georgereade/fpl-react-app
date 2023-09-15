import React, { useState, createContext } from "react";

export const AllContext = createContext(null);

export const ContextProvider = (props) => {
  const [teams, setTeams] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [gameweek, setGameweek] = useState([]);
  const [player, setPlayer] = useState([]);
  const [gwstatsChecked, setgwstatsChecked] = useState([]);
  const [teamstatsChecked, setteamstatsChecked] = useState([]);
  return (
    <AllContext.Provider
      value={{
        teams,
        setTeams,
        totalUsers,
        setTotalUsers,
        gameweek,
        setGameweek,
        player,
        setPlayer,
        gwstatsChecked,
        setgwstatsChecked,
        teamstatsChecked,
        setteamstatsChecked,
      }}
    >
      {" "}
      {props.children}{" "}
    </AllContext.Provider>
  );
};
