import React, { useState, useEffect, createContext } from "react";
import InfoWindow from "./InfoWindow";

function Body() {
  const [teams, setTeams] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [gameweek, setGameweek] = useState([]);
  const [player, setPlayer] = useState([]);
  const [topPlayer, setTopPlayer] = useState([]);
  const [photoCode, setPhotoCode] = useState([]);

  const fetchTeamsData = () => {
    fetch("/api/bootstrap-static/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeams(data.teams);
        setPlayer(data.elements);
        setTotalUsers(data.total_players);
      });
  };

  const fetchGameweekData = () => {
    fetch("/api/bootstrap-static/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let gws = data.events;
        let finishedgws = gws.filter(function (gw) {
          return gw.finished === true;
        });
        setGameweek(finishedgws);
      });
  };

  useEffect(() => {
    fetchTeamsData();
    fetchGameweekData();
  }, []);

  function reducer(e) {
    const initialValue = 0;
    e.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }

  function percentage(num) {
    return ((num / totalUsers) * 100).toFixed(2);
  }

  return (
    <div id="mainContent">
      <div className="gwbox">
        {gameweek.map((gameweekItem, index) => {
          return (
            <InfoWindow
              key={index}
              id={index}
              gameweekName={gameweekItem.name}
              topScore={gameweekItem.highest_score}
              averageScore={gameweekItem.average_entry_score}
              bboost={gameweekItem.chip_plays.map((e) => {
                if (e.chip_name === "bboost")
                  return (
                    <li>
                      Bench Boosts:
                      <strong>{percentage(e.num_played)}%</strong>{" "}
                    </li>
                  );
              })}
              tc={gameweekItem.chip_plays.map((e) => {
                if (e.chip_name === "3xc")
                  return (
                    <li>
                      Triple Captain:{" "}
                      <strong>{percentage(e.num_played)}%</strong>
                    </li>
                  );
              })}
              fh={gameweekItem.chip_plays.map((e) => {
                if (e.chip_name === "freehit")
                  return (
                    <li>
                      Wildcard: <strong>{percentage(e.num_played)}%</strong>
                    </li>
                  );
              })}
              wc={gameweekItem.chip_plays.map((e) => {
                if (e.chip_name === "wildcard")
                  return (
                    <li>
                      Free Hit: <strong>{percentage(e.num_played)}%</strong>
                    </li>
                  );
              })}
              playerImg={player
                .filter((e) => e.id === gameweekItem.top_element)
                .map((e) => e.code)}
              playerName={player
                .filter((e) => e.id === gameweekItem.top_element)
                .map((e) => e.second_name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
