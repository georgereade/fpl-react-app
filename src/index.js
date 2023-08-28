import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery';

function teamRank (team) {
  if (team === "MCI") {
      return 1;
  } if (team === "ARS") {
      return 2;
  } if (team === "MUN") {
      return 3;
  } if (team === "NTD") {
      return 4;
  } if (team === "LIV") {
      return 5;
  } if (team === "BHA") {
      return 6;
  } if (team === "AVL") {
      return 7;
  } if (team === "TOT") {
      return 8;
  } if (team === "BRE") {
      return 9;
  } if (team === "FUL") {
      return 10;
  } if (team === "CRY") {
      return 11;
  } if (team === "CHE") {
      return 12;
  } if (team === "WOL") {
      return 13;
  } if (team === "WHU") {
      return 14;
  } if (team === "BOU") {
      return 15;
  } if (team === "NFO") {
      return 16;
  } if (team === "EVE") {
      return 17;
  } if (team === "BUR") {
      return 18;
  } if (team === "SHU") {
      return 19;
  } if (team === "LUT") {
      return 20;
  } if (team === "NONE") {
      return 21;
  } 
};

// add class to html elements based on fixture difficulty. Included a 3 point difficulty difference from 0 to determine close games

function rankFixture (team1,team2) {
  if (opponent === "NONE") {
      $(".fix-" + currentFixture).addClass("nofixture");
  } if (team1 > (team2 + 3)) {
      $(".fix-" + currentFixture).addClass("hardgame");
  } if (team1 < (team2 -3)) {
      $(".fix-" + currentFixture).addClass("easygame");
  } else {
      $(".fix-" + currentFixture).addClass("mediumgame");
  }
  console.log(team1 + "vs" + team2);
};

for (var i=1; i < 61; i++) {
  var currentFixture = [i];
  var homeTeam = $(".fix-" + currentFixture).attr("id");
  var opponent = $(".fix-" + currentFixture).text();
  var team1 = teamRank(homeTeam);
  var team2 = teamRank(opponent);
  rankFixture(team1,team2);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

