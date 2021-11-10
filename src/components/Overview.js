import React from 'react';

const PersonalInfo = (props) => {
  const { info } = props;

  return (
    <div>
      <h2> {info.firstname}</h2>
    </div>
  );
};

export default PersonalInfo;
