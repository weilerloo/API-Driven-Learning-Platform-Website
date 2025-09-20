import { apiConnector } from "../apiConnector";
import { walletEndpoints } from "../apis";

const { TOPUP_WALLET_API, GET_WALLET_BALANCE_API } = walletEndpoints;

// Top up wallet
export async function topUpWallet(token, amount) {
  try {
    const response = await apiConnector(
      "POST",
      TOPUP_WALLET_API,
      { amount: parseFloat(amount) },
      { Authorization: `Bearer ${token}` }   // ✅ same as course APIs
    );

    console.log("TOPUP_WALLET_API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Top Up Wallet");
    }
    return response?.data;
  } catch (error) {
    console.error("TOPUP_WALLET_API ERROR............", error);
    throw error;
  }
}

// Get wallet balance
export async function getWalletBalance(token) {
  try {
    const response = await apiConnector(
      "POST", // ✅ must be POST
      GET_WALLET_BALANCE_API,
      { token } // ✅ backend expects token in body
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching wallet balance:", error.response?.data || error.message);
    throw error;
  }
}

