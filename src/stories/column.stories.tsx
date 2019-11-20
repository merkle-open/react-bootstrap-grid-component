import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { Column } from '../components/Column';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { BackgroundHelper } from '../demo/components/BackgroundHelper';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);
const stories = storiesOf('Example/Column', module);

stories['addWithJSX']('Vertical Alignment Behavior', () => (
	<div className="Col-verticalAlignment">
		<BackgroundHelper>
			<Container>
				<Row>
					<p>Horizontally aligned items inside column</p>
				</Row>
				<Row>
					<Column size={6}>
						<p>xs: top</p>
						<p>sm: top</p>
						<p>md: bottom</p>
						<p>lg: bottom</p>
					</Column>
					<Column size={6}>
						<p>xs: center</p>
						<p>sm: center</p>
						<p>md: justify</p>
						<p>lg: justify</p>
					</Column>
				</Row>
				<Row>
					<Column size={{ xs: 5, sm: 5, md: 8 }} verticalAlignment={{ xs: 'top', sm: 'top', md: 'bottom' }}>
						<p>Text example</p>
					</Column>
					<Column
						size={{ xs: 7, sm: 7, md: 4 }}
						verticalAlignment={{ xs: 'center', sm: 'center', md: 'justify' }}
					>
						<p>Another text example</p>
					</Column>
				</Row>
			</Container>
		</BackgroundHelper>
	</div>
));

stories['addWithJSX']('Horizontal Alignment Behavior', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<p>Horizontally aligned items inside column</p>
			</Row>
			<Row>
				<Column
					direction={'row'}
					size={{ xs: 6, sm: 6, md: 4 }}
					horizontalAlignment={{ xs: 'right', sm: 'right', md: 'center' }}
				>
					<p>xs: right</p>
					<p>sm: right</p>
					<p>md: center</p>
					<p>lg: center</p>
				</Column>
				<Column
					direction={'row'}
					size={{ xs: 6, sm: 6, md: 8 }}
					horizontalAlignment={{ xs: 'stretch', sm: 'stretch', md: 'left' }}
				>
					<p>xs: stretch</p>
					<p>sm: stretch</p>
					<p>md: left</p>
					<p>lg: left</p>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Direction Behavior', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<p>Direction of the items inside the column</p>
			</Row>
			<Row>
				<Column
					direction={'col'}
					size={{ xs: 8, sm: 4, md: 4 }}
					horizontalAlignment={{ sm: 'right', md: 'center' }}
				>
					<p>xs: column</p>
					<p>sm: column</p>
					<p>md: column</p>
					<p>lg: column</p>
				</Column>
				<Column
					direction={'row'}
					size={{ xs: 4, sm: 8, md: 8 }}
					horizontalAlignment={{ sm: 'stretch', md: 'left' }}
				>
					<p>xs: row</p>
					<p>sm: row</p>
					<p>md: row</p>
					<p>lg: row</p>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Offset Behavior', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<Column size={4}>In this example the same offset is set for all viewport and...</Column>
				<Column size={3} offset={3}>
					the behavior is clear while looking at this column
				</Column>
			</Row>
			<Row>
				<Column size={{ sm: 8, md: 8 }} offset={{ sm: 4, md: 2 }}>
					<Row>
						<Column size={{ xs: 6, md: 4 }} offset={{ xs: 3, md: 2 }}>
							Here you can see how offset behaves when porperty is set...
						</Column>
						<Column size={{ xs: 2, md: 8 }} offset={{ xs: 1, md: 2 }}>
							inside nested columns
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Order Behavior', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<Column size={4} order={'last'}>
					This column is the first one but her order is set to be the last one
				</Column>
				<Column size={3} order={'first'}>
					whle this one is the second of the two columns and her order is set to be the first
				</Column>
			</Row>
			<Row>
				<Column size={6} order={{ xs: 2, md: 1 }}>
					<Row>
						<Column>
							<p>This column is first, but second on smaller devices</p>
						</Column>
					</Row>
					<Row>
						<Column size={4} order={{ xs: 'last', md: 'first' }}>
							first column but on smaller devices it's last one
						</Column>
						<Column size={4}>Unordered column</Column>
						<Column size={4} order={{ xs: 'first', md: 'last' }}>
							last column but on smaller devices it's first
						</Column>
					</Row>
				</Column>
				<Column size={6} order={{ xs: 1, md: 2 }}>
					<Row>
						<Column>
							<p>This column is second, but first on smaller devices</p>
						</Column>
					</Row>
					<Row>
						<Column size={{ xs: 6, md: 4 }} order={{ xs: 3, md: 1 }}>
							First, but last one on smaller devices
						</Column>
						<Column>Unordered column</Column>
						<Column size={{ xs: 2, md: 4 }} order={{ xs: 1, md: 3 }}>
							Last but first on smaller devices
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Nested Columns - Vertical Alignment Behvior', () => (
	<div className="Col-verticalAlignment">
		<BackgroundHelper>
			<Container>
				<div>
					<p>Horizontal alignment of the columns</p>
					<p>The arrows indicate the depth of nesting and the values that are being set at each level</p>
				</div>
				<Row horizontalAlignment={'between'}>
					<Column size={4} verticalAlignment={'top'}>
						<Row>
							<Column direction={'row'} size={7}>
								<p>top</p>
							</Column>
							<Column direction={'row'} size={5} verticalAlignment={'justify'}>
								<p>top -> justify</p>
							</Column>
						</Row>
					</Column>
					<Column size={6} direction={'col'} verticalAlignment={'center'}>
						<Column size={4} verticalAlignment={'bottom'}>
							<p>center -> bottom</p>
						</Column>
						<Column size={8} verticalAlignment={'center'}>
							<p>center -> center</p>
						</Column>
					</Column>
				</Row>
			</Container>
		</BackgroundHelper>
	</div>
));

stories['addWithJSX']('Nested Columns - Horizontal Alignment Behvior', () => (
	<div className="Col-verticalAlignment">
		<BackgroundHelper>
			<Container>
				<div>
					<p>Vertical alignment of the columns</p>
					<p>The arrows indicate the depth of nesting and the values that are being set at each level</p>
				</div>
				<Row>
					<Column size={5} horizontalAlignment={'center'} verticalAlignment={'center'}>
						<Row horizontalAlignment={'center'}>
							<Column direction={'row'} size={7} horizontalAlignment={'right'}>
								<div>center -> right</div>
							</Column>
							<Column direction={'row'} size={5} horizontalAlignment={'center'}>
								<div>center -> center</div>
							</Column>
						</Row>
					</Column>
					<Column size={7} direction={'col'} horizontalAlignment={'right'} verticalAlignment={'center'}>
						<Column size={6} direction={'col'} horizontalAlignment={'left'}>
							<div>right -> left</div>
						</Column>
						<Column size={6} direction={'col'} horizontalAlignment={'stretch'}>
							<div>right -> stretch</div>
						</Column>
					</Column>
				</Row>
			</Container>
		</BackgroundHelper>
	</div>
));
