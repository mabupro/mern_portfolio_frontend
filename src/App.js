import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultHeader } from "./components/DefaultHeader";
import { NavigationBar } from "./components/NavigationBar";
import { IndexPage } from './pages/IndexPage';
import { ShowQiitaPage } from './pages/ShowQiitaPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultHeader />
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<IndexPage />} />
          <Route exact path='/qiita' element={<ShowQiitaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
