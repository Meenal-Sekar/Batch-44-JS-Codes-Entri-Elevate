
    let recognition;
    const output = document.getElementById("output");

  
    function startRecognition() 
    {
      if (!('webkitSpeechRecognition' in window)) 
      {
        alert("Your browser does not support Speech Recognition. Try Chrome!");
        return;
      }
      recognition = new webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.start();

      recognition.onresult = function(event)
       {
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
      };

      recognition.onerror = function(event)
       {
        console.error("Error occurred in recognition: " + event.error);
      };
    }

    
    function speakText() 
    {
      let text = output.textContent;

      if (text.trim() === "" || text === "Your speech will appear here...") 
      {
        text = "Hey Dude Talk to me first";
      }
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  // function Clear()
  // {
  //   output.value = " "
  // }