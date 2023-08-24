import React from "react";
import "./style.css";

export default function App() {
  const downloadTxtFile = vcfText => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.vcf";
    document.body.appendChild(element);
    element.click();
  };

  const CreateVCard = () => {
    var vCardsJS = require("vcards-js");

    //create a new vCard
    var vCard = vCardsJS();

    //set properties
    vCard.firstName = "Eric";
    vCard.middleName = "J";
    vCard.lastName = "Nesser";
    vCard.organization = "ACME Corporation";
    vCard.workPhone = "312-555-1212";
    vCard.birthday = new Date(1985, 0, 1);
    vCard.title = "Software Developer";
    vCard.url = "https://github.com/enesser";
    vCard.note = "Notes on Eric";

    //save to file
    // vCard.saveToFile("./eric-nesser.vcf");

    //get as formatted string
    // console.log(vCard.getFormattedString());
    return vCard.getFormattedString();
  };

  return (
    <div>
      <button onClick={() => downloadTxtFile(CreateVCard())}>Add</button>
    </div>
  );
}
