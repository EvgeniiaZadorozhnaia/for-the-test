import { FC } from 'react';
import s from './Category.module.scss';

interface CategoryProps {
	category: string;
}

export const Category: FC<CategoryProps> = (props: CategoryProps) => {
	const { category } = props;
	return <span className={s.category}>{category}</span>;
};
