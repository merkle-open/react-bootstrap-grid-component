import * as React from 'react';
import prefixes from './PrefixManager';

interface Props {
	children?: React.ReactNode;
	fluid?: boolean;
	className?: string;
}

export class Container extends React.Component<Props> {
	protected getClassName(): string {
		const classNames = [this.props.fluid ? 'container-fluid' : 'container'];
		if (this.props.className) {
			classNames.push(this.props.className);
		}
		return `${prefixes.container}${classNames.join(' ')}`;
	}
	public render() {
		return <div className={this.getClassName()}>{this.props.children}</div>;
	}
}
