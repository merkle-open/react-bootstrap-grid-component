import * as React from "react";

interface Props {
  childrne?: any;
  fluid?: boolean;
}

export class Conatiner extends React.Component<Props> {
  public render() {
    return (
      <div className={this.props.fluid ? "container-fluid" : "container"}>
        {this.props.children}
      </div>
    );
  }
}
