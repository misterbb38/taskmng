function Usb() {
    return (
      <div className="bg-dark-blue text-white p-8"> {/* Remplacez bg-dark-blue par votre classe de couleur de fond */}
        {/* Zone de recherche */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <label htmlFor="search" className="block text-sm font-medium">Поиск устройств:</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                Поиск
              </button>
              <input
                type="text"
                name="search"
                id="search"
                className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder="Type here..."
              />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Обновить
          </button>
        </div>
  
        {/* Titre pour les appareils connectés */}
        <h2 className="text-xl font-bold mb-4">Подключенные датчики</h2>
        <div className="border-t border-gray-200 py-6">
          {/* Contenu pour les appareils connectés */}
          {/* Ici, vous pouvez ajouter une grille ou une liste de vos appareils */}
        </div>
  
        {/* Pied de page ou action supplémentaire */}
        <div className="flex justify-end mt-8">
          <button className="bg-transparent text-blue-100 font-semibold py-2 px-4 border border-blue-500 rounded">
            ПУСК
          </button>
        </div>
      </div>
    );
  }
  
  export default Usb;
  