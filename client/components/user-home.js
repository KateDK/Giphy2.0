import React from 'react';
import SearchForm from './SearchForm';
import GifDisplay from './GifDisplay';

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div>
      <SearchForm />
      <GifDisplay className="display" />
    </div>
  );
};

export default UserHome;
