"use client";

import { TextInput } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const OddOrEven = () => {
    const [number, setNumber] = useState("");
    const [oddEven, setOddEven] = useState("");

        const FetchAndSetData = async () => {
            try {
                const FetchData = async () => {
                    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/OddOrEven/Result/${number}`);
                    const data = response.text();
                    return data;
                };
                setOddEven(await FetchData());
            } catch (error) {
                console.log("Error Fetching data", error);
            }
        };

    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">Odd or Even</h1>
                <div className="grid place-items-center">
                    <p className='mx-auto w-[80%] text-white bg-gray-600 my-3 py-1 text-center'>Welcome to Odd or Even! Input a number below and click the submit response button. Once clicked, you will be told if the number you entered is an odd or even number below.</p>
                    {/* <input class="bg-white mt-5" id="userNumberInputBox" type="text" placeholder="Enter your number here"> */}
                    <TextInput className='mt-5' placeholder='Enter your number' value={number} onChange={(event) => setNumber(event.target.value)}></TextInput>
                    <button onClick={() => {FetchAndSetData()}} id="submitUserResponseButton" type="button" className="text-gray-900 bg-gradient-to-r border-2 border-white from-teal-200 mt-5 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit Response</button>
                    <p id="resultOutputBox" className="bg-gray-300 mt-5 px-3 py-.5 text-black">Result: {oddEven}</p>
                    <Link href="/"><button type="button" className="text-white border-2 border-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium mt-10 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default OddOrEven