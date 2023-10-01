import { Route, RouterProvider, createHashRouter ,createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Record from './pages/record';

function App() {

  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Record />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
