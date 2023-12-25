// // import  { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import logo from '../assets/logo.png';
// // import Acceuil from './index';
// // import Usb from './microControllers/Usb';
// // import Bleuthoot from './microControllers/bluetooth';
// // import ClassLearn from './learn.jsx/classe';
// // import IndexLearn from './learn.jsx/index';
// // import Profil from './profil/user';

// // const menuItems = [
// //   { id: 1, label: 'Accueil', component: Acceuil, section: 'Главное' },
// //   { id: 2, label: 'USB', component: Usb, section: 'Датчик' },
// //   { id: 3, label: 'Bluetooth', component: Bleuthoot, section: 'Датчик' },
// //   { id: 4, label: 'Класс', component: ClassLearn, section: 'Учеба' },
// //   { id: 5, label: 'предметы', component: IndexLearn, section: 'Учеба' },
// //   { id: 6, label: 'Настройки', component: Profil, section: 'Настройки' },
// // ];

// // function Sidebar({ onMenuItemClick }) {
// //   const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id);

// //   const handleMenuItemClick = (menuItem) => {
// //     setSelectedMenuItem(menuItem);
// //     if (onMenuItemClick) {
// //       onMenuItemClick(menuItem.component); // Passer uniquement le composant
// //     }
// //   };

// //   const selectedItemsBySection = menuItems.reduce((acc, menuItem) => {
// //     const section = acc[menuItem.section] || [];
// //     section.push(menuItem);
// //     acc[menuItem.section] = section;
// //     return acc;
// //   }, {});

// //   return (
// //     <div className="w-64 bg-blue-500 text-white flex flex-col">
// //       <div className="flex items-center justify-center p-4">
// //         <img src={logo} alt="Logo" className="h-20 w-20" />
// //       </div>
// //       {Object.entries(selectedItemsBySection).map(([section, items], index) => (
// //         <div key={index} className={`${index > 0 ? 'mt-4 border-t border-white' : ''} p-4`}>
// //           <p className="font-bold">{section}</p>
// //           <ul>
// //             {items.map((menuItem) => (
// //               <li key={menuItem.id} className={`p-2 cursor-pointer ${selectedMenuItem === menuItem.id ? 'bg-blue-700' : ''}`}>
// //                 <button onClick={() => handleMenuItemClick(menuItem)} className="focus:outline-none w-full text-left">
// //                   {menuItem.label}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // Sidebar.propTypes = {
// //   onMenuItemClick: PropTypes.func.isRequired,
// // };

// // export default Sidebar;


// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import logo from '../assets/logo.png';
// import Acceuil from './index';
// import Usb from './microControllers/Usb';
// import Bleuthoot from './microControllers/bluetooth';
// import ClassLearn from './learn.jsx/classe';
// import IndexLearn from './learn.jsx/index';
// import Profil from './profil/user';




// const menuItems = [
//   { id: 1, label: 'Accueil', component: Acceuil, section: 'Главное' },
//   { id: 2, label: 'USB', component: Usb, section: 'Датчик' },
//   { id: 3, label: 'Bluetooth', component: Bleuthoot, section: 'Датчик' },
//   { id: 4, label: 'Класс', component: ClassLearn, section: 'Учеба' },
//   { id: 5, label: 'предметы', component: IndexLearn, section: 'Учеба' },
//   { id: 6, label: 'Настройки', component: Profil, section: 'Настройки' },
// ];

// function Sidebar({ onMenuItemClick }) {
    
//   const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id);

//   const handleMenuItemClick = (menuItem) => {
//     setSelectedMenuItem(menuItem.id);
//     if (onMenuItemClick) {
//       onMenuItemClick(menuItem.component);
//     }
//   };

//   const selectedItemsBySection = menuItems.reduce((acc, menuItem) => {
//     const section = acc[menuItem.section] || [];
//     section.push(menuItem);
//     acc[menuItem.section] = section;
//     return acc;
//   }, {});

//   return (
//     <div className="w-64 bg-blue-500 text-white flex flex-col">
//       <div className="flex items-center justify-center p-4">
//         <img src={logo} alt="Logo" className="h-20 w-20" />
//       </div>
//       {Object.entries(selectedItemsBySection).map(([section, items], index) => (
//         <div key={index} className={`${index > 0 ? 'mt-4 border-t border-white' : ''} p-4`}>
//           <p className="font-bold">{section}</p>
//           <ul>
//             {items.map((menuItem) => (
//               <li key={menuItem.id} className={`p-2 cursor-pointer ${selectedMenuItem === menuItem.id ? 'bg-blue-700' : ''}`}>
//                 <button onClick={() => handleMenuItemClick(menuItem)} className="focus:outline-none w-full text-left">
//                   {menuItem.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// Sidebar.propTypes = {
//   onMenuItemClick: PropTypes.func.isRequired,
// };

// export default Sidebar;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHome, faSchool, faBook, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import iconeBleutooth from '../assets/icone/bluetooth-b.svg';
import iconeUsb from '../assets/icone/usb.svg';

import Acceuil from './Acceuil';
import Usb from './microControllers/Usb';
import Bleuthoot from './microControllers/bluetooth';
import ClassLearn from './learn.jsx/classe';
import IndexLearn from './learn.jsx/index';
import Profil from './profil/user';

const menuItems = [
  { id: 1, label: 'Accueil', component: Acceuil, icon: faHome, section: 'Principal' },
  { id: 2, label: 'Ajouter', component: Usb, icon: iconeUsb, section: 'Tache' },
  { id: 3, label: 'Afficher', component: Bleuthoot, icon: iconeBleutooth, section: 'Tache' },
  { id: 4, label: 'Класс', component: ClassLearn, icon: faSchool, section: 'Util' },
  { id: 5, label: 'предметы', component: IndexLearn, icon: faBook, section: 'Util' },
  { id: 6, label: 'Настройки', component: Profil, icon: faCog, section: 'Parametre' },
];

function Sidebar({ onMenuItemClick }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id);
  const [openSections, setOpenSections] = useState({});

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem.id);
    if (onMenuItemClick) {
      onMenuItemClick(menuItem.component);
    }
  };

  const toggleSection = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const selectedItemsBySection = menuItems.reduce((acc, menuItem) => {
    const section = acc[menuItem.section] || [];
    section.push(menuItem);
    acc[menuItem.section] = section;
    return acc;
  }, {});

  return (
    <div className="w-64 bg-blue-500 text-white flex flex-col">
      <div className="flex items-center justify-center p-4">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      {Object.entries(selectedItemsBySection).map(([section, items], index) => (
        <div key={section}>
          <div className={`p-4 ${index > 0 ? 'border-t border-white' : ''}`} onClick={() => toggleSection(section)}>
            <p className="font-bold flex justify-between items-center">
              {section}
              <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${openSections[section] ? 'rotate-180' : ''}`} />
            </p>
          </div>
          {openSections[section] && (
            <ul>
              {items.map((menuItem) => (
                <li key={menuItem.id} className={`p-2 cursor-pointer ${selectedMenuItem === menuItem.id ? 'bg-blue-700' : ''}`}>
                  <button onClick={() => handleMenuItemClick(menuItem)} className="focus:outline-none w-full text-left flex items-center">
                    {typeof menuItem.icon === 'string' ? 
                      <img src={menuItem.icon} alt={menuItem.label} className="mr-2" /> :
                      <FontAwesomeIcon icon={menuItem.icon} className="mr-2" />
                    }
                    {menuItem.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

Sidebar.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default Sidebar;


