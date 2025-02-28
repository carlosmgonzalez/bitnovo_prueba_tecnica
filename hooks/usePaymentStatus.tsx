import { useEffect, useState } from "react";
import { useStoreApp } from "./useStoreApp";

export const usePaymentStatus = (identifier: string) => {
  const setPaymentstatus = useStoreApp((state) => state.setPaymentStatus);

  useEffect(() => {
    if (!identifier) return;

    const socket = new WebSocket(
      `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`
    );

    socket.onopen = () => {
      console.log("WebSocket conectado");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Mensaje recibido:", data);
      // "CO" significa completada
      // "CA" significa cancelada
      // En este caso colocare cancelada
      if (data.status == "CA") {
        setPaymentstatus("completed");
      }
    };

    socket.onerror = (error) => {
      console.error("Error en Websocket:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket cerrado");
    };

    return () => {
      socket.close();
    };
  }, [identifier]);
};
