import { FC, ReactNode, useRef, Dispatch, SetStateAction } from 'react';
import { useOutsideAlerter } from '../hooks/useOutsideAlerter';

interface Props {
	children: ReactNode;
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	title: string;
}

const Modal: FC<Props> = ({ children, show, setShow, title }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	useOutsideAlerter(modalRef, () => setShow(false));
	if (!show) {
		return null;
	}
	return (
		<div
			className='fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
		>
			<div
				className='container w-auto h-auto bg-gray-200 rounded-xl shadow-xl pt-8 pb-8 text-black'
				ref={modalRef}
			>
				<button
					onClick={(): void => setShow(false)}
					className='float-right -mt-5'
				>
					&#10006;
				</button>
				<h1 className='-mt-5 text-xl font-bold underline'>{title}</h1>
				<br />
				{children}
			</div>
		</div>
	);
};

export default Modal;
