import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import Button from "@mui/material/Button";
import "../styles.css";

const Input = () => {
  const [src, setSrc] = useState("Welcome");
  const ref = useRef();

  useEffect(() => {
    QRCode.toDataURL(src).then((data) => {
      setSrc(data);
    });
  }, []);

  const addHandler = () => {
    const current = ref.current.value;
    QRCode.toDataURL(current).then((data) => {
      setSrc(data);
    });
    ref.current.value = "";
  };

  return (
    <div>
      <h4>QRCode Generator</h4>
      <div className="inputContainer">
        <input type="text" placeholder="Please enter any text" ref={ref} />
        <Button variant="outlined" onClick={addHandler}>
          Add
        </Button>
      </div>
      <div className="qrContainer">
        <img src={src} alt="qrcode" />
      </div>
    </div>
  );
};

export default Input;
