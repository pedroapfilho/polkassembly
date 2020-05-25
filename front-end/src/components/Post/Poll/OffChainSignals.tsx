// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useState } from 'react';

import { UserDetailsContext } from '../../../context/UserDetailsContext';
import { PostVotesQuery, PostVotesQueryVariables, useAddPostVoteMutation, useDeleteVoteMutation } from '../../../generated/graphql';
import AyeNayButtons from '../../../ui-components/AyeNayButtons';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import { Form } from '../../../ui-components/Form';
import OffChainSignalBar from '../../../ui-components/OffChainSignalBar';
import { AYE, NAY } from './votes';

interface Props {
	ayes: number,
	className?: string,
	nays: number,
	postId: number
	refetch: (variables?: PostVotesQueryVariables | undefined) => Promise<ApolloQueryResult<PostVotesQuery>>
}

const CouncilSignals = ({ className, ayes, nays, postId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [error, setErr] = useState<Error | null>(null);
	const [addPostVoteMutation] = useAddPostVoteMutation();
	const [deleteVoteMutation] = useDeleteVoteMutation();

	const castVote = async (vote: string) => {
		if (!id) {
			return;
		}

		try {
			await deleteVoteMutation({
				variables: {
					postId,
					userId: id
				}
			});

			await addPostVoteMutation({
				variables: {
					postId,
					userId: id,
					vote
				}
			});

			refetch();
		} catch (error) {
			setErr(error);
		}
	};

	return (
		<Card className={className}>
			<OffChainSignalBar
				ayeSignals={ayes}
				naySignals={nays}
			/>
			<div className='info text-muted'>Signals are off chain.</div>
			<div>
				{error?.message && <FilteredError className='info' text={error.message}/>}
			</div>
			{id && <Form standalone={false}>
				<AyeNayButtons
					disabled={false}
					onClickAye={() => castVote(AYE)}
					onClickNay={() => castVote(NAY)}
				/>
			</Form>}
		</Card>
	);
};

export default styled(CouncilSignals)`
	.info {
		margin: 1em 0;
	}

	.errorText {
		color: red_secondary;
	}
`;
