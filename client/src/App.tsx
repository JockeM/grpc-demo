import { useState } from 'react'
import { greeterClient } from './client'


function App() {
    const [name, setName] = useState('');
    const [output, setOutput] = useState('');

    async function SayHello(name: string) {
        const { response } = await greeterClient.sayHello({ name })

        setOutput(output + response.message + '\n');
    }

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={async () => SayHello(name)}>Say Hello</button>
            <pre>{output}</pre>
        </>
    )
}

export default App
