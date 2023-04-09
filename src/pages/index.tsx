import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const url = "ws://192.168.100.233:8002/ws/dispatch";

const JSONViewr = dynamic(() => import("react-json-view-ts"), { ssr: false });

const HomePage: NextPage = () => {
  const [state, setState] = useState<any>("{}");

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "init",
          data: "2023-04-09"
        })
      );
    };

    socket.addEventListener("message", (event) => {
      setState(event.data);
      console.log(event.data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Center pos="fixed" inset={0}>
      <JSONViewr src={JSON.parse(state)} theme="google" />
    </Center>
  );
};

export default HomePage;
