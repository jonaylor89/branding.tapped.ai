import React from 'react';
import { useRouter } from 'next/navigation';
import firebase from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const withAuth = (Component) => async (props) => {
  const router = useRouter();

  onAuthStateChanged(firebase.auth, (authUser) => {
    if (!authUser) {
      router.push('/login');
    }
  });

  return (
    <>
      <Component {...props} />
    </>
  );
};

export default withAuth;
