"use client";

import { TextInput } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Magic8Ball = () => {
    const [question, setQuestion] = useState("");
    const [magicResponse, setMagicResponse] = useState("");

    const FetchAndSetData = async () => {
        try {
            const FetchData = async () => {
                const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/Magic8Ball/Magic8/${question}`);
                const data = response.text();
                return data;
            };
            setMagicResponse(await FetchData());
        } catch (error) {
            console.log("Error Fetching data", error);
        }
    };


    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-5xl md:text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">Magic 8 Ball</h1>
                <div className="grid place-items-center">
                    <p className="text-white bg-gray-600 px-3 mt-5 py-1 w-[80%] mx-auto text-center">Enter a question that you have for the Magic 8 Ball below and press enter. Once you have completed in asking your question, the Magic 8 Ball will display its response below.</p>
                    {/* <input id="questionInputBox" className="bg-white mt-3" type="text" placeholder="Enter your question here"> */}
                    <TextInput className='mt-5 w-[25%] text-center' placeholder='Type out your question' value={question} onChange={(event) => setQuestion(event.target.value)}></TextInput>
                    <button type="button" onClick={() => FetchAndSetData()} className="focus:outline-none border-2 text-white mt-5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit Question</button>
                    <p id="magicBallResponseText" className="bg-white text-black mt-5 px-1">Magic 8 Ball Says: {magicResponse}</p>
                    <Link href="/"><button type="button" className="text-white bg-gradient-to-r border-2 border-black mt-10 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default Magic8Ball