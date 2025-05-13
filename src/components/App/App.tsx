import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';
import { useState } from 'react';
export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    setVotes((votes) => ({ ...votes, [type]: votes[type] + 1 }));
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
