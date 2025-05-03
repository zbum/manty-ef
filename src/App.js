import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBoardForm} from "./features/board/AddBoardForm";
import { BoardList } from "./features/board/BoardList";
import { BoardPage} from "./features/board/BoardPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/board/:id" element={<BoardPage />} />
          <Route path="/board" element={<AddBoardForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
