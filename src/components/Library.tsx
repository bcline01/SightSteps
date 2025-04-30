import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { motion } from 'framer-motion';

function Library() {
  return (
    <div className="min-h-screen bg-[#fff7f0] flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-6xl flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-[#3D8D7A] mb-2">
            Welcome to Sight Steps Library
          </h1>
          <p className="text-lg text-slate-600">Tiny Steps, Big Stories ✨</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-start">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="bg-white border border-gray-200 shadow-xl rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-auto max-h-80 object-contain rounded-lg mb-6"
              />
              <button
                className="bg-[#B3D8A8] hover:bg-[#B3D8A8]/75 text-slate-700 font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                View Book
              </button>
            </Link>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-20 text-center">
          <Link to="/" className="text-gray-500 underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Library;
