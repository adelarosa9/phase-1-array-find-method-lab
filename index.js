// code your solution here
function superbowlWin(games) {
    const winningGame = games.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }