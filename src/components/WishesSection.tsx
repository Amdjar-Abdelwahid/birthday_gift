import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';

// Sample initial wishes
const initialWishes = [
  { id: 1, name: 'Sophie', message: 'Joyeux anniversaire Mariem! Je te souhaite une journée remplie de bonheur et d\'amour. Tu es une personne incroyable! ❤️' },
  { id: 2, name: 'Thomas', message: 'Bon anniversaire! Que cette journée soit aussi spéciale que toi. Profite bien! 🎉' },
  { id: 3, name: 'Léa', message: 'Joyeux anniversaire ma belle! Je te souhaite tout le bonheur du monde. Tu le mérites! 🎂' }
];

const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState(initialWishes);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({ name: false, message: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: newWish.name.trim() === '',
      message: newWish.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.message) return;
    
    // Add new wish
    setWishes([
      ...wishes,
      { 
        id: Date.now(), 
        name: newWish.name, 
        message: newWish.message 
      }
    ]);
    
    // Reset form
    setNewWish({ name: '', message: '' });
  };

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