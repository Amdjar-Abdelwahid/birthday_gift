import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Sample initial wishes
const initialWishes = [
  {
    id: 1,
    name: 'Abdelwahid Amdjar',
    message: 'Happy birthday Mariem! I hope today brings you as much joy and love as you bring to those around you. You truly deserve all the beautiful things in life. May this year be your most amazing one yet. 💫❤️🎉'
  },
  {
    id: 2,
    name: 'Meriem Kouchak',
    message: 'Happy birthday to my best friend, 🥳🤩my rare pearl! You are so much more than just a friend to me... you\'re like a mother🤗❤: gentle, caring, and always there for me. Your heart is full of kindness and tenderness, and every moment spent with you is a true gift. I love you so much—you can\'t even imagine how deeply. I wish you a year full of love, laughter, health, and beautiful surprises. Thank you for being in my life, Meriem. I love you ❤❤❤'
  },
  {
    id: 3,
    name: 'Aabir',
    message: 'Happy Birthday to my beautiful best friend! 🥳💖I\'m so grateful for every memory we\'ve made and every silly moment we\'ve shared. You deserve all the love and happiness. Keep shining, keep smiling, and never forget how much you mean to me. Love you always!😍'
  },
  {
    id: 4,
    name: 'Oumaima taoufiq',
    message: 'Hello my sister my best friend my support I wish a happy birthday all the best in your personal and professional live love you so much ❤️ thank you for being in my life 🥰🥰'
  },
  {
    id: 5,
    name: 'Maroua taoufiq',
    message: '*Happy Birthday my sister!*  😍😍😍 You already know I\'m not good with words, but you\'re not just my sister — you\'re like a mom to me. Even when I annoy you sometimes, you always think of me and stand by my side when I need something. I\'ll never forget how much you support me. I honestly don\'t know what to say because no words can describe you. What I can say is: *I love you❤️🫶*. You are my support, the soft heart who\'s always there for me. 💪🫀 May God bless you and always keep you by my side. I also want to say: may God keep your friends for you ,they\'re truly good people who care about you, and you deserve them. 🤍❤️‍🔥 May you succeed in your studies, and may everything go well for you. 🎀💓 And seriously... *I love you so, so much ❤️🥹*'
  },
  {
    id: 6,
    name: 'Maroua taoufiq',
    message: 'Bite ngole wahde lhja nsitha smhi lya ila chi nhare glte lik chi haja wlah ila ana 5ir hbila madiche 3lya wa5a makntsntche lik walkine chi b3de lm5ate makndwiche mzn rahe kanhtarmke 🤣🥹ou Kanb5ike ♥️'
  },
  {
    id: 7,
    name: 'Fatimezzahra elfels',
    message : 'Happy birthday maryoma❤️🫶 We’ve known each other for so many years, We\'ve laughed until we cried, danced like no one was watching, and lived through so many crazy moments—good and bad. But no matter what life threw at us, we always stayed together. That’s what makes our friendship so special.  We’ve been through a lot—ups, downs, heartbreaks, victories, tears, and endless laughter. Yet through it all, we never let go of each other. You’re more than a friend to me; you’re L9lb lkbiir💝 you\'re my Beautiful Sister 💐👑  Even in our wildest and silliest moments, we found peace in each other’s presence. Thank you for always being there, for growing with me, for staying when it got hard, and for making life so much brighter just by being in it.  I wish you a birthday full of joy, love, and everything you truly deserve. May this year bring you closer to your dreams, surround you with peace, and remind you how deeply loved you are—not just today, but always.  I love you endlessly, and I’ll always be here—just like you’ve always been here for me. Happy Birthday, my forever friend Laykhlina dima mjmo3iin 🫶🫶❤️'
  },
  {
    id: 8,
    name: 'Acharf laksiri',
    message : 'happy birthday maryam , wish u the best in the upcoming years indeed success and chi 3rs ra wa9fin 3lih '
  }
];

const WishesSection: React.FC = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialWishes.map((wish) => (
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
      </motion.div>
    </section>
  );
};

export default WishesSection;