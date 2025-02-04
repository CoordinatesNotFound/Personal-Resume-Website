import React from "react";
import MessageForm from "../components/MessageForm";
import VariableWeightText from "../components/VariableWeightText";

const Message = () => {
  return (
    
    <div className="bg-white-900 px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
        
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="Leave A"
          extraboldText="Message"
        />

        <MessageForm />
      </div>
    </div>
  );
};

export default Message;
