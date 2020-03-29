import * as React from 'react';
import prefixes from './PrefixManager';
import './sizingbreakpoints.scss';

interface IContainerProps {
	children?: React.ReactNode;
	fluid?: boolean;
	className?: string;
}

export const Container = (props: IContainerProps) => {
	function getClassName(): string {
		const classNames = [props.fluid ? 'container-fluid' : 'container'];
		if (props.className) {
			classNames.push(props.className);
		}
		return `${prefixes.container}${classNames.join(' ')}`;
	}
	return <div className={getClassName()}>{props.children}</div>;
};
