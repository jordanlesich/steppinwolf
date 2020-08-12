import React from "react";
import Stepper from "./components/stepper";
import { DataProvider } from "./contexts/DataContext";

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
    <DataProvider>
      <Stepper />
    </DataProvider>
  );
}

export default App;
