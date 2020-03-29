import * as React from 'react';
import prefixes from './PrefixManager';
import './sizingbreakpoints.scss';

interface IContainerProps {
	children?: React.ReactNode;
	fluid?: boolean;
}

function getClassName(isFluid: boolean | undefined): string {
	const className = isFluid ? 'container-fluid' : 'container';
	return className;
}

export const Container = (props: IContainerProps) => {
	const { fluid } = props;
	const className = `${prefixes.container}${getClassName(fluid)}`;
	return <div className={className}>{props.children}</div>;
};
