import './FooterText.css';


const FooterText=(props)=>{
    return(
        <div className='Footer'>
            <div className="Comment-text">{props.text}</div>
           <div className="Comment-date">{props.date.toLocaleString()}</div>
        </div>
    )
}
export default FooterText