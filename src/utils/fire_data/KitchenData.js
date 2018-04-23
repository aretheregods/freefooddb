// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';
import result from '../../firebase-config-dev.json';

const fireApp = firebase.initializeApp(result.result);

export const fireStuff = {
    fstore: fireApp.firestore(),
    async getKitchens() {
        const result = [];
        const ref = this.fstore.collection('kitchens')
        await ref.get().then(snap => {
            snap.forEach(doc => {
                const id = doc.id;
                const data = doc.data();
                const toPush = {id, ...data};
                result.push(toPush);
            });
        })
        .catch(err => "Data Doesn't Exist");
        return result;
    },
    async getKitchen(kitchenID) {
        // get a particular kitchen
    }
};
