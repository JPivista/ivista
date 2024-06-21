// components/CollectChatScript.js
import { useEffect } from 'react';

const CollectChatScript = () => { 
  useEffect(() => {
    // Load Collect.chat script
    (function(w, d) {
      w.CollectId = "5cd12ddee1d07210896b7fc9";
      var h = d.head || d.getElementsByTagName("head")[0];
      var s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);

    return () => {
      // Cleanup: Remove the script
      const script = document.querySelector('script[src="https://collectcdn.com/launcher.js"]');
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          #chat-bot-launcher-container.chat-bot-avatar-launcher, #chat-bot-launcher-container.chat-bot-launcher-notext {
            
            top: 78%;
          }

          div#chat-bot-launcher-button {
            background-image: url('/images/chat_bot.svg') !important;
            background-size: cover;
          }
        `}
      </style>
      {/* This component doesn't render anything visible */}
    </>
  );
};

export default CollectChatScript;
