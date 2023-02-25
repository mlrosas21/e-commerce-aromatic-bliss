import { perfumes } from "../data/data";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

// With JSON mock
// const getAll = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(perfumes);
//       }, [1500]);
//     });
//   };

const getAll = async () => {
  const db = getFirestore();
  const itemsCollection = collection(db, "perfumes")
  const snapshot = await getDocs(itemsCollection)

  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
};

const get = async (id) => {
  const db = getFirestore();
  const itemsDoc = doc(db, "perfumes", id);
  const snapshot = await getDoc(itemsDoc);

  return {id: snapshot.id, ...snapshot.data()}
};

// const get = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(perfumes.find((e) => e.id.toString() === id));
//     }, [1500]);
//   });
// };

const getCategory = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(perfumes.filter((e) => e.category.toString() === id));
    }, [1500]);
  });
};

export const perfumeService = { getAll, get, getCategory };
