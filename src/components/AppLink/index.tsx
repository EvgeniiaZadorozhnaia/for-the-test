import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import s from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className: string;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
	const { to, className, children, ...otherProps } = props;
	return (
		<Link to={to} className={clsx(s.link, s[className])} {...otherProps}>
			{children}
		</Link>
	);
};
