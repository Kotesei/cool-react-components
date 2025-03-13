import Coolponents from "./index.js";
import { useState } from "react";
import * as args from "./assets/sampleArgs.js";

function App() {
  const [showGeneration, setShowGeneration] = useState(false);

  function handleGenerateCode() {
    setShowGeneration(true);
  }
  // Sidebar goal: ul elements trigger dropdown menu
  // Test with buttons and anchor elements
  return (
    <div className="flex flex-col items-center gap-2">
      <Coolponents.SideBar />

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
