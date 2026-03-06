"use client";

import { TextInput } from 'flowbite-react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const GreaterThanLessThan = () => {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [answer, setAnswer] = useState("");

    const FetchAndSetData = async () => {
        try {
            const FetchData = async () => {
                const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/GreaterThanLessThan/Result/${firstNum}/${secondNum}`);
                const data = await response.text();
                return data;
            };
            setAnswer(await FetchData());
        } catch (error) {
            console.log("Error Fetching data", error)
        }
    };

    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-center">Greater Than Less Than</h1>
                <div className="grid place-items-center my-5">
                    <p className="text-white bg-gray-600 px-3 py-1 w-[80%] mx-auto text-center">Input two numbers below in the input fields and click the submit button when done. You will be told the relation of your two number inputs and whether one number is greater than, less than or equal to.</p>
                    {/* <input id="userNumberInput1" className="bg-white mt-5" type="text" placeholder="Enter your first number"> */}
                    {/* <input id="userNumberInput2" className="bg-white mt-5" type="text" placeholder="Enter your second number"> */}
                    <TextInput className='mt-5' placeholder='Enter first number' value={firstNum} onChange={(event) => setFirstNum(event.target.value)}></TextInput>
                    <TextInput className='mt-5' placeholder='Enter second number' value={secondNum} onChange={(event) => setSecondNum(event.target.value)}></TextInput>
                    <button onClick={() => {FetchAndSetData()}} type="button" className="text-white bg-gradient-to-r border-2 from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5">Submit Answers</button>
                </div>
                <div className="grid place-items-center">
                    <p id="resultTextOutput" className="text-black bg-white px-2 py-.5">Result: {answer}</p>
                    <Link href="/"><button type="button" className="text-white mt-10 border-2 border-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>


            </main>
        </div>
    )
}

export default GreaterThanLessThan