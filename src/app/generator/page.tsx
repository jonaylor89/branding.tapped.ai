import type { NextPage } from 'next/types';
import withSubscription from '@/domain/auth/withSubscription';

const Generator: NextPage = () => {
  return (
    <>
      <h1>Generator</h1>
    </>
  );
};

export default withSubscription(Generator);
