import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from '@/utils/firebase';
import database from '@/data/database';
import auth from '@/data/auth';
import { onAuthStateChanged } from '@firebase/auth';

const withSubscription = (Component) => (props) => {
  useEffect(() => {
    onAuthStateChanged(firebase.auth, (authUser) => {
      if (!authUser) {
        router.push('/login');
      }
      auth.getCustomClaimRole().then((claim) => {
        console.log('Tapped Subscription', claim);
        if (claim === null) {
          router.push('/pricing');
          return;
        }
      });

      database.addCustomerSubscriptionListener(authUser.uid, (snapshot) => {
        if (snapshot.empty) {
          router.push('/pricing');
        }
      });
    });
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};

export default withSubscription;
