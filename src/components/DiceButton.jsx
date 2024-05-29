const DiceButton = props => {
    const dieClassName = `dice-button center font-bold position-rel cursor-p ${props.isHeld? "bg-green" : ""} `;

    const clickHandler = () => {
        props.onFreezeDie();
    };

    return (
        <section className={dieClassName} onClick={clickHandler}>
            <section className="dot-one position-abs border-radius-50" style={{background: [4, 5, 6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-two position-abs border-radius-50" style={{background: [6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-three position-abs border-radius-50" style={{background: [2, 3, 4, 5, 6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-four position-abs border-radius-50" style={{background: [2, 3, 4, 5, 6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-five position-abs border-radius-50" style={{background: [6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-six position-abs border-radius-50" style={{background: [4, 5, 6].includes(props.value) ? "black" : "transparent"}}></section>
            <section className="dot-seven position-abs border-radius-50" style={{background: [1, 3, 5].includes(props.value) ? "black" : "transparent"}}></section>
        </section>
    );
};

export default DiceButton;