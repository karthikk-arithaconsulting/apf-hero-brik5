import { ThemeContextProvider } from "@apf/core";
import { AppWrapper } from "@apf/app-wrapper2";
import "@apf/core/dist/style.css";
import "./App.css";
import { useState } from "react";
// import InputData from "./data/schema.json";
import InputData from "./data/schema.json";
import React from "react";
import HeroBrikFive from "./components/HeroBrikFive";
import { BrikWrapper } from "@apf/brik-wrapper";

function App() {
  const [data, setData] = useState(JSON.parse(JSON.stringify(InputData)));
  const [brikId, setBrikId] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const handleBrikSelect = (id) => {
    setBrikId(id);
    setShowEditor(true);
  };

  return (
    <ThemeContextProvider>
      <AppWrapper
        data={data}
        setData={setData}
        defaultData={InputData}
        showEditor={showEditor}
        handleClose={() => setShowEditor(false)}
        isBrik={true}
        brikId={brikId}
      >
        <div className="App">
          <BrikWrapper
            handleClick={handleBrikSelect}
            data={data?.pages[0]?.pageData[0]?.cols[0]?.colData[0]}
          >
            <HeroBrikFive
              data={data?.pages[0]?.pageData[0]?.cols[0]?.colData[0]}
            />
          </BrikWrapper>
        </div>
      </AppWrapper>
    </ThemeContextProvider>
  );
}

export default App;
