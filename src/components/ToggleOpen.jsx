import { useEffect } from 'react'

const ToggleOpen = ({ setStateFunc, itemRef }) => {
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

  return null;
}

export default ToggleOpen