import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './TodoComponents/Card.jsx';

function App() {
  const [workTitle, setWorkTitle] = useState(''); // State to store the workTitle
  const [cards, setCards] = useState([]); // State to store the list of cards

  // Function to add a new card
  const addCard = () => {
    if (workTitle.trim() !== '') {
      const newCard = {
        index: cards.length + 1,
        workTitle: workTitle,
      };
      const updatedCards = [...cards, newCard];
      setCards(updatedCards);

      // Save updatedCards to local storage
      localStorage.setItem('cards', JSON.stringify(updatedCards));

      setWorkTitle('');
    }
  };

  // Function to delete a card

const deleteCard = (cardIndex) => {
  const updatedCards = cards.filter((card) => card.index !== cardIndex);
  setCards(updatedCards);

  // Save updatedCards to local storage
  localStorage.setItem('cards', JSON.stringify(updatedCards));
};

// Function to delete a card and its details from local storage
const deleteCardAndLocalStorage = (cardIndex) => {
  deleteCard(cardIndex);

  // Remove the card's details from local storage
  const savedCards = JSON.parse(localStorage.getItem('cards'));
  if (savedCards) {
    const updatedCards = savedCards.filter((card) => card.index !== cardIndex);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  }
};


  // Load cards data from local storage on component initialization
  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  return (
    <>
      <div id="bigBox">
        <div id="dataEnterBox">
          <input
            type="text"
            id="inputData"
            value={workTitle}
            onChange={(e) => setWorkTitle(e.target.value)}
            placeholder="Learn useRed"
          />
          <button id="addTodo" onClick={addCard}>
            Add
          </button>
        </div>
      </div>
      <div id="bigBoxCard">
        {cards.map((card) => (
          <Card
            key={card.index}
            index={card.index}
            workTitle={card.workTitle}
            deleteCard={deleteCardAndLocalStorage}
          />
        ))}
      </div>
    </>
  );
}

export default App;
