import React, { useRef, useState } from 'react'
import DropdownThreeDot from '../DropdownThreeDot';
import ToggleOpen from '../../ToggleOpen';

const AboutCard = ({ para, date, city, age }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);


  
  return (
    <div className={`p-7 rounded-2xl bg-white `}>
      <div className="font-poppins text-xs text-black  ">
              <div className="flex justify-between  ">
        <h5 className="font-poppins text-xs font-bold capitalize ">
          About Me
        </h5>

        <div className="relative">
          <p
            className="text-[30px] relative leading-0 -top-1  "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ...
          </p>
          {menuOpen && (
            <>
            <div
              className="absolute right-full z-50 top-full translate-x-5  "
              ref={menuRef}
              onClick={() => setMenuOpen(false)}
            >
                <DropdownThreeDot />
                <ToggleOpen
                setStateFunc={setMenuOpen}
                itemRef={menuRef}
              />
            </div>
            </>
          )}
        </div>
      </div>
              <p className=" mt-7">{para}
              </p>

              <div>
                <ul className="mt-[18px] flex flex-col gap-[18px] ">
                  <li>
                    <p className="flex gap-[26px] ">
                      <b>Joined:</b>{date}
                    </p>
                  </li>
                  <li>
                    <p className="flex gap-[26px] ">
                      <b>City:</b>{city}
                    </p>
                  </li>
                  <li>
                    <p className="flex gap-[26px] ">
                      <b>Age:</b>{age}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
    </div>
  )
}

export default AboutCard