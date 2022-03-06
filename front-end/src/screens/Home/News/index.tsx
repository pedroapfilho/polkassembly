// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

interface Props {
  className?: string
}

const News = ({ className }: Props) => {
	return (
		<div className={className}>
			<h1>News</h1>
			<div className="card">
				<Grid stackable>
					<Grid.Row>
						<Grid.Column className='action-bar' width={16}>
							<Icon name='search' />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className='event-content-row'>
						<Grid.Column className='event-list-col' width={16}>
							News List
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</div>
	);
};

export default styled(News)`
	.card {
		background: #fff;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 10px;
		max-height: 500px;

		.action-bar {
			display: flex !important;
			justify-content: end !important;
			border-bottom: 2px #eee solid;
			padding-bottom: 1em;
		}

		.event-content-row{
			padding-top: 0;
		}

		.event-list-col {
			overflow-y: auto;
			border-right: 2px #eee solid;
		}
		
		.event-list-col{
			padding-top: 1em;
		}
	}

`;
