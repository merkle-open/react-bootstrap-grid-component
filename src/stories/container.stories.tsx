import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { Column } from '../components/Column';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { BackgroundHelper } from '../demo/components/BackgroundHelper';
import ReadMe from '../../README.md';
import { withReadme } from 'storybook-readme';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const stories = storiesOf('Example/Container', module);
stories.addDecorator(withReadme(ReadMe));

stories['addWithJSX']('Container Fluid', () => (
	<BackgroundHelper>
		<Container fluid={true}>
			<Row>
				<Column size={12}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Column>
			</Row>
			<Row verticalAlignment={{ xs: 'center', sm: 'center', md: 'start' }}>
				<Column size={{ xs: 5, sm: 5, md: 8 }}>
					<p>Text example</p>
				</Column>
				<Column size={{ xs: 7, sm: 7, md: 4 }}>
					<p>Another text example</p>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));

stories['addWithJSX']('Container Regular', () => (
	<BackgroundHelper>
		<Container>
			<Row>
				<Column size={12}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Column>
			</Row>
			<Row verticalAlignment={{ xs: 'center', sm: 'center', md: 'start' }}>
				<Column size={{ xs: 5, sm: 5, md: 8 }}>
					<p>Text example</p>
				</Column>
				<Column size={{ xs: 7, sm: 7, md: 4 }}>
					<p>Another text example</p>
				</Column>
			</Row>
		</Container>
	</BackgroundHelper>
));
