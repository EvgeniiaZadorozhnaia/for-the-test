import '@assets/scss/base/index.scss';
import { HomePage } from './pages/HomePage';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { FC } from 'react';

export const App: FC = () => {
	return (
		<>
			<Header />
			<HomePage />
			<Footer />
		</>
	);
};
