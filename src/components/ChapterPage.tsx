import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { books } from '../data/books';

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
      <p key={index} className="mb-4 text-lg leading-7">
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase();
          if (chapter.sightWords.includes(cleanWord)) {
            return (
              <span
                key={idx}
                onClick={() => handleSpeak(cleanWord)}
                className="bg-teal-200 text-black px-3 py-1 rounded-xl font-semibold cursor-pointer mr-2 inline-block"
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-3xl mx-auto p-8 flex flex-col flex-1">
        <h1 className="text-3xl font-bold text-teal-600 mb-8 text-center">{chapter.title}</h1>

        <div className="flex-1">
          {currentSentences.map((sentence, idx) => renderSentence(sentence, idx))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="bg-teal-400 hover:bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Back
          </button>

          <span className="text-gray-500 text-sm">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="bg-teal-400 hover:bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
      </div>
    </div>
  );
}

export default ChapterPage;
