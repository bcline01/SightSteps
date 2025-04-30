import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { motion } from 'framer-motion';

function BookPage() {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) return <div>Book not found</div>;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: book.theme?.backgroundColor || "#fff7f0" }}
    >
      <motion.div
        className="bg-white shadow-xl border border-gray-200 rounded-xl max-w-3xl w-full p-8 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: book.theme?.headerColor || "#3D8D7A" }}
        >
          {book.title}
        </h1>

        <div className="flex flex-col gap-4">
          {book.chapters.map((chapter, index) => (
            <Link
              key={index}
              to={`/book/${book.id}/chapter/${index}`}
              style={{ backgroundColor: book.theme?.buttonColor || "#B3D8A8" }}
              className="hover:opacity-90 text-slate-700 text-lg font-semibold py-4 px-6 rounded-full text-center transition-all duration-300"
            >
              {chapter.title}
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-500 underline text-sm">
            ← Back to Library
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default BookPage;
