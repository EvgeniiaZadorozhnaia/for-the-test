import { FC } from 'react';
import s from './CategoryCard.module.scss';
import { Icon } from '../Icon';
import { Rating } from '../Rating';
import { Category } from '../Category';

interface CategoryCardProps {
	icon: string;
	header: string;
	content: string;
	rate: number;
	category: string;
}

export const CategoryCard: FC<CategoryCardProps> = (
	props: CategoryCardProps,
) => {
	const { icon, header, content, rate, category } = props;
	return (
		<>
			<div className={s.card}>
				<Icon icon={icon} />
				<h1 className={s.card_header}>{header}</h1>
				<p className={s.card_content}>{content}</p>
				<div className={s.card_footer}>
					<Rating rate={rate} />
					<Category category={category} />
				</div>
			</div>
		</>
	);
};
