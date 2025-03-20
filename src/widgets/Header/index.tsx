import { Logo } from '@/components/Logo';
import s from './Header.module.scss';
import { AppLink } from '@/components/AppLink';

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.wrap}>
				<Logo />
				<nav className={s.nav_menu}>
					<AppLink className={'header_link'} to={'#'}>
						Главная
					</AppLink>
					<AppLink className={'header_link'} to={'#'}>
						О нас
					</AppLink>
					<AppLink className={'header_link'} to={'#'}>
						Услуги
					</AppLink>
					<AppLink className={'header_link'} to={'#'}>
						Портфолио
					</AppLink>
					<AppLink className={'header_link'} to={'#'}>
						Контакты
					</AppLink>
				</nav>
			</div>
		</header>
	);
};
