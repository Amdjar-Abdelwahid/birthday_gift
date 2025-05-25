import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';

interface Wish {
  id: number;
  name: string;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({ name: false, message: false });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch wishes from API
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch(`${API_URL}/wishes`);
        if (!response.ok) throw new Error('Failed to fetch wishes');
        const data = await response.json();
        setWishes(data.wishes);
      } catch (err) {
        setError('Failed to load wishes. Please try again later.');
        console.error('Error fetching wishes:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: newWish.name.trim() === '',
      message: newWish.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.message) return;
    
    try {
      const response = await fetch(`${API_URL}/wishes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newWish.name.trim(),
          message: newWish.message.trim()
        }),
      });

      if (!response.ok) throw new Error('Failed to add wish');
      
      const addedWish = await response.json();
      setWishes(prevWishes => [...prevWishes, addedWish]);
      setNewWish({ name: '', message: '' });
    } catch (err) {
      setError('Failed to add wish. Please try again later.');
      console.error('Error adding wish:', err);
    }
  };

  if (isLoading) {
    return (
      <section className="py-16" id="wishes">
        <div className="text-center">Loading wishes...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16" id="wishes">
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-16" id="wishes">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-pink-500">Messages de Vœux</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex items-start">
                <Heart className="text-pink-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">{wish.name}</h3>
                  <p className="text-gray-700">{wish.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl mb-6 text-center">Laissez un message à Mariem</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Votre nom</label>
              <input
                type="text"
                id="name"
                value={newWish.name}
                onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Entrez votre nom"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Veuillez entrer votre nom</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Votre message</label>
              <textarea
                id="message"
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={4}
                placeholder="Écrivez votre message d'anniversaire..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Veuillez entrer un message</p>
              )}
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="btn btn-primary inline-flex items-center"
              >
                <Send size={20} className="mr-2" />
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default WishesSection;