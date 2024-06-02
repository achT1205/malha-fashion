export class OccasionService {
    getOccasions() {
        return fetch('/mock/occasions.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
