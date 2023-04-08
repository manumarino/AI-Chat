import React from 'react';
import { 
    useMultiChatLogic, 
    MultiChatSocket, 
    MultiChatWindow } from 'react-chat-engine-advanced';
import CustomHeader from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";



function Chat() {

    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "manu",
        "manu"
    )


  return (
    <div style={{ flexBasis: "100%" }} >
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow 
      {...chatProps}
      style={{ height: "100vh" }}
      renderChatHeader={(chat) => <CustomHeader chat={chat} /> }
      renderMessageForm={(props)=> {
        return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
        )
        
      } }
      />
    </div>
  )
}

export default Chat
