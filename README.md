# ASP.NET gRPC Server with React Client and Envoy Proxy

This repository contains a full-stack web application with an ASP.NET server utilizing gRPC for communication, a React client for the frontend, and an Envoy proxy to handle traffic routing. The project is structured into three main components:

1. **ASP.NET gRPC Server (/api):**
   This directory contains the backend server implemented in ASP.NET that uses gRPC for communication. gRPC is a high-performance RPC (Remote Procedure Call) framework that allows efficient communication between the server and client using protocol buffers.

2. **React Client (/client):**
   The `/client` directory holds the frontend application implemented using React, a popular JavaScript library for building user interfaces. The React client communicates with the ASP.NET gRPC server to fetch data and interact with the backend.

3. **Envoy Proxy (/proxy):**
   The `/proxy` directory contains the Envoy proxy configuration along with a `docker-compose.yaml` file. Envoy is a powerful and modern proxy that handles traffic routing, load balancing, and other network-related tasks. It sits between the client and the server, enhancing security, scalability, and reliability.

## Getting Started

To set up and run the full-stack web application, follow these steps:

### Prerequisites

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js](https://nodejs.org/) (LTS version) and [pnpm](https://pnpm.io/) (Package Manager)
- [Docker](https://www.docker.com/) (for running the Envoy proxy)

### Server Setup

1. Navigate to the `/api` directory.
2. Run the ASP.NET gRPC server:
   ```
   dotnet run
   ```
   The server should now be running and accessible at `http://localhost:5034`.

### Client Setup

1. Navigate to the `/client` directory.
2. Install the client-side dependencies using pnpm:
   ```
   pnpm install
   ```
3. Start the React client:
   ```
   pnpm run dev
   ```
   The client should now be running and accessible at `http://localhost:5173/`.

### Envoy Proxy Setup

The Envoy proxy can be set up using Docker and the provided `docker-compose.yaml` file. Make sure you have Docker installed and running on your system.

1. Navigate to the `/proxy` directory.
2. Run the following command to start the Envoy proxy container:
   ```
   docker-compose up -d
   ```
   This command will launch the Envoy container in detached mode, and it will be configured to handle traffic between the client and server.
   (you can access the Envoy admin page at `http://localhost:9901`)

## Usage

With the server, client, and proxy up and running, you can interact with the full-stack web application by visiting `http://localhost:5173` in your web browser. The React client will communicate with the ASP.NET gRPC server through the Envoy proxy.
