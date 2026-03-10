import React from 'react';

const TeamMember = ({ name, role }) => {
  return (
    <div className="bg-black bg-opacity-50 p-4 border border-primary rounded-none">
      <div className="h-32 w-full bg-gray-700 mb-4"></div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-primary">{role}</p>
    </div>
  );
};

export default TeamMember;