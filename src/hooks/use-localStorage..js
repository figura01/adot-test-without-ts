import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  console.log('defaultValue: ', defaultValue)
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue};
};


// import { useState, useEffect } from "react";

// const useLocalStorage = (key, initialData) => {
//   const [data, setData] = useState(null)
//   const [isPending, setIsPending] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch(error) {

//     }
//   })
// }