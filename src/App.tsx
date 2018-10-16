import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import "./App.css";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootstrap Grid Component</h1>
        </header>
        <Row verticalAlignment="center">
          <Column size={4}>
            <div>
              Vestibulum eu odio. Nullam vel sem. Maecenas vestibulum mollis
              diam. Praesent nonummy mi in odio. Fusce neque.
            </div>
            <div>
              Vestibulum eu odio. Nullam vel sem. Maecenas vestibulum mollis
              diam. Praesent nonummy mi in odio. Fusce neque.
            </div>
          </Column>
          <Column size={4}>
            <div>
              Vestibulum eu odio. Nullam vel sem. Maecenas vestibulum mollis
              diam. Praesent nonummy mi in odio. Fusce neque.
            </div>
          </Column>
          <Column size={4}>
            <div>
              Vestibulum eu odio. Nullam vel sem. Maecenas vestibulum mollis
              diam. Praesent nonummy mi in odio. Fusce neque.
            </div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;
