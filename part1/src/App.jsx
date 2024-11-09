const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

// Métodos de objeto y "this"
    const arto = {
        name: 'Arto Hellas',
        greet: function () {
            console.log('hello, my name is ' + this.name)
        },
    }


    setTimeout(arto.greet.bind(arto), 1000)

// Clases

    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        greet() {
            console.log('hello, my name is ' + this.name)
        }
    }

    const adam = new Person('Adam Ondra', 29)
    adam.greet()

    const janja = new Person('Janja Garnbret', 23)
    janja.greet()


    return (
        <div>
            <h1>{course.name}</h1>
            <p>
                {course.parts[0].name} {course.parts[0].exercises}
            </p>
            <p>
                {course.parts[1].name} {course.parts[1].exercises}
            </p>
            <p>
                {course.parts[2].name} {course.parts[2].exercises}
            </p>
            <p>
                Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            </p>
        </div>
    )
}

export default App;