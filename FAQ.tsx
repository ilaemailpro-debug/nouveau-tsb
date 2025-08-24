import React from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Clock, CreditCard, Gamepad2, HelpCircle, Lock, Phone, PiggyBank, Plus, Wallet } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, icon }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white/30 backdrop-blur-sm rounded-xl text-left transition-all duration-300 hover:bg-white/40 shadow-sm"
    >
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-blue-400 to-pink-400 rounded-full p-2 mr-3 shadow-sm">
          {icon}
        </div>
        <span className="font-bold text-gray-800">{question}</span>
      </div>
      {isOpen ? (
        <ChevronUp className="text-gray-600" size={20} />
      ) : (
        <ChevronDown className="text-gray-600" size={20} />
      )}
    </button>
    {isOpen && (
      <div className="p-5 bg-white/20 backdrop-blur-sm rounded-lg mt-2">
        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap font-medium" 
          dangerouslySetInnerHTML={{
            __html: answer.replace(
              /\*\*(.*?)\*\*/g,
              '<span class="font-bold">$1</span>'
            )
          }}
          style={{ textShadow: '0 1px 2px rgba(255,255,255,0.1)' }}>
        </div>
      </div>
    )}
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Y'a un bonus si je dépose ?",
      answer: "💬 **Oui, et c'est automatique.**\nDès que tu déposes **au moins 10€**, ton dépôt est **doublé instantanément** — **pas besoin de code promo.**\n\n> 🔥 Tu déposes 20€ ➝ tu joues avec 40€\n> 💸 Tu déposes 100€ ➝ tu joues direct avec 200€\n\n✅ Le bonus **x2 est garanti** à chaque dépôt, peu importe le montant.\nEt si tu joues dans la foulée, t'as même souvent un petit bonus surprise 🎉",
      icon: <Plus size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "Est-ce qu'on peut retirer l'argent ?",
      answer: "💬 **Bien sûr !**\n\nDès que t'as gagné, tu peux retirer sur ton compte bancaire et tu recevras en **2 jours** sur ton compte bancaire comme un virement classique. 💳\n\n✨ **Simple et rapide :**\n> 🏦 Demande de retrait\n> ⏱️ Traitement sous 2h\n> 💸 Virement sur ton compte",
      icon: <Wallet size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "Où sont les jeux ?",
      answer: "🎮 Une fois inscrit et connecté, et que ton **premier dépôt** sera fait :\n\n> 🎲 Accès aux **mini-jeux exclusifs**\n> 🎯 **Interface intuitive**\n> 🌟 **Bonus spéciaux** débloqués\n\n⚡ Tout est **instantané** après ton dépôt !",
      icon: <Gamepad2 size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "C'est fiable ?",
      answer: "🔒 **Absolument sûr et certifié !**\n\n✅ Site de jeu **officiellement certifié**\n✅ Actif dans **plusieurs pays**\n✅ **Paiements sécurisés**\n\n🎯 Notre philosophie :\n> 💫 Tu déposes\n> 🎮 Tu joues\n> 💸 Tu retires\n\n**Simple. Sans prise de tête.** ✨",
      icon: <Lock size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "C'est quoi exactement le jeu ?",
      answer: "🎮 **Mini-jeu ultra rapide et simple :**\n\n> ⚡ **Quelques clics** suffisent\n> 💫 Possibilité de **doubler instantanément**\n> 🔥 Le même jeu que tu vois sur **TikTok** et **Insta** !",
      icon: <HelpCircle size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "Est-ce que ça marche sur téléphone ?",
      answer: "📱 **100% compatible mobile !**\n\n✨ Optimisé pour ton téléphone\n🚀 **Interface fluide** et intuitive\n💫 Pas besoin d'ordinateur\n\n**Tout se fait depuis ton tel** en quelques clics ! 🎯",
      icon: <Phone size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "Est-ce que je peux tester sans déposer ?",
      answer: "🔍 **Voici comment ça marche :**\n\n✅ **Explorer le site** : Gratuit\n🎮 **Accès aux jeux** : Après dépôt\n💎 **Dépôt minimum** : 20€\n\n⭐ **Notre conseil :** Commence avec le minimum pour tester !",
      icon: <CheckCircle2 size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "C'est quoi le minimum pour jouer ?",
      answer: "💫 **Commence avec seulement 20€ !**\n\n> 🎯 **Parfait pour tester**\n> 🎁 Bonus **doublé automatiquement**\n> ⭐ Accès à **tous les jeux**\n\n✨ Pas besoin de mettre plus pour ta première fois !",
      icon: <CreditCard size={20} className="text-white drop-shadow-sm" />
    },
    {
      question: "Je trouve pas le bouton pour jouer, il est où ?",
      answer: "🎮 **Super simple à trouver :**\n\n> 📱 Fais défiler jusqu'en **bas de page**\n> 🎯 Clique sur le bouton **\"Commencer à jouer\"**\n> ⚡ Le mini-jeu se lance **instantanément**\n\n✨ Et c'est parti pour jouer ! 🎲",
      icon: <Clock size={20} className="text-white drop-shadow-sm" />
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Questions Fréquentes ❓</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          icon={faq.icon}
        />
      ))}
      <a
        href="https://track.ftdgallery.com/visit/?bta=35528&nci=5390&afp10=Tiktok&subid=jeudesmaison&utm_campaign=jeudesmaison"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold py-4 px-6 rounded-xl
          text-center text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
          flex items-center justify-center mt-8"
      >
        COMMENCER A JOUER 🎮
      </a>
    </div>
  );
};

export default FAQ;