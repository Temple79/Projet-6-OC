import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
            <main>
                <App />
            </main>
          <Footer />
        </BrowserRouter>
    <App />
  </React.StrictMode>
);

