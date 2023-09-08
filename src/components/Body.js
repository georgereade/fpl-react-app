import React, { useState, useEffect } from "react";
import InfoWindow from "./InfoWindow";

function Body() {
  const [teams, setTeams] = useState([]);
  const [gameweek, setGameweek] = useState([]);

  const fetchTeamsData = () => {
    fetch("/api/bootstrap-static/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeams(data.teams);
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
    console.log(gameweek);
  }, []);

  return (
    <div id="mainContent">
      {/* <div className="gwbox">
        {teams.map((teamItem, index) => {
          return <InfoWindow key={index} id={index} teamName={teamItem.name} />;
        })}
      </div> */}
      <div className="gwbox">
        {gameweek.map((gameweekItem, index) => {
          return (
            <InfoWindow
              key={index}
              id={index}
              gameweekName={gameweekItem.name}
              topScore={gameweekItem.highest_score}
              averageScore={gameweekItem.average_entry_score}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
