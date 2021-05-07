import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";

import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName="fhern103"
      userSecret={process.env.REACT_APP_USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
