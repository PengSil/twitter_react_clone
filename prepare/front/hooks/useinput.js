import { useState, useCallback } from "react";

export default (initalValue = null) => {
  const [value, setValue] = useState(initalValue);
  //console.log("useInput", value);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
