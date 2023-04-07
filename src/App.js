import { Routes, Route } from 'react-router-dom'; 
import './App.scss';
import News from "./Pages/News/News"
import Navbar from './Components/Navbar/Navbar'
import New from './Pages/New/New';
import Comment from './Pages/Comment/Comment';
import Content from './Pages/Content/Content';
import Submit from './Pages/Submit/Submit';
import Past from './Pages/Past/Past'



function App() {
  return (
    <div className="App">
     <header>
      <Navbar/>
     </header>
     <main>
     <Routes>
<Route index="/" element={<News />}/>
  <Route path="new" element={<New/>}/>
  <Route path="past" element = {<Past />}/>
  <Route path="comment" element = {<Comment />}/>
  <Route path="content" element = {<Content/>}/>
  <Route path="submit" element = {<Submit/>}/>
</Routes>
     </main>
          
    </div>
  );
}

export default App;


