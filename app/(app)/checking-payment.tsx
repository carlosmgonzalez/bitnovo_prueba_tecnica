import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStoreApp } from "@/hooks/useStoreApp";
import NewRequestButton from "@/components/ui/NewRequestButton";
import ClipboardQrShare from "@/components/ui/ClipboardQrShare";
import InfoTopCard from "@/components/ui/InfoTopCard";
import EmailShare from "@/components/ui/EmailShare";
import WhatsappShare from "@/components/ui/WhatsappShare";
import OtherApplicationShare from "@/components/ui/OtherApplicationShare";
import RequestSentScreen from "@/components/ui/RequestSentScreen";
import { useRouter } from "expo-router";
import { usePaymentStatus } from "@/hooks/usePaymentStatus";

export default function checking_payment() {
  const router = useRouter();

  const amount = useStoreApp((state) => state.amount);
  const currency = useStoreApp((state) => state.currency);
  const webUrl = useStoreApp((state) => state.webUrl);
  const identifier = useStoreApp((state) => state.identifier);
  const setPaymentStatus = useStoreApp((state) => state.setPaymentStatus);
  const paymentStatus = useStoreApp((state) => state.paymentStatus);

  const [isModalOpen, setIsModalOpen] = useState(false);

  usePaymentStatus(identifier);

  useEffect(() => {
    if (paymentStatus === "completed") {
      router.dismissTo("/payment-completed");
      setPaymentStatus("completed");
    }
  }, [paymentStatus]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {isModalOpen && <RequestSentScreen setIsModalOpen={setIsModalOpen} />}
        <View style={{ gap: 16 }}>
          <InfoTopCard amount={amount} currency={currency} />
          <ClipboardQrShare webUrl={webUrl} />
          <EmailShare />
          <WhatsappShare setIsModalOpen={setIsModalOpen} />
          <OtherApplicationShare webUrl={webUrl} />
        </View>
        <NewRequestButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(200,200,200,0.3)",
    justifyContent: "space-between",
  },
});
