import { FC, ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children = 'Подробнее' }) => {
	return (
		<button aria-label="Подробнее" className={s.wrap}>
			{children}
		</button>
	);
};
