import { Tag } from "./Tag";
import "./LaunchItem.css";

function LaunchItem({ launch }) {
  return (
    <li className="launch-card">
      <section className="mission-name">
        <h3>
          Mission <strong>{launch.name}</strong>{" "}
          <small>({launch.date_utc.slice(0, 4)})</small>
        </h3>
        <Tag isSuccess={launch.success} />
      </section>
      <span className="mission-date">{launch.date_utc.slice(0, 10)}</span>
      <button className="mission-button">More Details</button>
    </li>
  );
}

export { LaunchItem };
