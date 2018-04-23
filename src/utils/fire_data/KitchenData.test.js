// @flow
import { fireStuff } from './KitchenData';

describe('object fireStuff', () => {
    it('should have a firestore method that initializes a firestore db', () => {
        const db = fireStuff.fstore;
        expect(db).toBeDefined();
    });
    it('should have a getKitchens method that returns an array of kitchen objects', async () => {
        let kitchens: Array<{id: string, name: string}>;
        await fireStuff.getKitchens().then(a => {kitchens = a});
        expect(kitchens).toBeDefined();
        expect(kitchens).toHaveLength(10);
    });
})
