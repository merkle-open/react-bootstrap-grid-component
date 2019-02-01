import * as React from "react";
import prefixes from "./PrefixManager";

interface Props {
  children?: React.ReactNode;
  fluid?: boolean;
}

function getClassName(isFluid: boolean | undefined):(string) {
    const className = isFluid ? "container-fluid" : "container";
    return className;
}

export class Container extends React.Component<Props> {
  public render() {
    const { fluid } = this.props;
    const className = `${prefixes.container}${getClassName(fluid)}`
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
