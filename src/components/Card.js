

export default function Card(props) {
  
  return (
    <div className="card">
      <img src={`../assets/${props.img}`} alt="" /> 
      {props.title && <h2>Title: {props.title}</h2>} {/* show the title header only 
                                                      when the props has a title */}
      <p>{props.text}</p>
      <button>Learn More</button>
    </div>
  );
}
