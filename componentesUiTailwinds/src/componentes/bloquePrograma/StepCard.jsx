export function StepCard({ icon, title, subtitle }) {
  return (
    <article className="mp-card">
      <div className="mp-iconCol">
        <img
          src={icon}
          alt=""
          className="mp-icon"
          loading="lazy"
          draggable="false"
        />
      </div>

      <div className="mp-textCol">
        <h3 className="mp-cardTitle">{title}</h3>
        <p className="mp-cardSub">{subtitle}</p>
      </div>
    </article>
  );
}