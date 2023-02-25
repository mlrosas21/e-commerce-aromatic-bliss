import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

// With JSON mock
// const getAll = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(perfumes);
//       }, [1500]);
//     });
//   };

// FIREBASE
const getAll = async () => {
  const db = getFirestore();
  const itemsCollection = collection(db, "perfumes")
  const snapshot = await getDocs(itemsCollection)

  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
};

// With JSON mock
// const get = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(perfumes.find((e) => e.id.toString() === id));
//     }, [1500]);
//   });
// };

// FIREBASE
const get = async (id) => {
  const db = getFirestore();
  const itemsDoc = doc(db, "perfumes", id);
  const snapshot = await getDoc(itemsDoc);

  return {id: snapshot.id, ...snapshot.data()}
};

// FIREBASE
const getCategory = async (id) => {
  const db = getFirestore();
  const itemsCollection = collection(db, "perfumes")
  const q = query(itemsCollection, where("categoryId", "==", id))
  const snapshot = await getDocs(q)
  if(snapshot.size === 0){
    console.log("No results");
  }

  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  
};

export const perfumeService = { getAll, get, getCategory };
