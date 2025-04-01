'use client';

import { roadmapData } from 'public/roadmap/roadmapData';

import { RoadmapCard } from 'components/index';

export default function Roadmap() {
  return (
    <div>
      {roadmapData.map((elem) => (
        <RoadmapCard
          year={elem.year}
          headder={elem.headder}
          description={elem.description}
          technologies={elem.technologies}
        />
      ))}
    </div>
  );
}
