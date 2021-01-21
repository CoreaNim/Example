import React from 'react';

export default function TimelineList({ timelines }) {
  return (
    <ul>
      {timelines.map((timeline) => (
        <li key={timeline}>{timeline.desc}</li>
      ))}
    </ul>
  );
}
