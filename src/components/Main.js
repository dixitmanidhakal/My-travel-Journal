export default function Main(props) {
  return (
    <div className="main">
      <img className="main-image" src={`./images/${props.img}`} alt="image" />
      <div className="flex-content">
        <div className="main-title">
          <img
            className="location-logo"
            src="./images/location-logo.png"
            alt="location-logo"
          />
          <h5 className="location-heading"> {props.id} </h5>
          <a href={props.map} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="heading-tilicho"> {props.destination}</h2>
        <h5 className="heading-date"> {props.date}</h5>
        <p> {props.description}.</p>
      </div>
    </div>
  );
}
