import * as React from "react";
import { Column } from "./Column";
import prefixes from "./PrefixManager";

interface Props {
  /**
   * https://getbootstrap.com/docs/4.0/layout/grid/#vertical-alignment
   */
  verticalAlignment?: "center" | "baseline";
  /**
   * https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment
   */
  horizontalAlignment?: "start" | "center" | "between" | "end";
  /**
   * Rows must contain only columns to prevent negative margin issues
   */
  children: Array<React.ReactElement<Column>> | React.ReactElement<Column>;
}

export class Row extends React.Component<Props> {
  public render() {
    const classNames = [`${prefixes.row}row`];

    if (this.props.verticalAlignment) {
      classNames.push(
        `${prefixes.column}align-items-${this.props.verticalAlignment}`
      );
    }

    if (this.props.horizontalAlignment) {
      classNames.push(
        `${prefixes.column}justify-content-${this.props.horizontalAlignment}`
      );
    }
    return <div className={classNames.join(" ")}>{this.props.children}</div>;
  }
}
