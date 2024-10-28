import { useState } from "react";

export const MainApp = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [counterStep, setCounterStep] = useState(0);

  const handleClick = () => {
    setIsStarted(true);
    setIsClosed(false);
    setCounterStep(0); // Reset counter when starting
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  const increase = () => {
    if (counterStep < 100) {
      setCounterStep(prevStep => prevStep + 1);
    }
  };

  const decrease = () => {
    if (counterStep > 0) {
      setCounterStep(prevStep => prevStep - 1);
    }
  };

  const reset = () => {
    setCounterStep(0);
  };

  // Calculate progress width based on counterStep
  const progressWidth = { width: `${counterStep}%` };

  return (
    <>
      {!isStarted ? (
        <div className="welcomeMessage">
          <p>WELCOME TO MY REACT COUNTER APP</p>
          <div className="startApp">
            <button onClick={handleClick}>CLICK HERE TO START APP</button>
          </div>
        </div>
      ) : (
        <div>
          {!isClosed ? (
            <main>
              <div className="close">
                <img
                  src="src/assets/close.svg"
                  alt="Close button"
                  onClick={handleClose}
                />
              </div>
              <div className="displayBox">{counterStep}</div>

              {/* Progress Bar */}
              <div className="progressContainer">
                <div className="progressBar" style={progressWidth}></div>
              </div>

              <div className="setButton">
                <div className="decrease">
                  <button onClick={decrease} disabled={counterStep <= 0}>
                    <img src="src/assets/remove.svg" alt="Decrease button" />
                  </button>
                </div>
                <div className="reset">
                  <button onClick={reset}>
                    <img src="src/assets/refresh.svg" alt="Reset button" />
                  </button>
                </div>
                <div className="increase">
                  <button onClick={increase} disabled={counterStep >= 100}>
                    <img src="src/assets/add.svg" alt="Increase button" />
                  </button>
                </div>
              </div>
            </main>
          ) : (
            <div className="welcomeMessage">
              <p>WELCOME TO MY REACT COUNTER APP</p>
              <div className="startApp">
                <button onClick={handleClick}>CLICK HERE TO START APP</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
