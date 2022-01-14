import './App.css';
import Comment from './components/Comment';
import Card from './UI/Card';
import Photo from './img/photo.jpg';
import burul from './img/burul.jpg';
import kanykei from './img/kani.jpg';



const commentData={
  date: new Date(2022, 1, 13),
    text: 'commented: "The future belongs to those who believe in their dreams!"',
    author: {
      name: 'Takhmina Zholdosheva',
      avatarUrl: Photo,
    },
}

const comment={
  date: new Date(2021, 11, 20),
    text: 'commented: "Life is a succession of lessons which must be lived to be understood."',
    author: {
      name: 'Burul Termechikova',
      avatarUrl: burul,
    },
}

const commentData2={
  date: new Date(2021, 8, 16),
    text: 'commented: "It’s never too late to be what you might have been !"',
    author: {
      name: 'Kanykei Shabdanbekova',
      avatarUrl: kanykei,
    },
}



function App() {
  return (
    <>
    <Card>
     <Comment author={commentData.author} date={commentData.date} text={commentData.text}/>
    </Card>
    <Card>
     <Comment author={comment.author} date={comment.date} text={comment.text}/>
    </Card>
      <Card>
    <Comment author={commentData2.author} date={commentData2.date} text={commentData2.text}/>
      </Card>
    </>
  );
}

export default App;
