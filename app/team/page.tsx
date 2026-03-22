import TeamCard2D from '../components/TeamCard2D';
import { useState } from 'react';

const members = [
  { name: 'John Doe', role: 'Designer' },
  { name: 'Jane Smith', role: 'Developer' },
  { name: 'Alice Johnson', role: 'Manager' },
  { name: 'Bob Brown', role: 'Analyst' },
];

export default function TeamsPage() {
  const [currentMember, setCurrentMember] = useState(0);

  const handleCardClick = () => {
    setCurrentMember((prev) => (prev + 1) % members.length);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <TeamCard2D member={members[currentMember]} onClick={handleCardClick} />
    </div>
  );
}
