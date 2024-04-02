import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Post from './pages/post';
import Step from './pages/Steps';
function App() {
	return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:postId' element={<Post/>} />
        <Route path='/Steps' element={<steps/>} />
      </Routes>
    </>
	);
}

export default App;
