import React from 'react';
import './backgroundHelper.scss';

interface IBackgorundHelperProps {
	children?: any;
}

export function getDummyText(count: number = 45, str: string = '» S P A C E R « ') {
	let txt = '';
	for (let i = 0; i < count; i++) {
		txt += str;
	}
	return txt;
}

export const BackgroundHelper = (props: IBackgorundHelperProps) => (
	<div className="background-helper">{props.children}</div>
);
