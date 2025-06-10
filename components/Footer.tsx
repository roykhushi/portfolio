"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Failed to send message.');
    }
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
    className="container bg-white dark:bg-black border-t dark:border-white/10 mt-auto">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch.👋</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                If you have any queries, feel free to reach out via my email {" "}
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=roykhushi432@gmail.com">
                <span className='text-blue-600 cursor-pointer font-semibold'>roykhushi432@gmail.com</span>
                </Link>
                
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
              © {new Date().getFullYear()} Designed & Developed with 💙 by Khushi Roy
            </p>
          </div>

          <div>
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Me</h3> */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className='space-y-1'>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 text-sm rounded-lg border dark:border-gray-700 dark:bg-black"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 text-sm rounded-lg border dark:border-gray-700 dark:bg-black"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 text-sm rounded-lg border dark:border-gray-700 dark:bg-black h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full px-4 py-2 text-sm cursor-pointer bg-black dark:bg-white dark:text-black font-semibold text-white rounded-lg"
              >
                Send Message <Send />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}