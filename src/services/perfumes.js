import { perfumes } from "../data/data";

const getAll = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(perfumes);
      }, [1500]);
    });
  };
  
  const get = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(perfumes.find((e) => e.id.toString() === id));
      }, [1500]);
    });
  };

  const getCategory = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(perfumes.filter((e) => e.category.toString() === id));
      }, [1500]);
    });
  };

  export const perfumeService = { getAll, get, getCategory };