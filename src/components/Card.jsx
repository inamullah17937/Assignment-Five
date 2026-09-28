import "./Card.css";

function Card(props) {
  return (
    <div className="profile-card">
      <div className="card-glow"></div>

      <div className="profile-image-wrapper">
        <img src={props.image} alt={props.name} className="profile-image" />
        <span className="online-dot"></span>
      </div>

      <div className="profile-content">
        <p className="employee-label">EMPLOYEE</p>

        <h2>{props.name}</h2>
        <p className="profile-role">{props.role}</p>

        <div className="profile-info">
          <div className="info-item">
            <span>📧</span>
            <span>{props.email}</span>
          </div>

          <div className="info-item">
            <span>📍</span>
            <span>{props.location}</span>
          </div>
        </div>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>

        <button className="profile-btn">
          View Profile
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default Card;