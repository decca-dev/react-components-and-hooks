import { useEffect, SetStateAction, Dispatch } from 'react';
import Image from 'next/image';

export interface ToastOptions {
	title: string;
	description: string;
	type: ToastType;
}

export type ToastType = 'error' | 'success' | 'info' | 'loading';

const Toast = ({ title, description, type }: ToastOptions): JSX.Element => {
	useEffect(() => {
		const toast = document.querySelector('#toast') as HTMLDivElement;
		setTimeout(() => {
			toast.classList.remove('show');
		}, 2805);
	}, []);

	return (
		<div className="flex flex-row items-center justify-center">
			<div
				id="toast"
				className={'toast show toast-' + type}
			>
				<h6 className="inline-block align-middle">
					<div className="inline-block align-middle mr-2">
						<Image
							src={'/assets/icons/' + type + '.svg'}
							alt="icon"
							width="25"
							height="25"
							className={type === 'loading' ? 'animate-spin' : ''}
						/>
					</div>
					{title}
				</h6>
				<p>{description}</p>
			</div>
		</div>
	);
};

export const clearMessage = (
	setMessage: Dispatch<SetStateAction<ToastOptions | undefined>>,
): void => {
	setTimeout(() => {
		setMessage({ type: 'success', title: '', description: '' });
	}, 3000);
};

export default Toast;
