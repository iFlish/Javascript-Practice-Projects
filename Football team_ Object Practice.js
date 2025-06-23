const team = {
  _players: [
    {
      firstName: "Lionel",
      lastName: "Messi",
      age: 36,
    },
    {
      firstName: "Megan",
      lastName: "Rapinoe",
      age: 39,
    },
    {
      firstName: "Kylian",
      lastName: "Mbappé",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "Tigers",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Lions",
      teamPoints: 38,
      opponentPoints: 35,
    },
    {
      opponent: "Sharks",
      teamPoints: 55,
      opponentPoints: 40,
    },
  ],

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponents: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    this._games.push(game);
  },

  get players() {
    return _players;
  },

  get games() {
    return _games;
  },
};

team.addPlayer("John", "cena", 40);
team.addGame('Titans', 100,98);
console.log(team._players);
console.log(team._games);
