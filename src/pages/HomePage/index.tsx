import { FC } from 'react';
import { MainLayout } from '@layouts/MainLayout';
import { SecondLayout } from '@/layouts/SecondLayout';

export const HomePage: FC = () => {
	return (
		<>
			<MainLayout children={null} />
			<SecondLayout children={null} />
		</>
	);
};
