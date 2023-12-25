import  { useState } from 'react';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import UserPhoto from '../assets/icone/react.svg'; // Assurez-vous que le chemin d'accès à la photo de profil est correct

function TopBar() {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      {/* Placeholder pour l'alignement */}
      <div className="w-4"></div>

      {/* Barre de recherche au centre et plus large */}
      <div className="flex flex-grow mx-4">
        <FiSearch className="text-gray-400 mr-2" size={20} />
        <input
          className="flex-grow border-2 border-gray-200 bg-gray-200 h-10 px-5 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Type to search..."
        />
      </div>

      {/* Icônes de notification et de réglages avec menu déroulant pour les réglages */}
      <div className="flex items-center">
        <div className="relative mx-4">
          <FiBell className="cursor-pointer" size={24} onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} />
          <span className="absolute right-0 top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">2</span>
          {/* Sous-menu pour les notifications */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <div className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100">Notification 1</div>
              <div className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100">Notification 2</div>
            </div>
          )}
        </div>
        
        <div className="relative mx-4">
          <FiSettings className="cursor-pointer" size={24} onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)} />
          {/* Menu déroulant pour les réglages */}
          {isSettingsMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a href="/profile" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100">Mon Profil</a>
              <a href="/settings" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100">Réglages</a>
              <a href="/logout" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-100">Déconnexion</a>
            </div>
          )}
        </div>
        
        {/* Photo de profil, nom et titre de l'utilisateur */}
        <div className="flex items-center ml-4">
          <img src={UserPhoto} alt="User" className="h-8 w-8 rounded-full" />
          <div className="ml-2">
            <div>Thomas Anree</div>
            <div className="text-xs">UX Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
