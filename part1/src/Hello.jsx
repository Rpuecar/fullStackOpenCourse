const Hello = ({name, age}) => {
    // Desestructuración de objetos en JavaScript ES6
    // const { name, age } = props
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>

            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

export default Hello;