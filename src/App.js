import React, { Component } from 'react';
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json"
import './App.css';

class App extends Component {
    state = {
        pokemon
    };

  render() {
        return (
            <Wrapper>
                {this.state.pokemon.map(pokemon => (
                    <MemoryCard
                        // removePokemon={this.removePokemon}
                        id={pokemon.id}
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
