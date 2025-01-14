
import { useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to handle flip state.
 */
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(flip => !flip);
  };

  return [isFlipped, toggleFlip];
}

/**
 * Custom hook to handle axios requests.
 * @param {string} baseURL - The base URL for the axios request.
 */
function useAxios(baseURL) {
  const [data, setData] = useState([]);

  const addData = async (urlSuffix = '') => {
    try {
      const response = await axios.get(`${baseURL}${urlSuffix}`);
      setData(data => [...data, { ...response.data }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return [data, addData];
}

export { useFlip, useAxios };
