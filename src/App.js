import { useState } from 'react';

import Header from './components/Header';
import Questions from './components/Questions';

function App() {
  const [showingQuestions, setShowingQuestions] = useState(true);

  const onButtonClick = (e) => {
    e.preventDefault();
    setShowingQuestions(false);
  };

  return showingQuestions ? (
    <>
      <Header />
      <Questions onClick={onButtonClick} />
    </>
  ) : (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>
        <strong>YES.</strong>
      </h1>
      <div style={{position: 'absolute', bottom: '10px', width: '100%'}}>
        <p
          style={{ textAlign: 'center'}}>
          Thanks for playing.
          I would appreciate it if you decided to share this quiz.
          This is complete satire of course please don't take it seriously.
        </p>
      </div>
    </>
  );
}

export default App;
