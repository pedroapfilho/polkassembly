// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';

import DefaultAddressInfoBox from '../../components/DefaultAddressInfoBox';
import NetworkInfo from '../../components/NetworkInfo';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useRouter } from '../../hooks';
import Button from '../../ui-components/Button';
import LatestActivity from './LatestActivity';
import TreasuryOverviewCards from './TreasuryOverviewCards';

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<div className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<h1 style={ { fontSize: '4.4rem', fontWeight: 500 } }>Dashboard</h1>
					<NetworkInfo />
					<br/><br/>
					<TreasuryOverviewCards />
					<br/><br/>
					<LatestActivity />
					<br/><br/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					{currentUser.id && <div className='mainButtonContainer'>
						<Button primary className={'newPostButton'} onClick={handleCreatePost}>New post</Button>
					</div>}
					{currentUser.id && currentUser.addresses?.length !== 0 && !currentUser.defaultAddress &&
						<DefaultAddressInfoBox />}
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default styled(Home)`

	.referendumContainer, .proposalContainer, .discussionContainer, .motionContainer, .treasuryContainer, .tipContainer, .bountyContainer, .techCommitteeProposalContainer {
		margin-bottom: 3rem;
	}

	h1 {
		@media only screen and (max-width: 576px) {
			margin: 3rem 1rem 1rem 1rem;
		}

		@media only screen and (max-width: 768px) and (min-width: 576px) {
			margin-left: 1rem;
		}

		@media only screen and (max-width: 991px) and (min-width: 768px) {
			margin-left: 1rem;
		}
	}

	@media only screen and (max-width: 992px) {
		.default-address-infobox {
			display: none;
		}
	}

	@media only screen and (max-width: 768px) {

		.mainButtonContainer {
			margin: 0rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}

		.mainButtonContainer {
			margin-top: 1rem!important;
		}
	}

	@media only screen and (max-width: 576px) {

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 1rem!important;

			.newPostButton {
				padding: 0.8rem 1rem;
				border-radius: 0.5rem;
			}
		}
	}

	li {
        list-style-type: none;
    }

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}
`;
