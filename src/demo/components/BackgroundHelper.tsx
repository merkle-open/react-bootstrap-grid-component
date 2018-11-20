import * as React from "react";

interface Props {
  children?: any;
}

export function getDummyText(
  count: number = 45,
  str: string = "» S P A C E R « "
) {
  let txt = "";
  for (let i = 0; i < count; i++) {
    txt += str;
  }
  return txt;
}

export class BackgroundHelper extends React.PureComponent<Props> {
  public render() {
    return <div className="background-helper">{this.props.children}</div>;
  }
}
