import { FC } from 'react';
import s from './Icon.module.scss';

interface IconProps {
	icon: string;
}

export const Icon: FC<IconProps> = (props: IconProps) => {
	const { icon } = props;
	return <div className={s.icon}>{icon}</div>;
};
