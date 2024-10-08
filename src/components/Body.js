import React, { useEffect, useContext } from "react";
import GameweekWindow from "./GameweekWindow.js";
import { AllContext } from "../contexts/AllContext.js";
import TeamsWindow from "./TeamsWindow.js";

function Body() {
  const { totalUsers, setTotalUsers } = useContext(AllContext);
  const { gameweek, setGameweek } = useContext(AllContext);
  const { player, setPlayer } = useContext(AllContext);
  const { teams, setTeams } = useContext(AllContext);

  const fetchTeamsData = () => {
    fetch("https://cors-proxy-90954623675.europe-west1.run.app/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        "x-cors-headers": JSON.stringify({
          // allows to send forbidden headers
          // https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
          cookies: "x=123",
        }),
      },
    })
      .then((response) => {
        if (!response.ok) {
          // This handles if the API returns a 404 or other error codes
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPlayer(data.elements);
        setTeams(data.teams);
        setTotalUsers(data.total_players);
      })
      .catch((error) => {
        console.error("There was an issue with the fetch:", error);
      });
  };

  const fetchGameweekData = () => {
    fetch("https://cors-proxy-90954623675.europe-west1.run.app/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "x-cors-headers": JSON.stringify({
          // allows to send forbidden headers
          // https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
          cookies: "x=123",
        }),
      },
    })
      .then((response) => {
        if (!response.ok) {
          // This handles if the API returns a 404 or other error codes
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const headers = JSON.parse(
          response.headers.get("cors-received-headers")
        );
        console.log(headers);
        return response.json();
      })
      .then((data) => {
        let gws = data.events;
        let finishedgws = gws.filter(function (gw) {
          return gw.finished === true;
        });
        setGameweek(finishedgws);
      })
      .catch((error) => {
        console.error("There was an issue with the fetch:", error);
      });
  };

  useEffect(() => {
    fetchTeamsData();
    fetchGameweekData();
  }, []); // This stops useEffect from running continuously

  function userPercentage(num) {
    return ((num / totalUsers) * 100).toFixed(2);
  }

  const reducer = (accumulator, item) => {
    return accumulator + item;
  };

  const grandTotalPoints = player.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total_points;
  }, 0);

  function teamPercentage(num) {
    return ((num / grandTotalPoints) * 100).toFixed(2);
  }

  return (
    <div id="mainContent">
      <div className="gw-card-container">
        {gameweek.map((gameweekItem, index) => {
          return (
            <GameweekWindow
              key={index}
              id={index}
              gameweekName={gameweekItem.name}
              topScore={gameweekItem.highest_score}
              averageScore={gameweekItem.average_entry_score}
              bb={gameweekItem.chip_plays
                .filter((e) => e.chip_name === "bboost")
                .map((e) => userPercentage(e.num_played))}
              tc={gameweekItem.chip_plays
                .filter((e) => e.chip_name === "3xc")
                .map((e) => userPercentage(e.num_played))}
              fh={gameweekItem.chip_plays
                .filter((e) => e.chip_name === "freehit")
                .map((e) => userPercentage(e.num_played))}
              wc={gameweekItem.chip_plays
                .filter((e) => e.chip_name === "wildcard")
                .map((e) => userPercentage(e.num_played))}
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
      </div>{" "}
      <div className="topPanel"></div>{" "}
      <div className="team-card-container">
        {teams.map((teamItem, index) => {
          return (
            <TeamsWindow
              key={index}
              id={index}
              teamName={teamItem.name}
              strength={teamItem.strength}
              badge={teamItem.code}
              playerPoints={player
                .filter((e) => e.team_code === teamItem.code)
                .map((e) => e.total_points)
                .reduce(reducer)}
              teamProportionOfTotal={teamPercentage(
                player
                  .filter((e) => e.team_code === teamItem.code)
                  .map((e) => e.total_points)
                  .reduce(reducer)
              )}
              topPlayerPoints={player
                .filter((e) => e.team_code === teamItem.code)
                .map((e) => e.total_points)
                .reduce((a, b) => Math.max(a, b), -Infinity)}
              topPlayerName={player
                .filter((e) => e.team_code === teamItem.code)
                .filter(
                  (e) =>
                    e.total_points ===
                    player
                      .filter((e) => e.team_code === teamItem.code)
                      .map((e) => e.total_points)
                      .reduce((a, b) => Math.max(a, b), -Infinity)
                )
                .map((e) => e.second_name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
