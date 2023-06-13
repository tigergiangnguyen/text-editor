import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Export function to put to the database
export const putDb = async (content) => {
  console.log('Put to the database');

  // Create the connection to the database
  const db = await openDB('jate', 1);

  // Create a transaction and add data privileges
  const tx = db.transaction('jate', 'readwrite');

  // Open desired object
  const store = tx.objectStore('jate');

  // Pass in the content
  const req = store.put({ id: 1, value: content });

  // Get request
  const res = await req;
  console.log('🚀 Successfully saved data', res);
};

export const getDb = async () => {
  console.log('Get from the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const req = store.getAll();
  const res = await req;
  console.log('res.value', res);
  return res?.value;
};

initdb();
