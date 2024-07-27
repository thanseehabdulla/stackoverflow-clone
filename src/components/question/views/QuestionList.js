import React from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Link, Content, Tile, Button } from '@carbon/react';
import './../styles/QuestionList.css';
import '@carbon/styles/css/styles.css';

const rows = [
  { id: '1', title: 'How to use React?', author: 'User1', date: '2024-07-01', votes: 5, answers: 2 },
  { id: '2', title: 'What is Carbon Design System?', author: 'User2', date: '2024-07-02', votes: 3, answers: 1 },
  { id: '3', title: 'How to manage state in React?', author: 'User3', date: '2024-07-03', votes: 8, answers: 4 },
];

const headers = [
  { key: 'title', header: 'Title' },
  { key: 'author', header: 'Author' },
  { key: 'date', header: 'Date' },
  { key: 'votes', header: 'Votes' },
  { key: 'answers', header: 'Answers' },
];

const QuestionList = () => {
  return (
    <Content>
      <TableContainer title="Questions" className="question-list">
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header.key}>{header.header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.votes}</TableCell>
                <TableCell>{row.answers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Tile className="introduction">
        <h2>Introduction to React and JavaScript</h2>
        <p>
          <strong>React</strong> is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
        </p>
        <p>
          <strong>JavaScript</strong> is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It is used to create interactive effects within web browsers.
        </p>
        <p>
          For more information and tutorials, visit the official documentation:
          <ul>
            <li>
              <Link href="https://reactjs.org/docs/getting-started.html" target="_blank">React Documentation</Link>
            </li>
            <li>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">JavaScript Guide</Link>
            </li>
          </ul>
        </p>
        <h3>How to Deploy on OpenShift</h3>
        <p>
          To deploy this application on OpenShift, follow these steps:
          <ol>
            <li>Log in to your OpenShift account.</li>
            <li>Create a new project in OpenShift.</li>
            <li>Install the OpenShift CLI.</li>
            <li>Build the Docker image for your React application:</li>
            <pre>
              <code>
                docker build -t my-react-app .
              </code>
            </pre>
            <li>Push the Docker image to OpenShift:</li>
            <pre>
              <code>
                oc new-app my-react-app
              </code>
            </pre>
            <li>Expose the service to create a route:</li>
            <pre>
              <code>
                oc expose svc/my-react-app
              </code>
            </pre>
            <li>Access your application via the route provided by OpenShift.</li>
          </ol>
        </p>
        <Button href="https://www.openshift.com/" target="_blank" kind="primary">
          Learn more about OpenShift
        </Button>
      </Tile>
    </Content>
  );
};

export default QuestionList;
