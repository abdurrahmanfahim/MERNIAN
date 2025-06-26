import React from "react";
import Container from "../components/layouts/containers/Container";
import LeftContainer from "../components/layouts/containers/LeftContainer";
import RightContainer from "../components/layouts/containers/RightContainer";
import MiddleContainer from "../components/layouts/containers/MiddleContainer";
import AboutCard from "../components/layouts/cards/AboutCard";
import PhotoVideoBox from "../components/layouts/cards/PhotoVideoBox";

const NewsFeed = () => {
  const photos = [
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/morePic.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picTwo.jpg",
    },
    {
      id: Math.floor(Math.random() * 100),
      path: "./images/photos/picOne.jpg",
    },
  ];

  return (
    <Container>
      <div className="flex gap-4 mt-8 ">
        <LeftContainer>
          <div className="flex flex-col gap-4 ">
            <AboutCard
              para={`
                Hi! My name is A B M Shawon Islam but some people may know me as
                GameHuntress! I have a Twitch channel where I stream, play and
                review all the newest games.`}
              date={"22 November 2008"}
              city={"Dhaka"}
              age={"18 years"}
            />

            <PhotoVideoBox photos={photos} count={photos.length} />
          </div>
        </LeftContainer>
        <MiddleContainer>2</MiddleContainer>
        {/* <RightContainer>
          3
        </RightContainer> */}
      </div>
    </Container>
  );
};

export default NewsFeed;
