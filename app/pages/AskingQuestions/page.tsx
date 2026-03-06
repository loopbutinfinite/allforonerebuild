"use client";

import { TextInput } from 'flowbite-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const AskingQuestions = () => {
    const [questionOne, setQuestionOne] = useState("");
    const [questionTwo, setQuestionTwo] = useState("");
    const [result, setResult] = useState("");

    const FetchAndSetData = async () => {
        try {
            const FetchData = async () => {
                const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AskingQuestions/Responses/${questionOne}/${questionTwo}`);
                const data = await response.text();
                return data;
            };
            setResult(await FetchData());
        } catch (error) {
            console.log("Error Fetching data", error)
        }
    };

    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">Asking Questions</h1>

                <div className="grid place-items-center mt-5 text-center">
                    <p className="text-white mx-auto w-[80%] bg-gray-600 px-3 py-1">Input your responses to the questions. Once you've inputted your responses, click the submit button and watch your responses be relayed back to you.</p>
                    <div className="grid place-items-center mt-5">
                        <p className="text-xl">What is your name?</p>
                        {/* <input id="nameInputField" class="bg-white mt-2" type="text" placeholder="Enter a name"> */}
                        <TextInput className='mt-5' placeholder='Enter your name' value={questionOne} onChange={(event) => setQuestionOne(event.target.value)} />

                        <p className="mt-5 text-xl">What time did you wake up today?</p>
                        {/* <input id="timeInputField" class="bg-white mt-2" type="text" placeholder="Enter a time"> */}
                        <TextInput className='mt-5' placeholder='Enter a time' value={questionTwo} onChange={(event) => setQuestionTwo(event.target.value)} />

                        <button type="button" onClick={() => FetchAndSetData()} className="focus:outline-none border-2 text-white mt-5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit Answers</button>
                    </div>
                    <p className="text-black bg-white mt-5 px-3">Response: {result}</p>
                    <Link href="/"><button type="button" className="text-white border-2 border-black mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default AskingQuestions