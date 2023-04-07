import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App"
import './index.scss';
import './Pages/News/news.scss'; 
import './Pages/New/new.scss';
import './Pages/Past/past.scss';
import './Pages/Comment/comment.scss';
import './Pages/Content/content.scss'; 
import './Pages/Submit/submit.scss'; 






// ReactDOM.render(
//   <Router>
//     <App/>
//   </Router>,
    
// document.getElementById('root')
// );

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<Router>
  <App/>
  </Router>)


