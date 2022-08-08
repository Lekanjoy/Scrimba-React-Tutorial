import Logo from '../assets/linkedin.svg';

export default function Card(props) {
  
  return (
    <div className="card">
      {/* <img src={`../assets/${props.img}`} alt="Icon" />  */}
      <img src={Logo} alt="Icon" width="40px" />
      {props.title && <h2>Title: {props.title}</h2>}{" "}
      {/* show the title header only 
                                                      when the props has a title */}
      <p>{props.text}</p>
      {props.num && <p>Lucky Number: {props.num}</p>}
      <button>Learn More</button>
    </div>
  );
}
