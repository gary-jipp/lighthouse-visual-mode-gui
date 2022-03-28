const { useState } = require("react");

///  Replace this code with your version of useVisualMode

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);
  const [mode, setMode] = useState(initial);

  const transition = function(newMode, replace) {
  };

  const back = function() {
  };

  // Don't forget this -> history is needed here
  return { mode, transition, back, history };
};

export default useVisualMode;