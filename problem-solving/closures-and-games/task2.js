// 2:Write a function pingPongTracker that accepts no arguments and returns an object with thefollowing methods:...
/**
 * Creates a ping pong tracker with methods to track play time,
 * play new games, and evaluate skill level.
 * @returns {Object}
 */
function pingPongTracker() {
  let totalMinutes = 0;

  const LEVELS = {
    LOW: "I need to improve my game",
    MID: "You need to improve your game",
    HIGH: "Wow, I have wasted a lot of time",
  };

  return {
    /**
     * Returns total minutes spent playing ping pong.
     * @returns {number}
     */
    timeSpentPlaying() {
      return totalMinutes;
    },

    /**
     * Increases total time by 15 minutes.
     * @returns {string}
     */
    playOneGame() {
      totalMinutes += 15;
      return "Game played";
    },

    /**
     * Returns player's level based on time spent.
     * @returns {string}
     */
    myLevel() {
      if (totalMinutes < 30) return LEVELS.LOW;
      if (totalMinutes <= 100) return LEVELS.MID;
      return LEVELS.HIGH;
    },
  };
}

// Usage example:
const myGame = pingPongTracker();

myGame.playOneGame(); // "Game played"
myGame.playOneGame(); // "Game played"
console.log(myGame.timeSpentPlaying()); // 30
console.log(myGame.myLevel()); // "You need to improve your game"
