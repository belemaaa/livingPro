import React from 'react';
import { render, screen, debug } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatDemo from './ChatDemo';

test('Receiver messages are displayed on the left side', () => {
  const { queryAllByText } = render(
    <ChatDemo
      messages={[
        { text: 'Hello', sender: 'sender' },
        { text: 'Hi there!', sender: 'receiver' },
      ]}
    />
  );

  console.log('Rendered component:', screen.debug());
  const receiverMessages = queryAllByText('Hi there!', { exact: false });
  console.log('Receiver messages:', receiverMessages);

  expect(receiverMessages).toHaveLength(1); 
  expect(receiverMessages[0]).toHaveClass('receiver-message');
});
