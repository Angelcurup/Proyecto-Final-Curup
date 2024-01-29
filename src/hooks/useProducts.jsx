import { useState, useEffect } from "react";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

/**
 * @description Custon hook for get products
 * @returns {Array}
 */

export const useGetProducts = (collectionName = "products") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollections = collection(db, collectionName);

    getDocs(productsCollections).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { productsData };
};

export const useGetProductById = (collectionName = "products", id) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, collectionName, id);

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return { productData };
};

export const useGetProductByCategory = (category) => {
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "products"),
      where("category", "==", `${category}`)
    );

    getDocs(q).then((snapshot) => {
      setProductsByCategory(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, [category]);

  return { productsByCategory };
};

export const useGetCategories = (collectionName = "categories") => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categories[0].categories);
    });
  }, []);
  return { categories };
};
