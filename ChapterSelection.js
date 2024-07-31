import React from 'react';

const ChapterSelection = ({ onSelectChapter }) => {
  const chapters = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Select a Chapter</h2>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter} onClick={() => onSelectChapter(chapter)}>
            Chapter {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterSelection;
