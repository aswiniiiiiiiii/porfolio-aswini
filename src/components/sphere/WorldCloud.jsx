import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import '../sphere/cloud.css';

const WorldCloud = () => {
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'NodeJS',
      'Express.js',
      'Angular',
      'MongoDB',
      'GITHUB',
    ];

    const options = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    // Initialize the TagCloud only once
    TagCloud(container, texts, options);

    // Cleanup the TagCloud on component unmount to prevent duplication
    return () => {
      // Cleanup logic if needed, although the library handles cleanup in some cases.
    };
  }, []);  // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className='text-sphere'>
      <span className="tagcloud"></span>
    </div>
  );
};

export default WorldCloud;
