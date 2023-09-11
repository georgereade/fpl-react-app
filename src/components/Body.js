import React, { useEffect, useContext } from "react";
import InfoWindow from "./InfoWindow";
import { AllContext } from "../contexts/AllContext.js";

function Body() {
  const { totalUsers, setTotalUsers } = useContext(AllContext);
  const { gameweek, setGameweek } = useContext(AllContext);
  const { player, setPlayer } = useContext(AllContext);

  const fetchTeamsData = () => {
    fetch("/api/bootstrap-static/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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

  function percentage(num) {
    return ((num / totalUsers) * 100).toFixed(2);
  }

  return (
    <div id="mainContent">
      <div className="card-container">
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
                      Triple Captain:
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
              topPlayerName={player
                .filter((e) => e.id === gameweekItem.top_element)
                .map((e) => e.first_name + " " + e.second_name)}
              mostCaptained={player
                .filter((e) => e.id === gameweekItem.most_captained)
                .map((e) => e.first_name + " " + e.second_name)}
              topPlayerPoints={gameweekItem.top_element_info.points}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
