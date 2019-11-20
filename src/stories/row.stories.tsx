import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { Column } from '../components/Column';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { BackgroundHelper } from '../demo/components/BackgroundHelper';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);
const stories = storiesOf('Example/Row', module);

stories['addWithJSX']('Vertical Alignment Behavior', () => (
	<div className="Row-verticalAlignment">
		<BackgroundHelper>
			<Container>
				<Row>
					<Column size={12}>
						<p>Horizontally aligned items inside row</p>
						<p>xs: center</p>
						<p>sm: center</p>
						<p>md: start</p>
						<p>lg: end</p>
						<p>xl: end</p>
					</Column>
				</Row>
				<Row verticalAlignment={{ xs: 'center', sm: 'center', md: 'start', lg: 'end' }}>
					<Column size={{ xs: 5, sm: 5, md: 8 }}>
						<p>Text example</p>
					</Column>
					<Column size={{ xs: 7, sm: 7, md: 4 }}>
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
				<p>Horizontally aligned items inside row</p>
			</Row>
			<Row horizontalAlignment={{ xs: 'start', sm: 'start', md: 'between' }}>
				<Column size={8}>
					<p>xs: start</p>
					<p>sm: start</p>
					<p>md: between</p>
					<p>lg: between</p>
					<p>xl: between</p>
				</Column>
				<Column size={3}>
					<p>xs: start</p>
					<p>sm: start</p>
					<p>md: between</p>
					<p>lg: between</p>
					<p>xl: between</p>
				</Column>
			</Row>
			<Row horizontalAlignment={{ xs: 'center', sm: 'center', md: 'end' }}>
				<Column size={8}>
					<p>xs: center</p>
					<p>sm: center</p>
					<p>md: end</p>
					<p>lg: end</p>
					<p>xl: end</p>
				</Column>
				<Column size={3}>
					<p>xs: center</p>
					<p>sm: center</p>
					<p>md: end</p>
					<p>lg: end</p>
					<p>xl: end</p>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('No Gutters Behavior', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<Column size={12}>
					<p>
						The first row displays the behavior of the row when noGutter attribute is set on the parent row,
						while the second row displays behavior of the nested row when noGutters attribute is set on it.
					</p>
				</Column>
			</Row>
			<Row noGutters={true}>
				<Column size={12}>
					<Row>
						<Column size={6}>Text example</Column>
						<Column size={6}>Text example part 2</Column>
					</Row>
				</Column>
			</Row>
			<Row verticalAlignment={{ xs: 'center', sm: 'center', md: 'start', lg: 'end' }}>
				<Column size={12}>
					<Row noGutters={true}>
						<Column size={{ xs: 5, sm: 5, md: 8 }}>
							<p>Text example</p>
						</Column>
						<Column size={{ xs: 7, sm: 7, md: 4 }}>
							<p>Another text example</p>
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Nested Rows - Horizontal Alignment Behavior', () => (
	<BackgroundHelper>
		<Container>
			<div>
				<p>Horizontally aligned items inside row</p>
				<p>The arrow indicates nesting and what value has been set on each level</p>
			</div>
			<Row horizontalAlignment={'between'}>
				<Column size={8}>
					<Row horizontalAlignment={'center'}>
						<Column size={8}>
							<p>between -> center</p>
						</Column>
					</Row>
				</Column>
				<Column size={3}>
					<p>between</p>
				</Column>
			</Row>
			<Row horizontalAlignment={'center'}>
				<Column size={5}>
					<Row horizontalAlignment={'end'}>
						<Column size={4}>
							<p>center -> end</p>
						</Column>
					</Row>
				</Column>
				<Column size={5}>
					<Row horizontalAlignment={'start'}>
						<Column size={8}>
							<Row horizontalAlignment={'center'}>
								<Column size={8}>
									<p>center -> start -> center</p>
								</Column>
							</Row>
						</Column>
					</Row>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Nested Rows - Verticalal Alignment Behavior', () => (
	<div className="Row-verticalAlignment">
		<BackgroundHelper>
			<Container>
				<div>
					<p>Verically aligned items inside row</p>
					<p>The arrow indicates nesting and what value has been set on each level</p>
				</div>
				<Row verticalAlignment={'start'}>
					<Column size={12}>
						<Row verticalAlignment={'center'}>
							<Column size={8}>
								<p>start -> center</p>
							</Column>
							<Column size={3}>
								<Row verticalAlignment={'start'}>
									<Column size={12}>
										<p>start -> center -> start</p>
									</Column>
								</Row>
							</Column>
						</Row>
					</Column>
				</Row>
				<Row horizontalAlignment={'center'}>
					<Column size={6}>
						<Row verticalAlignment={'center'}>
							<Column size={12}>
								<p>center -> center</p>
							</Column>
						</Row>
					</Column>
					<Column size={6}>
						<Row verticalAlignment={'end'}>
							<Column size={12}>
								<p>center -> end</p>
							</Column>
						</Row>
					</Column>
				</Row>
			</Container>
		</BackgroundHelper>
	</div>
));
