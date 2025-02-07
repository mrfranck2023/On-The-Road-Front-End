import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navigation from '../Components/Navigation';

const Mespokemons = () => {

    const [data, setData] = useState();
    const [name, setName] = useState();
    const [weight, setWeight] = useState();
    const [number, setNumber] = useState(1);
    let URL = `https://pokeapi.co/api/v2/pokemon/${1}`

    if(typeof number == null || number == 0)
        {
            URL = `https://pokeapi.co/api/v2/pokemon/${1}`
            console.log("je suis entre ici")
        }
        else{
            URL = `https://pokeapi.co/api/v2/pokemon/${number}`
        }
console.log(typeof number)

    useEffect(() => {
        axios.get(URL).then((response) => {
            setData(response.data)
            setName(response.data.name)
            setWeight(response.data.weight)
        }).catch((err) => {
            window.alert(err)
        })
    }, [])

    return (

        <div>
            <Navigation/>

            <h1>Pokemon</h1>
            <input type="number" onChange={(e) => { setNumber(e.target.value)}}/>
            <button>Show</button>
            <h2>{name}</h2>
            <h3>Poids: {weight} </h3>
            <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading</p>"} alt="" />
            <p>Mes Capacités sont:</p>
            {data ? data.abilities.map((value, key) => {
                return (
                    <div key={key}>
                        {value.ability.name}
                    </div>
                )
            }):""}
        </div>
    );
};

export default Mespokemons;