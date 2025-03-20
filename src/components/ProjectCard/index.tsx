import { FC } from 'react';
import { Button } from '../Button';
import s from './ProjectCard.module.scss';

interface ProjectCardProps {
	id: number;
	title: string;
	details: string;
}

export const ProjectCard: FC<ProjectCardProps> = (props: ProjectCardProps) => {
	const { id, title, details } = props;
	return (
		<>
			<div className={s.card}>
				<div className={s.default_content}>
					<h3>Проект {id}</h3>
				</div>
				<div className={s.hover_content}>
					<h2>{title}</h2>
					<p className={s.subtext}>{details}</p>
					<Button />
				</div>
			</div>
		</>
	);
};
