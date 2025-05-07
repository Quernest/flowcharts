import React, { useRef, ChangeEvent } from "react";
import { useDiagramContext } from "../../contexts/diagram-context";
import { useColorContext } from "../../contexts/color-context";
import Button from "../button";

const ImportButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setNodes, setEdges } = useDiagramContext();
  const { setGlobalColor } = useColorContext();

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        if (json.nodes) setNodes(json.nodes);
        if (json.edges) setEdges(json.edges);
        if (json.globalColor) setGlobalColor(json.globalColor);
      } catch {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleImportClick}>
        Import JSON
      </Button>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
    </>
  );
};

export default ImportButton;
