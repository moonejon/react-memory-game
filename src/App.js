import React, { Component } from 'react';
import MemoryCardFront from "./components/MemoryCardFront";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import pokemon from "./pokemon.json"
import './App.css';

 const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

class App extends Component {
    state = {
        pokemon,
        // selectedPokemon
    };

    render() {
      const shuffledCards = shuffleArray(this.state.pokemon)
        return (
            <Wrapper>
                <Title>
                    {
                        <p>
                            <img src="https://vignette.wikia.nocookie.net/pokemon/images/9/9f/Pok%C3%A9monLogo%28Eng%29.png/revision/latest?cb=20090304221051" />
                        </p>
                    }
                </Title>
                {shuffledCards.map(pokemon => (
                    <MemoryCardFront
                        selectPokemon={this.selectPokemon}
                        id={pokemon.id}
                        h
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
