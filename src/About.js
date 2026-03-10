import React from 'react';
import TeamMember from './TeamMember';

const team = [
  { name: 'Alice Smith', role: 'Director' },
  { name: 'Bob Johnson', role: 'Producer' },
  { name: 'Claire Lee', role: 'Writer' },
  { name: 'David Kim', role: 'Cinematographer' },
  { name: 'Eva Martinez', role: 'Editor' }
];

const About = () => {
  return (
    <div className="pt-24 pb-8 px-8">
      <h2 className="text-4xl mb-8 text-center">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;