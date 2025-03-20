import { FC, PropsWithChildren, ReactNode } from 'react';
import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { CategoryCard } from '@/components/CategoryCard';

interface MainLayoutProps {
	children: ReactNode;
}

const categories = [
	{
		id: 1,
		icon: '✨',
		header: 'Креативный дизайн',
		content:
			'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		rate: 4.9,
		category: 'Дизайн',
	},
	{
		id: 2,
		icon: '🚀',
		header: 'Быстрая разработка',
		content:
			'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
		rate: 4.8,
		category: 'Разработка',
	},
	{
		id: 3,
		icon: '📱',
		header: 'Мобильная оптимизация',
		content:
			'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		rate: 4.7,
		category: 'Оптимизация',
	},
];

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
}) => {
	return (
		<>
			<main className={s.wrap}>
				<h1 className={s.header}>Инновационные решения для вашего бизнеса</h1>
				<div className={s.category_list}>
					{categories.map((category) => (
						<CategoryCard
							key={category.id}
							icon={category.icon}
							header={category.header}
							content={category.content}
							rate={category.rate}
							category={category.category}
						/>
					))}
				</div>
				<div>
					<ErrorBoundary>{children}</ErrorBoundary>
				</div>
			</main>
		</>
	);
};
