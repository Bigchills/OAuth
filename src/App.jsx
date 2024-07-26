import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Homepage from './Pages/Homepage';
import Splashscreen from './components/Splashscreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  return (
    <BrowserRouter>
      <>
        {loading ? (
          <Splashscreen/>
        ) : (
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/home' element={<Homepage />} />
          </Routes>
        )}
      </>
    </BrowserRouter>
  );
};

export default App;
