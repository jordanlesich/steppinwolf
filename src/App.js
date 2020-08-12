import React, { useEffect } from "react";
import Stepper from "./components/stepper";
import axios from "axios";

// const REPO = "https://github.com/jordanlesich/steppinwolftest";

function App() {
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: REPO,
  //     headers: {
  //       Accept: "application/vnd.github.v3+json",
  //     },
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <Stepper />
    </div>
  );
}

export default App;
