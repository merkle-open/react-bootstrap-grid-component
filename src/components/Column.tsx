import * as React from "react";
import { Size, Viewport } from "../config/config";
import prefixes from "./PrefixManager";

type Direction = "row" | "col";
type DirectionViewport = { [key in Viewport]?: Direction };
type VerticalAlignment = "top" | "center" | "bottom" | "justify";
type VerticalAlignmentViewport = { [key in Viewport]?: VerticalAlignment };
type HorizontalAlignment = "left" | "right" | "center" | "stretch";
type HorizontalAlignmentViewport = { [key in Viewport]?: HorizontalAlignment };

interface Props {
  children?: any;
  size?: Size | { [key in Viewport]?: Size };
  direction?: Direction | DirectionViewport;
  verticalAlignment?: VerticalAlignment | VerticalAlignmentViewport;
  horizontalAlignment?: HorizontalAlignment | HorizontalAlignmentViewport;
}

const viewportClassPrefix = (viewport: Viewport) =>
  viewport === "xs" ? "" : "-" + viewport;

const flexAlignment = {
  row: {
    direction: {
      outer: (viewport: Viewport) => ``,
      inner: (viewport: Viewport) =>
        `${prefixes.column}flex${viewportClassPrefix(viewport)}-column`
    },

    vertical: {
      // TODO: Vertical & horizontal => Remove dublicated code
      top: (viewport: Viewport) =>
        `${prefixes.column}justify-content${viewportClassPrefix(
          viewport
        )}-start ${prefixes.column}align-self${viewportClassPrefix(
          viewport
        )}-start`,
      center: (viewport: Viewport) =>
        `${prefixes.column}justify-content${viewportClassPrefix(
          viewport
        )}-center ${prefixes.column}align-self${viewportClassPrefix(
          viewport
        )}-center`,
      bottom: (viewport: Viewport) =>
        `${prefixes.column}justify-content${viewportClassPrefix(
          viewport
        )}-end ${prefixes.column}align-self${viewportClassPrefix(
          viewport
        )}-end`,
      justify: (viewport: Viewport) =>
        `${prefixes.column}justify-content${viewportClassPrefix(
          viewport
        )}-between ${prefixes.column}align-self${viewportClassPrefix(
          viewport
        )}-stretch`
    },

    horizontal: {
      // TODO: Vertical & horizontal => Remove dublicated code
      left: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      right: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      center: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      stretch: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-100`
    }
  },
  col: {
    direction: {
      outer: (viewport: Viewport) => ``,
      inner: (viewport: Viewport) =>
        `${prefixes.column}flex${viewportClassPrefix(viewport)}-row`
    },

    vertical: {
      // TODO: Vertical & horizontal => Remove dublicated code
      top: (viewport: Viewport) =>
        `${prefixes.column}align-self${viewportClassPrefix(viewport)}-start ${
          prefixes.column
        }justify-content${viewportClassPrefix(viewport)}-start`,
      center: (viewport: Viewport) =>
        `${prefixes.column}align-self${viewportClassPrefix(viewport)}-center ${
          prefixes.column
        }justify-content${viewportClassPrefix(viewport)}-start`,
      bottom: (viewport: Viewport) =>
        `${prefixes.column}align-self${viewportClassPrefix(viewport)}-end ${
          prefixes.column
        }justify-content${viewportClassPrefix(viewport)}-start`,
      justify: (viewport: Viewport) =>
        `${prefixes.column}align-self${viewportClassPrefix(viewport)}-stretch ${
          prefixes.column
        }justify-content${viewportClassPrefix(viewport)}-start`
    },

    horizontal: {
      // TODO: Vertical & horizontal => Remove dublicated code
      left: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      right: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      center: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-auto ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-auto`,
      stretch: (viewport: Viewport) =>
        `${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }mr${viewportClassPrefix(viewport)}-0 ${
          prefixes.column
        }w${viewportClassPrefix(viewport)}-100`
    }
  }
};

function getDirectionForBreakpoints(
  directionBreakpoints: DirectionViewport
): { [key in Viewport]: Direction } {
  let lastBreakpoint = directionBreakpoints.xs || "top";
  const breakpointDirections = {
    xs: lastBreakpoint
  };
  ["sm", "md", "lg", "xl"].forEach(viewport => {
    breakpointDirections[viewport] =
      directionBreakpoints[viewport] || lastBreakpoint;
    lastBreakpoint = breakpointDirections[viewport];
  });
  return breakpointDirections as any;
}
export class Column extends React.PureComponent<Props> {
  public render() {
    const {
      size,
      direction,
      verticalAlignment,
      horizontalAlignment
    } = this.props;
    const sizeBreakpoints =
      typeof size === "number" ? { xs: size } : size || {};
    const directionBreakpoints =
      typeof direction === "string" ? { xs: direction } : direction || {};
    const verticalAlignmentBreakpoints =
      typeof verticalAlignment === "string"
        ? { xs: verticalAlignment }
        : verticalAlignment || {};
    const horizontalAlignmentBreakpoints =
      typeof horizontalAlignment === "string"
        ? { xs: horizontalAlignment }
        : horizontalAlignment || {};

    if (!directionBreakpoints.xs) {
      directionBreakpoints.xs = "row";
    }
    if (!verticalAlignmentBreakpoints.xs) {
      verticalAlignmentBreakpoints.xs = "top";
    }
    if (!horizontalAlignmentBreakpoints.xs) {
      horizontalAlignmentBreakpoints.xs = "stretch";
    }

    const outerClassName = [`${prefixes.column}d-flex`];
    const innerClassName = [`${prefixes.column}d-flex`];

    Object.keys(sizeBreakpoints).forEach(
      (sizeBreakpointsName: keyof typeof sizeBreakpoints) => {
        const breakpointSize = sizeBreakpoints[sizeBreakpointsName];
        outerClassName.push(
          `${prefixes.row}col${viewportClassPrefix(
            sizeBreakpointsName
          )}-${breakpointSize}`
        );
      }
    );

    Object.keys(directionBreakpoints).forEach(
      (directionBreakpointName: keyof typeof directionBreakpoints) => {
        const breakpointDirection =
          directionBreakpoints[directionBreakpointName];
        if (breakpointDirection) {
          outerClassName.push(
            flexAlignment[breakpointDirection].direction.outer(
              directionBreakpointName
            )
          );
          innerClassName.push(
            flexAlignment[breakpointDirection].direction.inner(
              directionBreakpointName
            )
          );
        }
      }
    );

    const calculatedFlexDirections = getDirectionForBreakpoints(
      directionBreakpoints
    );
    Object.keys(verticalAlignmentBreakpoints).forEach(
      (
        verticalAlignmentBreakpointName: keyof typeof verticalAlignmentBreakpoints
      ) => {
        const flexDirection =
          calculatedFlexDirections[verticalAlignmentBreakpointName];
        const breakpointVerticalAlignment =
          verticalAlignmentBreakpoints[verticalAlignmentBreakpointName];

        if (breakpointVerticalAlignment) {
          innerClassName.push(
            flexAlignment[flexDirection].vertical[breakpointVerticalAlignment](
              verticalAlignmentBreakpointName
            )
          );
        }
      }
    );

    Object.keys(horizontalAlignmentBreakpoints).forEach(
      (
        horizontalAlignmentBreakpointName: keyof typeof horizontalAlignmentBreakpoints
      ) => {
        const flexDirection =
          calculatedFlexDirections[horizontalAlignmentBreakpointName];
        const breakpointHorizontalAlignment =
          horizontalAlignmentBreakpoints[horizontalAlignmentBreakpointName];
        if (breakpointHorizontalAlignment) {
          innerClassName.push(
            flexAlignment[flexDirection].horizontal[
              breakpointHorizontalAlignment
            ](horizontalAlignmentBreakpointName)
          );
        }
      }
    );

    return (
      <div className={outerClassName.join(" ").trim()}>
        <div className={innerClassName.join(" ").trim()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
