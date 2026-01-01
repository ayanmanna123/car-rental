import React, { useState } from 'react';
import { auth } from './Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, AlertCircle, CheckCircle } from 'lucide-react';

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Please check your email.');
      setIsError(false);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setIsError(true);
      switch (error.code) {
        case 'auth/invalid-email':
          setMessage('Please enter a valid email address.');
          break;
        case 'auth/user-not-found':
          setMessage('No account found with this email address.');
          break;
        case 'auth/too-many-requests':
          setMessage('Too many attempts. Please try again later.');
          break;
        default:
          setMessage('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-2xl p-8 overflow-hidden"
      >
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 dark:bg-orange-900/20">
            <Mail className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-zinc-300 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 pl-11 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none disabled:opacity-50"
              />
              <Mail className="w-5 h-5 text-gray-400 dark:text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Message Alert */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 p-4 rounded-xl border ${isError
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400'
                    : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50 text-green-600 dark:text-green-400'
                  }`}
              >
                {isError ? <AlertCircle className="w-5 h-5 shrink-0" /> : <CheckCircle className="w-5 h-5 shrink-0" />}
                <p className="text-sm font-medium">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all disabled:opacity-70"
            >
              {isLoading ? 'Processing...' : 'Send Reset Link'}
            </motion.button>

            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="w-full py-2 text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors"
            >
              Back to Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;