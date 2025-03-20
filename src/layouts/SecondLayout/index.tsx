import { FC, PropsWithChildren, ReactNode } from 'react';
import s from './SecondLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppLink } from '@/components/AppLink';
import { ProjectCard } from '@/components/ProjectCard';

interface SecondLayoutProps {
	children: ReactNode;
}

const projects = [
	{ id: 1, title: 'E-commerce платформа', details: 'Веб-платформа' },
	{ id: 2, title: 'E-commerce платформа', details: 'Веб-платформа' },
	{ id: 3, title: 'E-commerce платформа', details: 'Веб-платформа' },
	{ id: 4, title: 'E-commerce платформа', details: 'Веб-платформа' },
	{ id: 5, title: 'E-commerce платформа', details: 'Веб-платформа' },
	{ id: 6, title: 'E-commerce платформа', details: 'Веб-платформа' },
];

export const SecondLayout: FC<PropsWithChildren<SecondLayoutProps>> = ({
	children,
}) => {
	return (
		<>
			<section className={s.wrap}>
				<h1 className={s.header}>Наши работы</h1>
				<p className={s.info}>
					Ознакомьтесь с нашими лучшими проектами в различных категориях
				</p>
				<nav className={s.nav_menu}>
					<AppLink className={'menu_link'} to={'#'}>
						Главная
					</AppLink>
					<AppLink className={'menu_link'} to={'#'}>
						О нас
					</AppLink>
					<AppLink className={'menu_link'} to={'#'}>
						Услуги
					</AppLink>
					<AppLink className={'menu_link'} to={'#'}>
						Портфолио
					</AppLink>
					<AppLink className={'menu_link'} to={'#'}>
						Контакты
					</AppLink>
					<div className={s.br} />
				</nav>
				<div className={s.project_list}>
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							id={project.id}
							title={project.title}
							details={project.details}
						/>
					))}
				</div>
				<div>
					<ErrorBoundary>{children}</ErrorBoundary>
				</div>
			</section>
		</>
	);
};
