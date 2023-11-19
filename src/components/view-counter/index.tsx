'use client';

import { useEffect } from 'react';

import Loading from '@/components/loading';
import { usePostViews } from '@/hooks';

type ViewCounterProps = {
	slug: string;
	shouldIncrement?: boolean;
}

function ViewCounter({
	slug,
	shouldIncrement = false,
}: ViewCounterProps) {
	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
		increment,
	} = usePostViews(slug);

	useEffect(() => {
		if (shouldIncrement) {
			increment();
		}
	}, []);

	return (
		<div className='inline'>
			{viewsIsError || viewsIsLoading ? (
				<Loading />
			) : (
				<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
					{views?.toLocaleString()}
				</span>
			)}{' '}
			views
		</div>
	);
}

export default ViewCounter;
