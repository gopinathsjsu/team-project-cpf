import { HStack, Heading, Stack, Button, Image, Box } from "@chakra-ui/react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const images = {
  "San Jose": "/gym8.jpg",
  "San Dieago": "/gym9.jpg",
  "San Fransisco": "/gym10.jpg",
  "Las Vegas": "/gym11.jpg",
};
function Location() {
  let token = localStorage.getItem("token");
  token = token
    ? JSON.parse(localStorage.getItem("token")).data.isEmployee
    : null;
  const [classes, setClasses] = useState([]);

  const getClass = async () => {
    const url = "http://localhost:8080/api/location";
    const { data } = await axios.get(url);
    console.log(data);
    const expandClass = data.map((el, i) => ({
      id: el._id,
      name: el.location,
      description: el.address,
      image: images[el.location],
    }));
    console.log(expandClass);
    // setData(members);
    // console.log(data);
    setClasses(expandClass);
  };

  useEffect(() => {
    getClass();
  }, []);
  return (
    <Stack spacing={0}>
      <Stack
        // padding={100}
        bgImage="url(gym2.jpg)"
        height={"35rem"}
        bgSize={"cover"}
        justify="center"
        align="center"
        backgroundPosition="center"
      >
        <Heading size="3xl" color="white">
          Available Locations
        </Heading>
      </Stack>
      {classes.map((variant, i) => (
        <Stack
          padding={100}
          maxWidth="full"
          bgColor={variant.color}
          borderWidth={1}
          boxShadow="dark-lg"
          border="2px"
          borderColor="white"
        >
          <Stack spacing={10}>
            <HStack
              width="full"
              flexDirection={i % 2 == 0 ? "row" : "row-reverse"}
            >
              <Box>
                <Heading color={"orange"}>{variant.name}</Heading>
                <p>{variant.description}</p>
              </Box>
              <Image
                src={variant.image}
                width="30rem"
                paddingLeft={i % 2 == 0 ? "5rem" : "0rem"}
                paddingRight={i % 2 == 0 ? "0rem" : "5rem"}
              ></Image>
            </HStack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default Location;
