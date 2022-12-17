import { Connection, EdgeChange, NodeChange } from "@reactflow/core";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { Bar } from "./Bar";
import { Nodes, NodesState } from "./Nodes";
import shallow from "zustand/shallow";

const selector = (state: NodesState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  addNode: state.addNode,
});

export function Editor() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    Nodes.use(selector, shallow);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{
          hideAttribution: true,
        }}
        nodeTypes={Nodes.nodeTypes}
        className="bg-neutral-900"
      >
        <Background />
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
      <Bar
        onCreateNode={(newNode) => {
          addNode(newNode);
        }}
      />
    </>
  );
}

export namespace Editor {}
