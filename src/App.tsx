import * as React from "react";
// import "./App.css";
import { Column } from "./components/Column";
import { Conatiner } from "./components/Container";
import { Row } from "./components/Row";
import {
  BackgroundHelper,
  getDummyText
} from "./demo/components/BackgroundHelper";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <BackgroundHelper>
          <Conatiner>
            <Row
              horizontalAlignment={{ xs: "between", sm: "center" }}
              verticalAlignment={{ xs: "baseline", sm: "center" }}
            >
              <Column size={4}>
                <div>{getDummyText()}</div>
                <div>{getDummyText()}</div>
              </Column>
              <Column size={4}>
                <div>{getDummyText()}</div>
              </Column>
              <Column size={4}>
                <div>{getDummyText()}</div>
              </Column>
            </Row>
          </Conatiner>
        </BackgroundHelper>
      </div>
    );
  }
}

export default App;
