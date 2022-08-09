
import icon from '../assets/Fill 220.svg'

function Journal(props) {
console.log(props);
  return (
    <div className="journals">

        <div className="journal">
          <div className="image">
            <img src={props.journal.imageUrl} alt={props.journal.title} />
          </div>
          <div className="details">
            <div className="location">
              <img className="location-icon" src={icon} alt="Location Icon" />
              <span className="location-name">{props.journal.location}</span>
              <a href={props.journal.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.journal.title}</h1>
            <div className="date">
              <span className="start">{props.journal.startDate} - </span>
              <span className="end"> {props.journal.endDate}</span>
            </div>
            <div className="description">
              <p>
              {props.journal.description}
              </p>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Journal