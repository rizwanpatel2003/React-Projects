/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import React from 'react';

function UseInfo(results) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${results}&client_id=HK3TSofAg5P0xp_LJNVUCJAve1PnL0itYHwEKZdw4_Y`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [results]);

  return { data, loading, error };
}

export default UseInfo;