import { JSX } from 'react';
import Head from 'next/head';

const WEBSITE = 'name of website';

export const useMetaData = (
	title: string,
	url: string,
	description = "default description",
): JSX.Element => {
	return (
		<Head>
			<title>{`${WEBSITE} | ${title}`}</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta
				name='description'
				content={description}
			/>
			<link
				rel='shortcut icon'
				href='/assets/logo.png'
				type='image/png'
			/>
			<meta
				property='og:title'
				content={`${WEBSITE} | ${title}`}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				property='og:url'
				content={process.env.NEXT_PUBLIC_DOMAIN + url}
			/>
			<meta
				property='og:image'
				content='/assets/logo.png'
			/>
			<meta
				name='keywords'
				color='keyword1, keyword2'
			/>
			<meta
				content='#dee610'
				data-react-helmet='true'
				name='theme-color'
			/>
		</Head>
	);
};
