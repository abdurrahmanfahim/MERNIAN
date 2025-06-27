import React, { useEffect } from 'react'

const ToggleOpen = ({stateFunc, setStateFunc, itemRef}) => {
  useEffect(() => {
      const handleClickOutSide = (event) => {
        if (itemRef.current && !itemRef.current.contains(event.target)) {
          setStateFunc(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutSide);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
  }, [itemRef, setStateFunc]);
  
  return (
    <div>
      
    </div>
  )
}

export default ToggleOpen