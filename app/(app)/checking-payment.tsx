import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStoreApp } from "@/hooks/useStoreApp";
import NewRequestButton from "@/components/ui/NewRequestButton";
import ClipboardQrShare from "@/components/ui/ClipboardQrShare";
import InfoTopCard from "@/components/ui/InfoTopCard";
import EmailShare from "@/components/ui/EmailShare";
import WhatsappShare from "@/components/ui/WhatsappShare";
import OtherApplicationShare from "@/components/ui/OtherApplicationShare";
import RequestSendScreen from "@/components/ui/RequestSendScreen";
import { useRouter } from "expo-router";
import { usePaymentStatus } from "@/hooks/usePaymentStatus";
import { containers } from "@/styles/containers";

export default function checking_payment() {
  const router = useRouter();

  const { state } = useStoreApp();

  const [isModalOpen, setIsModalOpen] = useState(false);

  usePaymentStatus(state.identifier);

  useEffect(() => {
    if (state.paymentStatus == "completed") {
      router.dismissTo("/payment-completed");
    }
  }, [state.paymentStatus]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={containers.page}>
        {isModalOpen && <RequestSendScreen setIsModalOpen={setIsModalOpen} />}
        <View style={{ gap: 16 }}>
          <InfoTopCard amount={state.amount} currency={state.currency} />
          <ClipboardQrShare webUrl={state.webUrl} />
          <EmailShare />
          <WhatsappShare setIsModalOpen={setIsModalOpen} />
          <OtherApplicationShare webUrl={state.webUrl} />
        </View>
        <NewRequestButton />
      </View>
    </SafeAreaView>
  );
}
