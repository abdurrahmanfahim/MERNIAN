import React, { useRef, useState } from "react";
import VideoPlayIcon from "../../../icons/VideoPlayIcon";
import DropdownThreeDot from "../DropdownThreeDot";
import VideoModal from "../VideoModal";
import ToggleOpen from "../../ToggleOpen";
import PhotoModal from "../PhotoModal";

const PhotoVideoBox = ({ verson = "photos", photos, count, videos }) => {
  const safePhotos = Array.isArray(photos) ? photos : [];
  const photoLength = safePhotos.length - 5;
  const newPhotos = safePhotos.slice(0, 6);

  const safeVideos = Array.isArray(videos) ? videos : [];
  const newVideos = safeVideos.slice(0, 3);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const videoModalRef = useRef(null);
  const photoModalRef = useRef(null);

  return (
    <div className="py-5 px-7 bg-white rounded-2xl  ">
      <div className="flex justify-between  ">
        <h5 className="font-poppins text-xs text-black font-bold capitalize ">
          {verson === "videos" ? "Videos " : "Photos "}
          <span className="text-secondary">{count}</span>
        </h5>

        <div className="relative">
          <p
            className="text-[30px] relative leading-0 -top-1 "
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

      {verson === "videos" ? (
        <div className="mt-[18px] flex flex-col gap-4 ">
          {newVideos.map((item) => (
            <div
              key={Math.random() * 2}
              className={`w-full h-[100px] bg-primary rounded-2xl overflow-hidden relative `}
              onClick={() => {
                setSelectedVideo(item);
                setVideoModalOpen(true);
              }}
            >
              <div className=" absolute size-full flex justify-center items-center  ">
                <VideoPlayIcon />
              </div>
              {videoModalOpen && (
                <>
                  <div ref={videoModalRef}>
                    <VideoModal video={selectedVideo} />
                  </div>
                  <ToggleOpen
                    setStateFunc={setVideoModalOpen}
                    itemRef={videoModalRef}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[18px] flex flex-wrap justify-between gap-4 ">
          {newPhotos.map((item, index) => (
            <div
              key={Math.random() * 200}
              className={`w-[105px] h-[100px] rounded-2xl overflow-hidden relative `}
              onClick={() => {
                setSelectedPhoto(item);
                setPhotoModalOpen(true);
              }}
            >
              {photoModalOpen && (
                <>
                  <div ref={photoModalRef}>
                    <PhotoModal photo={selectedPhoto} />
                  </div>
                  <ToggleOpen
                    setStateFunc={setPhotoModalOpen}
                    itemRef={photoModalRef}
                  />
                </>
              )}
              {index === 5 && (
                <div className=" absolute size-full top-1/2 left-1/2 -translate-1/2 flex items-center justify-center  ">
                  <p className="font-poppins text-xs font-bold text-white z-30  ">
                    {photoLength}+
                  </p>
                  <div className="size-full bg-dark opacity-10 z-20 absolute"></div>
                </div>
              )}
              <img src={item.path} alt={item.id + "'s photo"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoVideoBox;
