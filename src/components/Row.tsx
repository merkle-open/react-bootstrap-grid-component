import * as React from 'react';
import { Viewport } from '../config/config';
import prefixes from './PrefixManager';

type VerticalAlignment = 'center' | 'start' | 'end';
type VerticalAlignmentViewport = { [key in Viewport]?: VerticalAlignment };
type HorizontalAlignment = 'start' | 'center' | 'between' | 'end';
type HorizontalAlignmentViewport = { [key in Viewport]?: HorizontalAlignment };
type alignmentValue =
	| VerticalAlignmentViewport
	| HorizontalAlignmentViewport
	| VerticalAlignment
	| HorizontalAlignment
	| undefined;

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
	 * https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters
	 */
	noGutters?: boolean;
	/**
	 * Rows must contain only columns to prevent negative margin issues
	 */
	children: React.ReactNode;
}

const viewportClassPrefix = (viewport: Viewport) => (viewport === 'xs' ? '' : '-' + viewport);

function setAlignment(alignmentValue: alignmentValue) {
	return typeof alignmentValue === 'string' ? { xs: alignmentValue } : alignmentValue || {};
}

function populateClasses(
	alignmentBreakpointsType: VerticalAlignmentViewport | HorizontalAlignmentViewport | Object,
	propertyName: string
): string[] {
	const classNames: string[] = [];
	Object.keys(alignmentBreakpointsType).forEach((breakpointName: keyof typeof alignmentBreakpointsType) => {
		const breakpointValue = alignmentBreakpointsType[breakpointName];

		classNames.push(`${prefixes.column}${propertyName}${viewportClassPrefix(breakpointName)}-${breakpointValue}`);
	});
	return classNames;
}

export class Row extends React.Component<Props> {
	public render() {
		const { verticalAlignment, horizontalAlignment, noGutters } = this.props;
		const classNames = [`${prefixes.row}row`];
		const verticalAlignmentBreakpoints = setAlignment(verticalAlignment);
		const horizontalAlignmentBreakpoints = setAlignment(horizontalAlignment);

		if (verticalAlignment) {
			const verticalAlignmentClassNames = populateClasses(verticalAlignmentBreakpoints, 'align-items');
			classNames.push(...verticalAlignmentClassNames);
		}

		if (horizontalAlignment) {
			const horizontalAlignmentClassNames = populateClasses(horizontalAlignmentBreakpoints, 'justify-content');
			classNames.push(...horizontalAlignmentClassNames);
		}

		if (noGutters) {
			classNames.push(`${prefixes.row}no-gutters`);
		}

		return <div className={classNames.join(' ')}>{this.props.children}</div>;
	}
}
