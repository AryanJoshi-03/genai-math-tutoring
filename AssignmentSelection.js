import React from 'react';

const AssignmentSelection = ({ chapter, onSelectAssignment }) => {
  const assignments = ['4.1', '4.3', '4.6']; // Example assignments

  return (
    <div>
      <h2>Select an Assignment for Chapter {chapter}</h2>
      <ul>
        {assignments.map(assignment => (
          <li key={assignment} onClick={() => onSelectAssignment(assignment)}>
            Assignment {assignment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentSelection;
