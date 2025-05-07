## 🚀 Project Overview

A simple React-based flowchart tool for creating and interacting with diagrams. It supports customizable nodes, edges, and real-time interaction, with import/export functionality for saving/loading diagrams as JSON.

### 🔗 [Live Demo](https://flowcharts.onrender.com/)

---

## 🧩 Key Components

- **FlowChart**: Manages diagram state and rendering.
- **Canvas**: Renders and interacts with the flowchart.
- **Toolbar**: Provides controls for diagram manipulation.
- **Context Providers**: Handles global settings (colors, diagram state).

---

## 🔧 Tech Stack

- **React**
- **@xyflow/react** (for flowchart rendering)
- **Context API** (for global state management)

---

## 🗂 Folder Structure & Modularity

The project follows a monorepo structure with two main packages:

- **`packages/example-app`**: A React app used for testing and demonstration. It imports `FlowChart` from the `lib` package to showcase its functionality.
  
- **`packages/lib`**: A library of optimized React-based components, including `FlowChart`, `Canvas`, `Toolbar`, and context providers, which are reusable and can be easily imported into other projects.

This modular architecture ensures the core components are optimized and separated for ease of maintenance and scalability.