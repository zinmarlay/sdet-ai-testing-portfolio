interface PaymentResponse {
  status: number;
  message: string;
  transactionId: string;
}

const paymentApi = (): Promise<PaymentResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "Payment Successful",
        transactionId: "TXN001",
      });
    }, 1000);
  });
};

const runPaymentTest = async (): Promise<void> => {
  try {
    console.log("Payment Test Started");
    const response = await paymentApi();
    if (response.status === 200 && response.transactionId) {
      console.log("Test Passed");
      console.log(response.message);
    } else {
      throw new Error("Payment Failed");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Test Failed: ${error.message}`);
    }
  } finally {
    console.log("Payment Test Finished");
  }
};

runPaymentTest();
