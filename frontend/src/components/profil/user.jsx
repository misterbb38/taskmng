import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        // Ajoutez d'autres champs si nécessaire
    });

    // Chargez les données initiales de l'utilisateur
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Remplacez par l'URL appropriée et la logique de récupération des données
                const res = await axios.get('http://localhost:8000/users/profile'); // Mettez votre URL ici
                setUserData(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUserData();
    }, []);

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // Remplacez par l'URL appropriée et la logique de mise à jour
            const res = await axios.put('http://localhost:8000/users/profile', userData); // Mettez votre URL ici
            console.log('Données mises à jour :', res.data);
            // Gérez la réponse, comme afficher un message de succès
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Votre Profil</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={userData.name}
                        onChange={onChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={onChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                {/* Ajoutez d'autres champs de formulaire si nécessaire */}
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Mettre à jour
                </button>
            </form>
        </div>
    );
};

export default Profile;
