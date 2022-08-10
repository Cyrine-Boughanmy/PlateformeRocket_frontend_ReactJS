import React from 'react';
import PrimarySearchAppBar from '../../Dashboard/Default/Navbar';
import ProfileEvaluatinBootcampPage from './ProfileEvaluatinBootcampPage';
import ProfileInfos from './ProfileInfos';
import ProfileNotesEvaluationPage from './ProfileNotesEvaluationPage';

const ProfilePage = () => {
  return (
    <>
    <PrimarySearchAppBar />
    <ProfileInfos/>
    <ProfileEvaluatinBootcampPage/>
    <ProfileNotesEvaluationPage/>
    </>
  );
}

export default ProfilePage;
