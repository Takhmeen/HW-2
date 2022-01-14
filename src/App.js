import './App.css';
import Comment from './components/Comment';
import Card from './UI/Card';
import Photo from './img/photo.jpg'


const commentData={
  date: new Date(2022, 1, 13),
    text: 'Follow your heart!',
    author: {
      name: 'Takhmina Zholdosheva',
      avatarUrl: Photo,
    },
}


function App() {
  return (
    <Card>
     <Comment author={commentData.author} date={commentData.date} text={commentData.text}/>
    </Card>
  );
}

export default App;
