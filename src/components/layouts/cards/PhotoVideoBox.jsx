import React from "react";

const PhotoVideoBox = ({
  heading,
  verson = "photos",
  photos,
  count,
  videos,
}) => {
  const photoLength = photos.length - 5;
  const newPhotos = photos.splice(0, 6);

  console.log(photos);
  return (
    <div className="py-5 px-7 bg-white rounded-2xl  ">
      <h5 className="font-poppins text-xs text-black font-bold capitalize ">
        {verson === "videos" ? "videos " : "Photos "}
        <span className="text-secondary">{count}</span>
      </h5>

      <div className="mt-[18px] flex justify-between flex-wrap gap-4 ">
        {verson === "videos"
          ? videos.map((item) => (
              <div
                key={item.id}
                className="w-[105px] h-[100px] bg-primary rounded-2xl "
              >
                <img src="" alt="" />
              </div>
            ))
          : newPhotos.map((item, index) => (
              <div
                key={item.id}
                className={`w-[105px] h-[100px] rounded-2xl overflow-hidden relative `}
              >
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
    </div>
  );
};

export default PhotoVideoBox;
