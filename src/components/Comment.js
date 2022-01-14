import './Comment.css';
import FooterText from './FooterText';
import UserInfo from './UserInfo';


function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
           <FooterText text={props.text} date={props.date}/>
        </div>
    );
}
export default Comment