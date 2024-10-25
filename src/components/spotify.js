import React from 'react';

const Spotify = () => {
  const htmlString = `
    <!-- Your HTML widget code here -->
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7LnXSfFVbqz2FBRsllPvSJ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export default Spotify;

