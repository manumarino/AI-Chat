import React from 'react';
import { 
    useMultiChatLogic, 
    MultiChatSocket, 
    MultiChatWindow } from 'react-chat-engine-advanced';
import CustomHeader from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from '@/components/customMessageForms/Ai';



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
        if (chatProps.chat?.title.startsWith("AIChat_")) {
          return <Ai props={props} activeChat={chatProps.chat} />
        }
        return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
        )
        
      } }
      />
    </div>
  )
}

export default Chat
