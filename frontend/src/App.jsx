import { useState } from "react";
import "./App.css";

function App() {
  const [address, setAddress] = useState("");
  const { ethereum } = window;
  const requestAccounts = async () => {
    if (!ethereum) {
      console.error("ethereum instance is not present in the window object");
      return;
    }

    await ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });

    console.log("Accounts ======>", accounts);

    if (!accounts || accounts?.length === 0) {
      console.error("Error while fetching the accounts");
      return;
    }

    setAddress(accounts[0]);
  };

  return (
    <>
      <div
        style={{
          color: "orange",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {Boolean(address) ? (
          address
        ) : (
          <button onClick={requestAccounts}>Connect Wallet</button>
        )}
      </div>
    </>
  );
}

export default App;
