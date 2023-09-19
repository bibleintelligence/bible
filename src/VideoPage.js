import React from 'react';

const VideoPage = () => {
  return (
    <div>
      <h1>YouTube Channel</h1>

      {/* Embed a single video */}
      <div className="video-wrapper">
        <h2>Featured Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7wLlp7UFZ7g" // Replace VIDEO_ID with the actual video ID
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Embed a playlist */}
      <div className="video-wrapper">
        <h2>Anointed: The Rise and Fall of Kings</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vH8E73iRw5QC2Z0OTHraTMf" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <h2>Short Sermons</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vGn7o_iFOLmZTB6FpC5qkTC" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <h2>Christian Motivation</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vG3HeqWBIq62jd6DnFNJQIa" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <h2>Podcasts</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vHq8TyqgPQ22gPVt2A7D8WG" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <h2>Meditations</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vFwFSaAa9Etl6_fk2SfjzAQ" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <h2>Stories of the Bible</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLHBeS6kh6-vEwOoh6oKF6K40-GxD7aMQO" // Replace PLAYLIST_ID with the actual playlist ID
          title="YouTube video playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default VideoPage;
