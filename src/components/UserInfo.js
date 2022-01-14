import Avatar from './Avatar';
import './UserInfo.css';

const UserInfo =(props)=>{
 return (
    <div className="userInfo">
    <Avatar author={props.author}/>
    <h3>{props.author.name}</h3>
   </div>
 );
};
export default UserInfo