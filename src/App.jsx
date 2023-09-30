import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Record from './pages/record';

function App() {

  const router = createBrowserRouter(
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
