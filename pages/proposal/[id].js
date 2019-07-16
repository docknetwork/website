import { useRouter } from 'next/router';
import Page from '../../layouts/main';

const Proposal = ({ id }) => {
  const router = useRouter();

  return (
    <Page>
      <h1>hey: {id}</h1>
    </Page>
  );
};

Proposal.getInitialProps = async function({ query }) {
  return {
    id: query.id
  };
};

export default Proposal;
