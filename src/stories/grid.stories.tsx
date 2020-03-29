import * as React from 'react';
import { withKnobs, radios, select, text } from '@storybook/addon-knobs';
import { Column } from '../components/Column';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { BackgroundHelper } from '../demo/components/BackgroundHelper';
import { Size } from '../components/config';

import '../demo/components/backgroundHelper.scss';
import './stories.scss';

export default {
	title: 'Playground',
	decorators: [withKnobs],
};

const isActive = {
	true: true,
	false: false,
};

const horizontalAlignmentRow = {
	start: 'start',
	center: 'center',
	between: 'between',
	end: 'end',
};

const verticalAlignmentRow = {
	center: 'center',
	start: 'start',
	end: 'end',
};

const size = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	11: 11,
	12: 12,
};

const order = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	11: 11,
	12: 12,
	first: 'first',
	last: 'last',
};

const direction = {
	col: 'col',
	row: 'row',
};

const horizontalAlignmentColumn = {
	left: 'left',
	right: 'right',
	center: 'center',
	stretch: 'stretch',
};

const verticalAlignmentColumn = {
	top: 'top',
	center: 'center',
	bottom: 'bottom',
	justify: 'justify',
};

export const Grid = () => (
	<div className="Grid">
		<BackgroundHelper>
			<Container
				fluid={select('Fluid', isActive as any, false as any, 'Container Fluid')}
				className={text('className: Container', 'classname-example-container', 'Classname')}
			>
				<Row
					className={text('className: Row', 'classname-example-row', 'Classname')}
					horizontalAlignment={{
						xs: radios('Horizontal alignment row - xs', horizontalAlignmentRow, 'center', 'xs') as
							| 'start'
							| 'center'
							| 'between'
							| 'end',
						sm: radios('Horizontal alignment row - sm', horizontalAlignmentRow, 'center', 'sm') as
							| 'start'
							| 'center'
							| 'between'
							| 'end',
						md: radios('Horizontal alignment row - md', horizontalAlignmentRow, 'center', 'md') as
							| 'start'
							| 'center'
							| 'between'
							| 'end',
						lg: radios('Horizontal alignment row - lg', horizontalAlignmentRow, 'center', 'lg') as
							| 'start'
							| 'center'
							| 'between'
							| 'end',
						xl: radios('Horizontal alignment row - xl', horizontalAlignmentRow, 'center', 'xl') as
							| 'start'
							| 'center'
							| 'between'
							| 'end',
					}}
					verticalAlignment={{
						xs: radios('Vertical alignment row - xs', verticalAlignmentRow, 'center', 'xs') as
							| 'start'
							| 'center'
							| 'end',
						sm: radios('Vertical alignment row - sm', verticalAlignmentRow, 'center', 'sm') as
							| 'start'
							| 'center'
							| 'end',
						md: radios('Vertical alignment row - md', verticalAlignmentRow, 'center', 'md') as
							| 'start'
							| 'center'
							| 'end',
						lg: radios('Vertical alignment row - lg', verticalAlignmentRow, 'center', 'lg') as
							| 'start'
							| 'center'
							| 'end',
						xl: radios('Vertical alignment row - xl', verticalAlignmentRow, 'center', 'xl') as
							| 'start'
							| 'center'
							| 'end',
					}}
					noGutters={select('No Gutter', isActive as any, false as any, 'Row - no Gutters')}
				>
					<Column
						className={text('className: Column', 'classname-example-column', 'Classname')}
						size={{
							xs: select('Size - xs - left column', size, 4, 'xs') as Size,
							sm: select('Size - sm - left column', size, 4, 'sm') as Size,
							md: select('Size - md - left column', size, 4, 'md') as Size,
							lg: select('Size - lg - left column', size, 4, 'lg') as Size,
							xl: select('Size - xl - left column', size, 4, 'xl') as Size,
						}}
						order={{
							xs: select('Order - xs - left colum', order, 1, 'xs') as Size | 'last' | 'first',
							sm: select('Order - sm - left colum', order, 1, 'sm') as Size | 'last' | 'first',
							md: select('Order - md - left colum', order, 1, 'md') as Size | 'last' | 'first',
							lg: select('Order - lg - left colum', order, 1, 'lg') as Size | 'last' | 'first',
							xl: select('Order - xl - left colum', order, 1, 'xl') as Size | 'last' | 'first',
						}}
						offset={{
							xs: select('Offset - xs - left colum', size, 0, 'xs') as Size,
							sm: select('Offset - sm - left colum', size, 0, 'sm') as Size,
							md: select('Offset - md - left colum', size, 0, 'md') as Size,
							lg: select('Offset - lg - left colum', size, 0, 'lg') as Size,
							xl: select('Offset - xl - left colum', size, 0, 'xl') as Size,
						}}
						direction={radios('Direction', direction, 'col', 'Direction') as 'col' | 'row'}
						verticalAlignment={{
							xs: radios('Vertical alignment column - xs', verticalAlignmentColumn, 'top', 'xs') as
								| 'center'
								| 'top'
								| 'bottom'
								| 'justify',
							sm: radios('Vertical alignment column - sm', verticalAlignmentColumn, 'top', 'sm') as
								| 'center'
								| 'top'
								| 'bottom'
								| 'justify',
							md: radios('Vertical alignment column - md', verticalAlignmentColumn, 'top', 'md') as
								| 'center'
								| 'top'
								| 'bottom'
								| 'justify',
							lg: radios('Vertical alignment column - lg', verticalAlignmentColumn, 'top', 'lg') as
								| 'center'
								| 'top'
								| 'bottom'
								| 'justify',
							xl: radios('Vertical alignment column - xl', verticalAlignmentColumn, 'top', 'xl') as
								| 'center'
								| 'top'
								| 'bottom'
								| 'justify',
						}}
						horizontalAlignment={{
							xs: radios('Hotizontal alignment column - xs', horizontalAlignmentColumn, 'left', 'xs') as
								| 'center'
								| 'left'
								| 'right'
								| 'stretch',
							sm: radios('Hotizontal alignment column - sm', horizontalAlignmentColumn, 'left', 'sm') as
								| 'center'
								| 'left'
								| 'right'
								| 'stretch',
							md: radios('Hotizontal alignment column - md', horizontalAlignmentColumn, 'left', 'md') as
								| 'center'
								| 'left'
								| 'right'
								| 'stretch',
							lg: radios('Hotizontal alignment column - lg', horizontalAlignmentColumn, 'left', 'lg') as
								| 'center'
								| 'left'
								| 'right'
								| 'stretch',
							xl: radios('Hotizontal alignment column - xl', horizontalAlignmentColumn, 'left', 'xl') as
								| 'center'
								| 'left'
								| 'right'
								| 'stretch',
						}}
					>
						<div>
							<p>Text of the first column</p>
						</div>
					</Column>
					<Column
						className={text('className: Column', 'classname-example-column', 'Classname')}
						size={{
							xs: select('Size - xs - right column', size, 8, 'xs') as Size,
							sm: select('Size - sm - right column', size, 8, 'sm') as Size,
							md: select('Size - md - right column', size, 8, 'md') as Size,
							lg: select('Size - lg - right column', size, 8, 'lg') as Size,
							xl: select('Size - xl - right column', size, 8, 'xl') as Size,
						}}
						direction={radios('Direction', direction, 'col', 'Direction') as 'col' | 'row'}
						verticalAlignment={'center'}
						order={{
							xs: select('Order - xs - right column', order, 2, 'xs') as Size | 'last' | 'first',
							sm: select('Order - sm - right column', order, 2, 'sm') as Size | 'last' | 'first',
							md: select('Order - md - right column', order, 2, 'md') as Size | 'last' | 'first',
							lg: select('Order - lg - right column', order, 2, 'lg') as Size | 'last' | 'first',
							xl: select('Order - xl - right column', order, 2, 'xl') as Size | 'last' | 'first',
						}}
						offset={{
							xs: select('Offset - xs - right column', size, 0, 'xs') as Size,
							sm: select('Offset - sm - right column', size, 0, 'sm') as Size,
							md: select('Offset - md - right column', size, 0, 'md') as Size,
							lg: select('Offset - lg - right column', size, 0, 'lg') as Size,
							xl: select('Offset - xl - right column', size, 0, 'xl') as Size,
						}}
					>
						<div className="Grid_text">
							<p>This is the text for the second column. I thought i would be better but it aint</p>
							<p>This is the text for the second column. I thought i would be better but it aint</p>
							<p>This is the text for the second column. I thought i would be better but it aint</p>
							<p>This is the text for the second column. I thought i would be better but it aint</p>
						</div>
						<div className="Grid_text">
							<p>This is the text for the second column. I thought i would be better but it aint</p>
							<p>This is the text for the second column. I thought i would be better but it aint</p>
							<p>This is the text for the second column. I thought i would be better but it aint</p>
						</div>
					</Column>
				</Row>
			</Container>
		</BackgroundHelper>
	</div>
);
