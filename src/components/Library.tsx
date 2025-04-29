import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { motion } from 'framer-motion';

function Library() {
  const book = books[0]; // Only one book for now

  return (
    <div className="min-h-screen bg-[#fff7f0] flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-xl flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Header Section */}
        <div className="text-center mb-32">
          <h1 className="text-4xl font-bold text-[#3D8D7A] mb-2">
            Welcome to Sight Steps Library
          </h1>
          <p className="text-lg text-slate-600">
            Tiny Steps, Big Stories ✨
          </p>
        </div>

        {/* Library Card Section */}
        <Link
          to={`/book/${book.id}`}
          className="bg-white border border-gray-200 shadow-xl rounded-xl p-8 w-full flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-2xl font-semibold text-slate-700 mb-4">
            {book.title}
          </div>
          <button className="mt-4 bg-[#B3D8A8] hover:bg-[#B3D8A8]/75 text-slate-700 font-semibold py-2 px-4 rounded-full transition-all duration-300">
            View Book
          </button>
        </Link>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link to="/" className="text-gray-500 underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Library;
