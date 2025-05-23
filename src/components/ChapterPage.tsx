import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { books } from '../data/books';
import { motion } from 'framer-motion';


function ChapterPage() {
  const { bookId, chapterIndex } = useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) return <div>Book not found</div>;

  const chapter = book.chapters[Number(chapterIndex)];

  if (!chapter) return <div>Chapter not found</div>;

  const sentences = chapter.text
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const sentencesPerPage = 6;
  const totalPages = Math.ceil(sentences.length / sentencesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSpeak = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  const renderSentence = (sentence: string, index: number) => {
    const words = sentence.split(' ');

    return (
      <p key={index} className="mb-4 text-lg leading-7 text-slate-700">
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase();
          if (chapter.sightWords.includes(cleanWord)) {
            return (
              <span
                key={idx}
                onClick={() => handleSpeak(cleanWord)}
                style={{ backgroundColor: book.theme?.sightWordColor || "#A3D1C6" }}
                className="text-slate-700 px-3 py-1 rounded-xl font-semibold cursor-pointer mr-2 inline-block"
                                >
                {word}{' '}
              </span>
            );
          }
          return <span key={idx} className="mr-1">{word} </span>;
        })}
      </p>
    );
  };

  const startIndex = currentPage * sentencesPerPage;
  const currentSentences = sentences.slice(startIndex, startIndex + sentencesPerPage);
  const isLastPage = currentPage === totalPages - 1;
  const isLastChapter = Number(chapterIndex) === book.chapters.length - 1;

  // Reset currentPage when chapter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [chapterIndex]);

  return (
<div
  className="min-h-screen flex items-center justify-center p-4"
  style={{ backgroundColor: book.theme?.backgroundColor || "#fff7f0" }}
>
<motion.div
  className="max-w-3xl mx-auto p-8 flex flex-col flex-1 bg-white shadow-xl border border-gray-200 rounded-xl
 "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
<h1
  className="text-3xl font-bold mb-8 text-center"
  style={{ color: book.theme?.headerColor || "#3D8D7A" }}
>
  {chapter.title}
</h1>

        <div className="flex-1">
        {isLastPage && isLastChapter ? (
  <div className="text-center mt-12">
    <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Congratulations! 🎉</h2>
    <p className="text-lg text-gray-700">You finished the story. Great job reading!</p>
    <p className="mt-4 text-sm text-gray-500 mb-6">Feel free to read it again or explore other books in the library.</p>
  </div>
) : (
  <>
    {currentSentences.map((sentence, idx) => renderSentence(sentence, idx))}
    {isLastPage && !isLastChapter && (
      <div className="text-center mt-8">
        <Link
          to={`/book/${book.id}/chapter/${Number(chapterIndex) + 1}`}
          style={{ backgroundColor: book.theme?.buttonColor || "#B3D8A8" }}
          className="inline-block text-slate-700 font-semibold py-2 px-6 rounded-full transition-all duration-300"
        >
          Next Chapter →
        </Link>
      </div>
    )}
  </>
)}


        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="bg-emerald-800 hover:bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Back
          </button>

          <span className="text-gray-500 text-sm">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="bg-emerald-800 hover:bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Next
          </button>
        </div>

        <div className="mt-8 flex justify-between text-sm">
          <Link to={`/book/${book.id}`} className="text-gray-500 underline">
            ← Back to Book
          </Link>
          <Link to="/" className="text-gray-500 underline">
            ← Back to Library
          </Link>
        </div>
        </motion.div>

    </div>
  );
}

export default ChapterPage;
