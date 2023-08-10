import React from 'react';
import { NextPage } from 'next';
import FormDataManager from '@/components/form/FormDataManager';
import DescribeField from '@/components/application/describe_field';
import NameField from '@/components/application/name_field';
import EmailField from '@/components/application/email_field';
import LabelField from '@/components/application/label_field';
import ArtistProfessionField from '@/components/application/profession_field';
import FollowingField from '@/components/application/following_field';
import IgField from '@/components/application/ig_field';
import SignUpField from '@/components/application/signup_field';

const Application: NextPage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const pages = [
    NameField,
    EmailField,
    DescribeField,
    LabelField,
    ArtistProfessionField,
    FollowingField,
    IgField,
    SignUpField,
  ];
  const totalPages = pages.length;

  const handleNextPage = () => {
    console.log(`${currentIndex}: next page`);
    setCurrentIndex((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    console.log(`${currentIndex}: previous page`);
    setCurrentIndex((prev) => prev - 1);
  };

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  if (totalPages <= 0) {
    return (
      <>
        <h1>Form is empty</h1>
      </>
    );
  }

  const CurrentPage = pages[currentIndex];
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="w-full">
          <FormDataManager>
            {({ formData, updateFormData }) => {
              return (
                <>
                  <CurrentPage
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                  <div
                    className={`${
                      (currentIndex === 0 || currentIndex === (totalPages - 1)) ?
                        'flex justify-center' :
                        'flex justify-between'
                    }`}
                  >
                    {currentIndex !== 0 && (
                      <button
                        className="tapped_btn"
                        onClick={handlePreviousPage}
                      >
                       go back
                      </button>
                    )}

                    {currentIndex !== totalPages - 1 && (
                      <button className="tapped_btn" onClick={handleNextPage}>
                        ok
                      </button>
                    )}
                  </div>
                </>
              );
            }}
          </FormDataManager>
        </div>
      </div>
    </>
  );
};

export default Application;
