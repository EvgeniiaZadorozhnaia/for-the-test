import { FC } from 'react';
import s from './Rating.module.scss';

interface RatingProps {
	rate: number;
}

export const Rating: FC<RatingProps> = (props: RatingProps) => {
	const { rate } = props;
	return (
		<div className={s.rate}>
			<span className={s.star}>★</span>
			{rate}
		</div>
	);
};
