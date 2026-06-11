[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=deepdivesecurity_near-realtime-chat-app&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=deepdivesecurity_near-realtime-chat-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=deepdivesecurity_near-realtime-chat-app&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=deepdivesecurity_near-realtime-chat-app)
[![CodeQL](https://github.com/deepdivesecurity/near-realtime-chat-app/workflows/CodeQL/badge.svg)](https://github.com/deepdivesecurity/near-realtime-chat-app/actions?query=workflow%3ACodeQL)

# Near Real-Time Chat App

A simple, lightweight chat application built with **Socket.IO** for real-time bidirectional communication between clients and server.

## Features

- **Real-time messaging** - Instant message delivery using WebSocket protocol
- **Client-server architecture** - Express.js backend with HTML/JavaScript frontend
- **Socket.IO integration** - Seamless real-time communication framework
- **Lightweight** - Minimal dependencies and fast setup
- **Event-driven** - Message broadcasting and user connection tracking

## Prerequisites

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepdivesecurity/near-realtime-chat-app.git
   cd near-realtime-chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

1. **Start the server**
   ```bash
   node app.js
   ```

2. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The app will connect to the WebSocket server automatically

3. **Interact**
   - Messages are delivered in real-time
   - Connection and disconnection events are logged in the server console

## Project Structure

```
socket_io_chat_app/
├── app.js              # Express server & Socket.IO setup
├── index.html          # Client-side UI and Socket.IO client
├── package.json        # Project dependencies
└── README.md          # This file
```

## Technical Details

### Backend (app.js)
- **Express.js**: Web server framework
- **Socket.IO**: Real-time communication library
- **Port**: 8080 (default)
- **Features**:
  - Listens for client connections
  - Handles disconnect events
  - Broadcasts messages to connected clients

### Frontend (index.html)
- Client-side Socket.IO connection
- Event listeners for real-time updates
- Lightweight HTML/JavaScript UI

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.2.1 | Web framework for Node.js |
| `socket.io` | ^4.8.3 | Real-time communication library |

## Available Scripts

```bash
npm start   # Start the application (alias: node app.js)
npm test    # Run tests (not yet configured)
```

## API Events

### Server Events
- `connection` - Fired when a client connects
- `disconnect` - Fired when a client disconnects

### Client Events
- `messages` - Receives messages from the server
- `connect` - Fired when client connects to server
