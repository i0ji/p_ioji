import { roadmapData } from 'public/roadmap/roadmapData';

import { nanoid } from 'nanoid';

import { RoadmapCard } from 'components/index';

export default function Roadmap() {
  return (
    <div className={s.road}>
      {roadmapData.map((elem) => (
        <RoadmapCard key={nanoid()} {...elem} />
      ))}
    </div>
  );
}
