import 'bootstrap/scss/bootstrap.scss';
import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import { Column } from '../components/Column';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { BackgroundHelper } from '../demo/components/BackgroundHelper';
import ReadMe from '../../README.md';
import { withReadme } from 'storybook-readme';
import JSXAddon from 'storybook-addon-jsx';

import '../demo/css/backgroundHelper.css';
import '../components/sizingbreakpoints.scss';
import './stories.scss';

setAddon(JSXAddon);

const stories = storiesOf('Playground', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(ReadMe));

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

stories['addWithJSX']('Grid', () => (
	<div className="Grid">
		<BackgroundHelper>
			<Container fluid={select('Fluid', isActive, false, 'Container Fluid')}>
				<Row
					horizontalAlignment={{
						xs: radios('Horizontal alignment row - xs', horizontalAlignmentRow, 'center', 'xs'),
						sm: radios('Horizontal alignment row - sm', horizontalAlignmentRow, 'center', 'sm'),
						md: radios('Horizontal alignment row - md', horizontalAlignmentRow, 'center', 'md'),
						lg: radios('Horizontal alignment row - lg', horizontalAlignmentRow, 'center', 'lg'),
						xl: radios('Horizontal alignment row - xl', horizontalAlignmentRow, 'center', 'xl'),
					}}
					verticalAlignment={{
						xs: radios('Vertical alignment row - xs', verticalAlignmentRow, 'center', 'xs'),
						sm: radios('Vertical alignment row - sm', verticalAlignmentRow, 'center', 'sm'),
						md: radios('Vertical alignment row - md', verticalAlignmentRow, 'center', 'md'),
						lg: radios('Vertical alignment row - lg', verticalAlignmentRow, 'center', 'lg'),
						xl: radios('Vertical alignment row - xl', verticalAlignmentRow, 'center', 'xl'),
					}}
					noGutters={select('No Gutter', isActive, false, 'Row - no Gutters')}
				>
					<Column
						size={{
							xs: select('Size - xs - left column', size, 4, 'xs'),
							sm: select('Size - sm - left column', size, 4, 'sm'),
							md: select('Size - md - left column', size, 4, 'md'),
							lg: select('Size - lg - left column', size, 4, 'lg'),
							xl: select('Size - xl - left column', size, 4, 'xl'),
						}}
						order={{
							xs: select('Order - xs - left colum', order, 1, 'xs'),
							sm: select('Order - sm - left colum', order, 1, 'sm'),
							md: select('Order - md - left colum', order, 1, 'md'),
							lg: select('Order - lg - left colum', order, 1, 'lg'),
							xl: select('Order - xl - left colum', order, 1, 'xl'),
						}}
						offset={{
							xs: select('Offset - xs - left colum', size, 0, 'xs'),
							sm: select('Offset - sm - left colum', size, 0, 'sm'),
							md: select('Offset - md - left colum', size, 0, 'md'),
							lg: select('Offset - lg - left colum', size, 0, 'lg'),
							xl: select('Offset - xl - left colum', size, 0, 'xl'),
						}}
						direction={radios('Direction', direction, 'col', 'Direction')}
						verticalAlignment={{
							xs: radios('Vertical alignment column - xs', verticalAlignmentColumn, 'top', 'xs'),
							sm: radios('Vertical alignment column - sm', verticalAlignmentColumn, 'top', 'sm'),
							md: radios('Vertical alignment column - md', verticalAlignmentColumn, 'top', 'md'),
							lg: radios('Vertical alignment column - lg', verticalAlignmentColumn, 'top', 'lg'),
							xl: radios('Vertical alignment column - xl', verticalAlignmentColumn, 'top', 'xl'),
						}}
						horizontalAlignment={{
							xs: radios('Hotizontal alignment column - xs', horizontalAlignmentColumn, 'left', 'xs'),
							sm: radios('Hotizontal alignment column - sm', horizontalAlignmentColumn, 'left', 'sm'),
							md: radios('Hotizontal alignment column - md', horizontalAlignmentColumn, 'left', 'md'),
							lg: radios('Hotizontal alignment column - lg', horizontalAlignmentColumn, 'left', 'lg'),
							xl: radios('Hotizontal alignment column - xl', horizontalAlignmentColumn, 'left', 'xl'),
						}}
					>
						<div>
							<p>Text of the first column</p>
						</div>
					</Column>
					<Column
						size={{
							xs: select('Size - xs - right column', size, 8, 'xs'),
							sm: select('Size - sm - right column', size, 8, 'sm'),
							md: select('Size - md - right column', size, 8, 'md'),
							lg: select('Size - lg - right column', size, 8, 'lg'),
							xl: select('Size - xl - right column', size, 8, 'xl'),
						}}
						direction={radios('Direction', direction, 'col', 'Direction')}
						verticalAlignment={'center'}
						order={{
							xs: select('Order - xs - right column', order, 2, 'xs'),
							sm: select('Order - sm - right column', order, 2, 'sm'),
							md: select('Order - md - right column', order, 2, 'md'),
							lg: select('Order - lg - right column', order, 2, 'lg'),
							xl: select('Order - xl - right column', order, 2, 'xl'),
						}}
						offset={{
							xs: select('Offset - xs - right column', size, 0, 'xs'),
							sm: select('Offset - sm - right column', size, 0, 'sm'),
							md: select('Offset - md - right column', size, 0, 'md'),
							lg: select('Offset - lg - right column', size, 0, 'lg'),
							xl: select('Offset - xl - right column', size, 0, 'xl'),
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
));
