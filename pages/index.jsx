import { useState } from 'react'
import { getRandomMessage } from '../helpers/contants'
import "tailwindcss/tailwind.css"

function Home() {
    const initialRandomMessage = getRandomMessage()
    const [message, setMessage] = useState(initialRandomMessage)

    function randomizeMessage() {
        const newMessage = getRandomMessage()

        setMessage(newMessage)
    }

    return (
        <main className="bg-green-700 flex flex-col h-screen items-center justify-center p-4 relative text-center text-white">
            <div className="mb-4 relative">
                <p className="text-lg uppercase">
                    <span className="absolute font-mono -left-9 opacity-50 text-7xl -top-3">
                        &ldquo;
                    </span>

                    <span className="font-thin text-sm md:text-lg">
                        Será que eu devo me vacinar?
                    </span>

                    <span className="absolute -bottom-11 font-mono opacity-50 -right-9 text-7xl">
                        &rdquo;
                    </span>
                </p>
            </div>

            <div className="mb-6">
                <PhraseDisplayer message={message} />
            </div>

            <div>
                <button
                    className="p-1 text-green-100 text-sm"
                    onClick={randomizeMessage}
                >
                    Clique aqui para ver outras razões
                </button>
            </div>

            <div className="absolute bottom-0 flex flex-row flex-wrap font-mono justify-center p-4 text-green-200 text-xs">
                <div className="flex flex-row">
                    <p className="mx-1">
                        Compartilhar:
                    </p>

                    <a
                        className="mx-1 underline"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevovacinar.me%2F&t=Devo%20Vacinar-me%3F"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Compartilhar no Facebook"
                    >
                        Facebook
                    </a>

                    <a
                        className="mx-1 underline"
                        href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fdevovacinar.me%2F&text=Devo%20Vacinar-me%3F:%20https%3A%2F%2Fdevovacinar.me%2F"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Tweetar sobre isso"
                    >
                        Twitter
                    </a>

                    <span className="hidden sm:block mx-1">
                        &#124;
                    </span>
                </div>

                <div className="mx-1">
                    <p>
                        Repositório:{' '}

                        <a
                            className="underline"
                            href="https://github.com/iWeya/devovacinar.me"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}

function PhraseDisplayer(props) {
    return (
        <div>
            <p className="font-black text-2xl md:text-5xl uppercase">
                {props.message}
            </p>
        </div>
    )
}

export default Home
