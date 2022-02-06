import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostTechCommitteeProposal from '../../screens/TechCommitteeProposalPost'

interface Props {
  id: number
}

const PostTechCommitteeProposalPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Tech</title>
        <meta name="description" content="Polkaassembly | Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostTechCommitteeProposal id={id} />
    </div>
  )
}

PostTechCommitteeProposalPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostTechCommitteeProposalPage
