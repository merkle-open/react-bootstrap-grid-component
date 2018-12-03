import * as React from "react";
import { Viewport } from "../config/config";
import prefixes from "./PrefixManager";

type VerticalAlignment = "center" | "baseline";
type VerticalAlignmentViewport = { [key in Viewport]?: VerticalAlignment };
type HorizontalAlignment = "start" | "center" | "between" | "end";
type HorizontalAlignmentViewport = { [key in Viewport]?: HorizontalAlignment };

interface Props {
  /**
   * https://getbootstrap.com/docs/4.0/layout/grid/#vertical-alignment
   */
  verticalAlignment?: VerticalAlignment | VerticalAlignmentViewport;
  /**
   * https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment
   */
  horizontalAlignment?: HorizontalAlignment | HorizontalAlignmentViewport;
  /**
   * Rows must contain only columns to prevent negative margin issues
   */
  children: React.ReactNode;
}

const viewportClassPrefix = (viewport: Viewport) =>
  viewport === "xs" ? "" : "-" + viewport;

export class Row extends React.Component<Props> {
  public render() {
    const { verticalAlignment, horizontalAlignment } = this.props;
    const classNames = [`${prefixes.row}row`];
    const verticalAlignmentBreakpoints =
      typeof verticalAlignment === "string"
        ? { xs: verticalAlignment }
        : verticalAlignment || {};

    const horizontalAlignmentBreakpoints =
      typeof horizontalAlignment === "string"
        ? { xs: horizontalAlignment }
        : horizontalAlignment || {};

    if (verticalAlignment) {
      Object.keys(verticalAlignmentBreakpoints).forEach(
        (breakpointName: keyof typeof verticalAlignmentBreakpoints) => {
          const breakpointValue = verticalAlignmentBreakpoints[breakpointName];
          classNames.push(
            `${prefixes.column}align-items${viewportClassPrefix(
              breakpointName
            )}-${breakpointValue}`
          );
        }
      );

      // classNames.push(
      //   `${prefixes.column}align-items-${verticalAlignment}`
      // );
    }

    if (horizontalAlignment) {
      Object.keys(horizontalAlignmentBreakpoints).forEach(
        (breakpointName: keyof typeof horizontalAlignmentBreakpoints) => {
          const breakpointValue =
            horizontalAlignmentBreakpoints[breakpointName];

          console.log(breakpointName, breakpointValue);

          classNames.push(
            `${prefixes.column}justify-content${viewportClassPrefix(
              breakpointName
            )}-${breakpointValue}`
          );
        }
      );

      // classNames.push(
      //   `${prefixes.column}justify-content-${horizontalAlignment}`
      // );
    }
    return <div className={classNames.join(" ")}>{this.props.children}</div>;
  }
}
