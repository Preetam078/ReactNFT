import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import PunkList from "./components/PunkList/PunkList";
import Main from "./components/Main/Main";

function App() {
  //pulling up the data
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xF2e8c0250Aa4224Cee5379D5220e129B04726b03&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };

    getMyNfts();
  }, []);

  console.log(selectedPunk);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
