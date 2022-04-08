import React, { useEffect, useState } from "react";
import api from "../api/api";
import Loader from "../components/Loader/Loader";
import StoryCard from "../components/StoryCard/StoryCard";
import { useInView } from "react-intersection-observer";

import { RiEditCircleLine } from "react-icons/ri";

import "./screens.css";
function HomeScreen(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [StoriesCount, setStoriesCount] = useState(10);
  const [content, setcontent] = useState("");
  const [stories, setstories] = useState([
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",
      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/search",
    },
    {
      catagory: "health",
      image: "https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",

      title: "Dummy Text for demo",
      description:
        "Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",
      link: "/",
    },
  ]);
  useEffect(() => {
    api
      .get("")
      .then((response) => response.data)
      .then(setcontent);
    return () => {};
  }, []);

  useEffect(() => {
    if (inView === true) {
      api
        .get("")
        .then((response) => response.data)
        .then(setStoriesCount(StoriesCount + 1))
        .then(console.log(StoriesCount));
    }
    return () => {};
  }, [inView]);

  return (
    <div className="screen-container">
      {content === "" && <Loader />}
      {content !== "" && (
        <div className="home-content">
          {stories.map((story) => {
            return (
              <StoryCard
                title={story.title}
                description={story.description}
                category={story.catagory}
                link={story.link}
              />
            );
          })}
          <div className="screen-loading" ref={ref}>
            <RiEditCircleLine className="rotate" size="20px" />
            Please wait, loading content
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
