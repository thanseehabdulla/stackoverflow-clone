import React from 'react';
import { Tile } from '@carbon/react';

const questionDetail = {
  id: '1',
  title: 'How to use React?',
  author: 'User1',
  date: '2024-07-01',
  content: 'React is a JavaScript library for building user interfaces...',
  answers: [
    { id: 'a1', author: 'User2', content: 'You can use React by creating components...' },
    { id: 'a2', author: 'User3', content: 'React is used for building single-page applications...' },
  ],
};

const QuestionDetail = () => {
  return (
    <Tile>
      <h2>{questionDetail.title}</h2>
      <p><strong>Author:</strong> {questionDetail.author}</p>
      <p><strong>Date:</strong> {questionDetail.date}</p>
      <p>{questionDetail.content}</p>
      <h3>Answers</h3>
      {questionDetail.answers.map((answer) => (
        <Tile key={answer.id} className="answer-tile">
          <p><strong>{answer.author}</strong></p>
          <p>{answer.content}</p>
        </Tile>
      ))}
    </Tile>
  );
};

export default QuestionDetail;
