import { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import DiceButton from "./DiceButton";

const Main = () => {
    const [dice, setDice] = useState(allNewDice()),
    [tenzies, setTenzies] = useState(false),
    [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const isAllDieHeld = dice.every(die => die.isHeld),
        firstDieValue = dice[0].value,
        isAllDieTheSame = dice.every(die => die.value === firstDieValue);

        if (isAllDieHeld && isAllDieTheSame) {
            setTenzies(true);
        }
    }, [dice]);
    
    useEffect(() => {
        const obtainWindowDimension = () => {
            setWindowDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", obtainWindowDimension);
        
        return () => {
            window.removeEventListener("resize", obtainWindowDimension);
        }
    }, []);

    function generateNewDie() {
        return {id: Math.floor(Math.random() * (1000000000000)) + 1, value: Math.floor(Math.random() * (6)) + 1, isHeld: false};
    }

    function allNewDice() {
        const randomNumberArray = [];
        
        for (let i = 0; i < 10; i++) {
            randomNumberArray.push(generateNewDie());
        }

        return randomNumberArray;
    }

    const rollDice = () => {
        if (!tenzies) {
            setDice(prevDice => prevDice.map(die => (
                die.isHeld ? die : generateNewDie()
            )))
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    };

    const freezeDie = (id) => setDice(prevDice => (
            prevDice.map(die => (
                die.id === id ? {...die, isHeld: !die.isHeld} : die 
            ))
    ));

    const diceElements = dice.map(die => (
        <DiceButton key={die.id} {...die} onFreezeDie={() => freezeDie(die.id)} />
    ));

    return (
        <main className="center">
            {tenzies && <Confetti width={windowDimension.width} height={windowDimension.height}/>}
            <div className="app-wrapper border-radius-12 center">
                <section>
                    <h3 className="text-align-c">Bacode Tenzies</h3>
                    <p className="text-align-c">Keep rolling the dice till they are all the same. Click each die to freeze it at its die value between rolls.</p>
                    <section className="number-outcome grid">
                        {diceElements}
                    </section>
                    <section className="center"><button className="roll-dice-button cursor-p" style={{background: tenzies ? "green" : "black"}} onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button></section>
                </section>
            </div>
        </main>
    );
};

export default Main;