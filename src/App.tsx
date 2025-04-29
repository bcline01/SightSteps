import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import BookPage from './components/BookPage';
import ChapterPage from './components/ChapterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/book/:bookId/chapter/:chapterIndex" element={<ChapterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
