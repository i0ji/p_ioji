import s from './RoadmapCard.module.scss';

export default function RoadmapCard(props: Data.RoadmapModel) {
  return (
    <div className={s.card}>
      <h4>{props.year}</h4>
      <h6>{props.headder}</h6>
      <p>{props.description}</p>
      {/* <div>
        {props.technologies.map((elem) => (
          <div>{elem}</div>
        ))}
      </div> */}
    </div>
  );
}
