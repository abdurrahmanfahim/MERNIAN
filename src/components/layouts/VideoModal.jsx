// import React, { useState } from "react";
// import PlayIconOnModal from "../../icons/PlayIconOnModal";
// import PauseIconOnModal from "../../icons/PauseIconOnModal";
// // Use the public folder path directly in the src attribute

// const VideoModal = ({ video }) => {
//   const [playPause, setPlayPause] = useState(false);
//   return (
//     <div className="w-screen fixed bg-[#22812d] flex justify-center items-center z-50  ">
//       <div
//         className={`absolute left-1/2 -translate-1/2 top-1/2 bg-red-500 w-full z-50 `}
//         onClick={() => setPlayPause(!playPause)}
//       >
//         <img
//           src="public/images/video modal/Video player.svg"
//           alt="Video Modal Overlay"
//           className="w-full h-full object-cover"
//         />

//         {playPause ? (
//           <div className=" absolute w-full flex items-center justify-between bg-primary ">
//             <PauseIconOnModal />
//           </div>
//         ) : (
//           <div className=" absolute w-full flex items-center justify-between bg-primary ">
//             <PlayIconOnModal />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoModal;


import React, { useState } from "react";
import PlayIconOnModal from "../../icons/PlayIconOnModal";
import PauseIconOnModal from "../../icons/PauseIconOnModal";
import PlayIconSm from "../../icons/PlayIconSm";
import PauseIconSm from "../../icons/PauseIconSm";

const VideoModal = ({ video }) => {
  const [playPause, setPlayPause] = useState(true);
  return (
    <div className="fixed inset-70 bg-opacity-60  flex justify-center items-center z-50" onClick={e => {
          e.stopPropagation(); 
          setPlayPause(prev => !prev);
        }}>
      <div
        className="relative bg-white shadow-xl rounded-xl w-full aspect-video flex items-center justify-center"
      >
        <img
          src="/images/video modal/Video player.svg"
          alt="Video Modal Overlay"
          className="w-full h-full object-cover rounded-xl absolute"
        />

        <video src={video ? video : ''}
          className="w-full h-full object-cover rounded-xl"></video>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none  ">
          {!playPause ? (
            <div className="flex items-center justify-center bg-opacity-70 rounded-full p-4">
              <PauseIconOnModal />
            </div>
          ) : (
            <div className=" ml-2 flex items-center justify-center bg-opacity-70 rounded-full p-4">
              <PlayIconOnModal />
            </div>
          )}
        </div>

        <div className="absolute size-full -top-4.5 left-0.5 inset-0 flex items-end justify-start pointer-events-none ">
          {!playPause ? (
            <div className="flex items-center justify-center bg-opacity-70 rounded-full p-4">
              <PauseIconSm />
            </div>
          ) : (
            <div className=" ml-2 flex items-center justify-center bg-opacity-70 rounded-full p-4">
              <PlayIconSm width={24} height={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
