


export default function Card(props) {
  return (

    <div className="card-container">

      <div className="card">
        <img src={`../assets/${props.img}`} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>Learn More</button>
      </div>

    </div>

  );
}
