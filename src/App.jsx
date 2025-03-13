import Coolponents from "./index.js";
import { useState } from "react";
import * as args from "./assets/sampleArgs.js";

function App() {
  const [showGeneration, setShowGeneration] = useState(false);

  function handleGenerateCode() {
    setShowGeneration(true);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Coolponents.QRCode
        {...args.qrCode}
        {...(showGeneration ? { generate: true } : {})}
      />
      <button onClick={handleGenerateCode}>Generate QR Code!</button>
      <Coolponents.BlogCard {...args.blogCard}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Coolponents.BlogCard>
    </div>
  );
}

export default App;
