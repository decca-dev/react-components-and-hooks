import { useState, MutableRefObject, FC, useEffect } from 'react';

export interface TabItem {
	name: string;
	elementRef: MutableRefObject<HTMLElement | undefined>;
}

export interface Props {
	items: TabItem[];
	tw?: string;
}

const Tabs: FC<Props> = ({ items, tw }) => {
	const [active, setActive] = useState(0);
	useEffect(() => {
		items.map((item, i) => {
			if (active === i) {
				item.elementRef.current?.classList.toggle('hidden');
			} else {
				item.elementRef.current?.classList.add('hidden');
			}
		});
	}, [active]);
	return (
		<div className={tw}>
			<div className="flex flex-row justify-start space-x-5">
				{items.map((item, i) => {
					return (
						<h1
							key={i}
							className={`cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out font-bold text-white text-xl ${
								i === active ? 'underline' : ''
							}`}
							onClick={() => setActive(i)}
						>
							{item.name}
						</h1>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
