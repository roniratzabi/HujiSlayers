

import React, { useState, useEffect } from 'react';

const Fridge = () => {
  const [inputText, setInputText] = useState('');
  const [selectedWords, setSelectedWords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const options = ['Salt',
'Pepper',
'Olive oil',
'Garlic',
'Onion',
'Tomato',
'Basil',
'Parsley',
'Cilantro',
'Oregano',
'Thyme',
'Rosemary',
'Cumin',
'Paprika',
'Chili powder',
'Curry powder',
'Ginger',
'Turmeric',
'Cinnamon',
'Nutmeg',
'Cloves',
'Bay leaves',
'Soy sauce',
'Worcestershire sauce',
'Vinegar',
'Lemon juice',
'Lime juice',
'Mustard',
'Honey',
'Maple syrup',
'Brown sugar',
'White sugar',
'Flour',
'Baking powder',
'Baking soda',
'Yeast',
'Butter',
'Margarine',
'Milk',
'Cream',
'Yogurt',
'Eggs',
'Cheese',
'Chicken',
'Beef',
'Pork',
'Fish',
'Shrimp',
'Tofu'
];

useEffect(() => {
    // Load selected words from local storage
    const savedWords = localStorage.getItem('selectedWords');
    if (savedWords) {
      setSelectedWords(JSON.parse(savedWords));
    }
  }, []);

  useEffect(() => {
    // Save selected words to local storagee
    localStorage.setItem('selectedWords', JSON.stringify(selectedWords));
  }, [selectedWords]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Filter the options based on the input text
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredOptions);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleWordSelect();
    }
  };

  const handleWordSelect = () => {
    if (inputText.trim() !== '') {
      setSelectedWords((prevWords) => [...prevWords, inputText]);
      setInputText('');
      setSuggestions([]);
    }
  };

  const handleWordDelete = (index) => {
    setSelectedWords((prevWords) => prevWords.filter((word, i) => i !== index));
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedWords((prevWords) => [...prevWords, suggestion]);
    setInputText('');
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter text"
      />
      <button onClick={handleWordSelect}>Add</button>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <div className="selected-words">
        {selectedWords.map((word, index) => (
          <div key={index} className="selected-word">
            <span>{word}</span>
            <button onClick={() => handleWordDelete(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fridge;