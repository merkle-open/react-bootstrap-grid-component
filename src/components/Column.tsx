import * as React from 'react';
import { Size, Viewport } from './config';
import prefixes from './PrefixManager';

type Direction = 'row' | 'col';
type DirectionViewport = { [key in Viewport]?: Direction };
type VerticalAlignment = 'top' | 'center' | 'bottom' | 'justify';
type VerticalAlignmentViewport = { [key in Viewport]?: VerticalAlignment };
type HorizontalAlignment = 'left' | 'right' | 'center' | 'stretch';
type HorizontalAlignmentViewport = { [key in Viewport]?: HorizontalAlignment };
type AlignmentViewport = VerticalAlignmentViewport | HorizontalAlignmentViewport;
type Orientation = 'vertical' | 'horizontal';
type BreakpointAligment = VerticalAlignment | HorizontalAlignment | undefined;
type OffsetViewport = { [key in Viewport]?: Size };
type Order = 'first' | 'last';
type OrderViewport = { [key in Viewport]?: Size | Order };
type Placement = 'order' | 'offset';

export interface ColumnProps {
	children?: any;
	size?: Size | { [key in Viewport]?: Size };
	direction?: Direction | DirectionViewport;
	verticalAlignment?: VerticalAlignment | VerticalAlignmentViewport;
	horizontalAlignment?: HorizontalAlignment | HorizontalAlignmentViewport;
	offset?: Size | { [key in Viewport]?: Size };
	order?: Size | Order | { [key in Viewport]?: Size | Order };
	className?: string;
}

const viewportClassPrefix = (viewport: Viewport) => (viewport === 'xs' ? '' : '-' + viewport);

const flexAlignment = {
	row: {
		direction: (viewport: Viewport) => `${prefixes.column}flex${viewportClassPrefix(viewport)}-column`,
		vertical: {
			top: (viewport: Viewport) =>
				`${prefixes.column}justify-content${viewportClassPrefix(viewport)}-start ${
					prefixes.column
				}align-self${viewportClassPrefix(viewport)}-start`,
			center: (viewport: Viewport) =>
				`${prefixes.column}justify-content${viewportClassPrefix(viewport)}-center ${
					prefixes.column
				}align-self${viewportClassPrefix(viewport)}-center`,
			bottom: (viewport: Viewport) =>
				`${prefixes.column}justify-content${viewportClassPrefix(viewport)}-end ${
					prefixes.column
				}align-self${viewportClassPrefix(viewport)}-end`,
			justify: (viewport: Viewport) =>
				`${prefixes.column}justify-content${viewportClassPrefix(viewport)}-between ${
					prefixes.column
				}align-self${viewportClassPrefix(viewport)}-stretch`,
		},
	},
	col: {
		direction: (viewport: Viewport) => `${prefixes.column}flex${viewportClassPrefix(viewport)}-row`,
		vertical: {
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
				}justify-content${viewportClassPrefix(viewport)}-start`,
		},
	},
	horizontal: {
		left: (viewport: Viewport) =>
			`${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${prefixes.column}mr${viewportClassPrefix(
				viewport
			)}-auto ${prefixes.column}w${viewportClassPrefix(viewport)}-auto`,
		right: (viewport: Viewport) =>
			`${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${prefixes.column}mr${viewportClassPrefix(
				viewport
			)}-0 ${prefixes.column}w${viewportClassPrefix(viewport)}-auto`,
		center: (viewport: Viewport) =>
			`${prefixes.column}ml${viewportClassPrefix(viewport)}-auto ${prefixes.column}mr${viewportClassPrefix(
				viewport
			)}-auto ${prefixes.column}w${viewportClassPrefix(viewport)}-auto`,
		stretch: (viewport: Viewport) =>
			`${prefixes.column}ml${viewportClassPrefix(viewport)}-0 ${prefixes.column}mr${viewportClassPrefix(
				viewport
			)}-0 ${prefixes.column}w${viewportClassPrefix(viewport)}-100`,
	},
};

function getDirectionForBreakpoints(directionBreakpoints: DirectionViewport): { [key in Viewport]: Direction } {
	let lastBreakpoint = directionBreakpoints.xs || 'row';
	const breakpointDirections = {
		xs: lastBreakpoint,
	};
	['sm', 'md', 'lg', 'xl'].forEach((viewport) => {
		breakpointDirections[viewport] = directionBreakpoints[viewport] || lastBreakpoint;
		lastBreakpoint = breakpointDirections[viewport];
	});
	return breakpointDirections as any;
}

function populateOuterClasses(sizeBreakpointsName: Viewport, breakpointSize: number | undefined): string[] {
	const outerClassNames: string[] = [];
	if (breakpointSize === 0) {
		outerClassNames.push(`${prefixes.row}d${viewportClassPrefix(sizeBreakpointsName)}-none`);
	} else {
		outerClassNames.push(`${prefixes.row}d${viewportClassPrefix(sizeBreakpointsName)}-flex`);
		const className =
			breakpointSize === undefined
				? `${prefixes.row}col`
				: `${prefixes.row}col${viewportClassPrefix(sizeBreakpointsName)}-${breakpointSize}`;
		outerClassNames.push(className);
	}

	return outerClassNames;
}

function populatePlacementClasses(offsetBreakpoints: OffsetViewport | OrderViewport, placement: Placement): string[] {
	const classNames: string[] = [];

	Object.keys(offsetBreakpoints).forEach((offsetBreakpointName: keyof typeof offsetBreakpoints) => {
		const breakpointSize = offsetBreakpoints[offsetBreakpointName];
		classNames.push(`${prefixes.row}${placement}${viewportClassPrefix(offsetBreakpointName)}-${breakpointSize}`);
	});

	return classNames;
}

function getClassName(
	breakpointName: Viewport,
	breakpointAlignment: BreakpointAligment,
	orientation: Orientation,
	flexDirection: string
): string {
	let className: string = '';
	if (flexAlignment[flexDirection][orientation]) {
		className = flexAlignment[flexDirection][orientation][breakpointAlignment](breakpointName);
	} else {
		className = flexAlignment[orientation][breakpointAlignment](breakpointName);
	}
	return className;
}

function populateInnerClasses(
	alignmentBreakpoints: AlignmentViewport,
	calculatedFlexDirections: Object,
	orientation: Orientation
): string[] {
	const innerClassName: string[] = [];

	Object.keys(alignmentBreakpoints).forEach((breakpointName: keyof typeof alignmentBreakpoints) => {
		const flexDirection = calculatedFlexDirections[breakpointName];
		const breakpointAlignment = alignmentBreakpoints[breakpointName];

		if (breakpointAlignment) {
			const appointedClassName = getClassName(breakpointName, breakpointAlignment, orientation, flexDirection);
			innerClassName.push(appointedClassName);
		}
	});

	return innerClassName;
}

export class Column extends React.PureComponent<ColumnProps> {
	public render() {
		const { size, direction, verticalAlignment, horizontalAlignment, offset, order, className } = this.props;
		const sizeBreakpoints = typeof size === 'number' ? { xs: size } : size || {};
		const directionBreakpoints = typeof direction === 'string' ? { xs: direction } : direction || {};
		const verticalAlignmentBreakpoints =
			typeof verticalAlignment === 'string' ? { xs: verticalAlignment } : verticalAlignment || {};
		const horizontalAlignmentBreakpoints =
			typeof horizontalAlignment === 'string' ? { xs: horizontalAlignment } : horizontalAlignment || {};
		const offsetBreakpoints = typeof offset === 'number' ? { xs: offset } : offset || {};
		const orderBreakpoints = typeof order === 'number' || typeof order === 'string' ? { xs: order } : order || {};

		if (!sizeBreakpoints.xs) {
			sizeBreakpoints.xs = undefined;
		}

		if (!directionBreakpoints.xs) {
			directionBreakpoints.xs = 'row';
		}
		if (!verticalAlignmentBreakpoints.xs) {
			verticalAlignmentBreakpoints.xs = 'top';
		}
		if (!horizontalAlignmentBreakpoints.xs) {
			horizontalAlignmentBreakpoints.xs = 'stretch';
		}

		const outerClassName = className ? [className] : [];
		const innerClassName = [`${prefixes.column}d-flex`];

		Object.keys(sizeBreakpoints).forEach((sizeBreakpointsName: keyof typeof sizeBreakpoints) => {
			const breakpointSize = sizeBreakpoints[sizeBreakpointsName];
			const outerClassNames = populateOuterClasses(sizeBreakpointsName, breakpointSize);
			outerClassName.push(...outerClassNames);
		});

		Object.keys(directionBreakpoints).forEach((directionBreakpointName: keyof typeof directionBreakpoints) => {
			const breakpointDirection = directionBreakpoints[directionBreakpointName];
			if (breakpointDirection) {
				innerClassName.push(flexAlignment[breakpointDirection].direction(directionBreakpointName));
			}
		});

		const offsetOuterClassNames = populatePlacementClasses(offsetBreakpoints, 'offset');
		const orderOuterClassNames = populatePlacementClasses(orderBreakpoints, 'order');

		outerClassName.push(...offsetOuterClassNames, ...orderOuterClassNames);

		const calculatedFlexDirections = getDirectionForBreakpoints(directionBreakpoints);

		const verticalInnerClassNames = populateInnerClasses(
			verticalAlignmentBreakpoints,
			calculatedFlexDirections,
			'vertical'
		);
		const horizontalInnerClassNames = populateInnerClasses(
			horizontalAlignmentBreakpoints,
			calculatedFlexDirections,
			'horizontal'
		);

		innerClassName.push(...verticalInnerClassNames, ...horizontalInnerClassNames);

		return (
			<div className={outerClassName.join(' ').trim()}>
				<div className={innerClassName.join(' ').trim()}>{this.props.children}</div>
			</div>
		);
	}
}
