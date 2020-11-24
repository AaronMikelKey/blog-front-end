import React from 'react';
import Navbar from './components/navbar';
 
const App = ({ title }) =>

  <div>
    <Navbar />
    {title}
  </div>;

export default App;