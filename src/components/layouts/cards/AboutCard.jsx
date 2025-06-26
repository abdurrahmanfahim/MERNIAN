import React from 'react'

const AboutCard = ({para, date, city, age}) => {
  return (
    <div className={`p-7 rounded-2xl bg-white `}>
      <div className="font-poppins text-xs text-gray  ">
              <h4 className="font-poppins font-bold text-sm text-extraDark capitalize ">
                About Me
              </h4>
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