import Header from './components/Header';
import SearchArea from './components/SearchArea';
import ImageContainer from './components/ImageContainer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <Header title="React AI Image Generator 9000" />
      <ImageContainer/>
      <SearchArea/>
      <ToastContainer />
    </div>
  );
}

export default App;
