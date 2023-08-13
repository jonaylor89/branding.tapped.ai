import React from 'react';
import { useRouter } from 'next/navigation';
import auth from '@/data/auth';

const withSubscription = (Component) => async (props) => {
  const router = useRouter();

  const claim = await auth.getCustomClaimRole();
  if (claim === null) {
    router.push('/pricing');
    return;
  }

  return (
    <>
      <Component {...props} />
    </>
  );
};

export default withSubscription;
