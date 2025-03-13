import { useState } from "react";
import GenerateQRCode from "qrcode";
import "./QRCode.css";

export default function QRCode({ input, size = "w-5 h-5", generate }) {
  const [qrCode, setQRCode] = useState();
  const generateQR = async () => {
    try {
      setQRCode(await GenerateQRCode.toDataURL(input));
    } catch (err) {
      console.error(err);
    }
  };

  if (generate) generateQR();

  return (
    <div className={`${size} overflow-hidden rounded-[1rem]`}>
      {qrCode && <img className={size} src={qrCode} alt="Generated QR Code" />}
    </div>
  );
}
