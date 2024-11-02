import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Importing your components
import DotMap from './routes/DotMap'; // The DotMap page/component
import Locator from './routes/Locator';
import RelatedBusiness from './routes/RelatedBusiness';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DotMap />} />
      <Route path="locator" element={<Locator />} />
      <Route path="related_business" element={<RelatedBusiness />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
