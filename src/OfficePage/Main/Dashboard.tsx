import { useState } from 'react';
import BubbleChart from './BubbleChart';
import CharacterWiki from '../../CharacterWiki/CharacterWiki';
import Data from './Data';
import { IPerson } from '../../Interfaces';

// Normally Data would be fetched but for challenge just imported a fake file

export default function Dashboard(): JSX.Element {
  const [showCharacterWiki, setShowCharacterWiki] = useState(false);
  const [character, setCharacter] = useState<IPerson>({
    title: '',
    firstName: '',
    lastName: '',
    age: 0,
    height: 0,
    weight: 0,
    gender: '',
    city: '',
    country: '',
    image: '',
    favoriteQuote: ''
  });

  return (
    <>
      <div className="main-display">
        <BubbleChart data={Data} setCharacter={setCharacter} setShowCharacterWiki={setShowCharacterWiki} />
      </div>
      <CharacterWiki character={character} showCharacterWiki={showCharacterWiki} setShowCharacterWiki={setShowCharacterWiki} />
    </>
  );
};
