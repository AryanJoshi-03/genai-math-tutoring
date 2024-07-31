import React from 'react';

const QuestionNavigation = ({ assignment, onSelectQuestion }) => {
  const questions = [1, 2, 3]; // Example question numbers

  return (
    <div>
      <h2>Select a Question for Assignment {assignment}</h2>
      <ul>
        {questions.map(question => (
          <li key={question} onClick={() => onSelectQuestion(question)}>
            Question {question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionNavigation;
