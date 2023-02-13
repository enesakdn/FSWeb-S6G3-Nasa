import React, { useState } from "react";
import axios from "axios";

export default function Tarih(props) {
  const { onChange } = props;
  return (
    <SCInput
      type="date"
      onChange={(event) => onChange(event.target.value)}
    ></SCInput>
  );
}
