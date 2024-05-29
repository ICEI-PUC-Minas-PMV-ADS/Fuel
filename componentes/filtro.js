import { getDistance } from 'geolib';

const filtrosPostos = (postos, searchQuery, userLocation) => {
    return postos.filter(posto => {
        const matchesSearchQuery = searchQuery === '' || posto.endereco.toLowerCase().includes(searchQuery.toLowerCase()) ||
            posto.bandeiraPosto.toLowerCase().includes(searchQuery.toLowerCase()) ||
            [posto.tipoCombustivel_1, posto.tipoCombustivel_2, posto.tipoCombustivel_3, posto.tipoCombustivel_4, posto.tipoCombustivel_5, posto.tipoCombustivel_6]
                .some(tipo => tipo && tipo.toLowerCase().includes(searchQuery.toLowerCase()));

        let matchesDistance = true;
        if (userLocation && posto.latitude && posto.longitude) {
            const distance = getDistance(
                { latitude: userLocation.latitude, longitude: userLocation.longitude },
                { latitude: parseFloat(posto.latitude), longitude: parseFloat(posto.longitude) }
            );
            //matchesDistance = distance <= 5000; // Filtrar postos até 5km
        }

        return matchesSearchQuery && matchesDistance;
    });
};

export default filtrosPostos;
