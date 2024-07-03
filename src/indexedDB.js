// src/indexedDB.js
export function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('SmartAppDB', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('answers', { keyPath: 'id', autoIncrement: true });
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

export function saveAnswer(answer) {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('answers', 'readwrite');
            const store = transaction.objectStore('answers');
            store.add(answer);
            transaction.oncomplete = () => resolve();
            transaction.onerror = (event) => reject(event.target.error);
        });
    });
}

export function getAnswers() {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('answers', 'readonly');
            const store = transaction.objectStore('answers');
            const request = store.getAll();
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.target.error);
        });
    });
}
