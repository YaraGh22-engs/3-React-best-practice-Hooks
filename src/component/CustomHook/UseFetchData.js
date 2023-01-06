import { useEffect, useState } from "react";

 

const UseFetchData = (url) => {
    // be attention to [] in {useState} it is to save data as an array to can map it
    const [state, setstate] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(data => setstate(data));
    }, );
    return [state]
}

export default UseFetchData