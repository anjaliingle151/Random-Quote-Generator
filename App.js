import React, { useState } from 'react';
import './App.css';

const quotes = [
  { 
    text: "अच्छी किताबें और अच्छे लोग, तुरंत समझ में नहीं आते,उन्हें पढना पड़ता हैं।",
    author: "Gulzar",
    image: "https://i.pinimg.com/736x/b4/90/45/b49045a50f08392b1e465e9bd96b71cf.jpg"
  },
  { 
    text: "मरते हैं आरज़ू में मरने की मौत आती है पर नहीं आती",
    author: "Mirza Ghalib",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqURTw4efbcLcDRriRER7YsR8JeGbhw7XcUg&s"
  },
  { 
    text: "तू भी हीरे से बन गया पत्थर हम भी कल जाने क्या से क्या हो जाएं",
    author: "Ahmad Faraz",
    image: "https://source.unsplash.com/1920x1080/?beach,sunset"
  },
  { 
    text: "Iदिल ना-उमीद तो नहीं नाकाम ही तो है लम्बी है ग़म की शाम मगर शाम ही तो है",
    author: "Faiz Ahmed Faiz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QN-Ld0Gv6dtyOS9CK01laEE2jssQCt5o7w&s"
  },
  { 
    text: "मुझे दुश्मन से भी ख़ुद्दारी की उम्मीद रहती है किसी का भी हो सर क़दमों में सर अच्छा नहीं लगता ",
    author: "Javed Akhtar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QN-Ld0Gv6dtyOS9CK01laEE2jssQCt5o7w&s"
  },
  { 
    text: "अभी राह में कई मोड़ हैं कोई आएगा कोई जाएगा तुम्हें जिस ने दिल से भुला दिया उसे भूलने की दुआ करो",
    author: "Bashir Badra ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QN-Ld0Gv6dtyOS9CK01laEE2jssQCt5o7w&s"
  },
  // Add more quotes as needed
];

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="App">
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${currentQuote.image})` }}
      />
      <div className="quote-box">
        <div className="quote-text">
          <p>"{currentQuote.text}"</p>
          <p>- {currentQuote.author}</p>
        </div>
        <button onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
