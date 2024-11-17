import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white px-4 py-2"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white px-4 py-2"
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Join Waitlist <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      ) : (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-lg font-medium text-green-800">Thank you for joining!</h3>
          <p className="mt-2 text-sm text-green-600">
            We'll keep you updated on our progress.
          </p>
        </div>
      )}
    </div>
  );
}