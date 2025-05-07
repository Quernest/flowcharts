import React, { createContext, useContext, FC, PropsWithChildren } from "react";
import {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";
import { noop } from "../utils";

export interface DiagramContextType {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange;
}

const DiagramContext = createContext<DiagramContextType>({
  nodes: [],
  setNodes: noop,
  onNodesChange: noop,
  edges: [],
  setEdges: noop,
  onEdgesChange: noop,
});

export const useDiagramContext = (): DiagramContextType =>
  useContext(DiagramContext);

export type DiagramProviderProps = PropsWithChildren<{
  nodes: Node[];
  edges?: Edge[];
}>;

export const DiagramProvider: FC<DiagramProviderProps> = ({
  children,
  nodes: defaultNodes = [],
  edges: defaultEdges = [],
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(defaultEdges);

  return (
    <DiagramContext.Provider
      value={{ nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange }}
    >
      {children}
    </DiagramContext.Provider>
  );
};
