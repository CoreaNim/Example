import React from 'react';
import FriendMain from './friend/container/FriendMain';
import TimelineMain from './timeline/container/TimelineMain';
import { Provider } from 'react-redux';
import store from './common/store';

export default function App() {
  return (
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  );
}
