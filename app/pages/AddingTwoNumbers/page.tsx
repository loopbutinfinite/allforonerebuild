"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, TextInput } from 'flowbite-react';

const AddingTwoNumbers = () => {

    //These will be what will manipulate the DOM with our intializers being set to empty and it being set through set functions
    const [firstUserNum, setFirstUserNum] = useState("");
    const [secondUserNum, setSecondUserNum] = useState("");
    const [sum, setSum] = useState("");

    const FetchAndSetData = async () => { //This function will be doing both the fetching of the data and setting the data to display to the DOM
        // const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AddingTwoNumbers/Sum/${firstUserNum}/${secondUserNum}`);
        // const data = await response.text();
        // console.log(data);
        // return data;
        try { //This try catch is here to look for errors and debugging purposes so it does not break the project.
            const FetchData = async () => {
                const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AddingTwoNumbers/Sum/${firstUserNum}/${secondUserNum}`);
                const data = await response.text();
                console.log(data);
                return data;
            };
            setSum(await FetchData()); //Here we are using the set function to set the new value of sum to equal our fetched data with users' both number inputs.
        } catch (error) {
            console.log("Error Fetching data", error);
        }
    };

    return (
        <div>
            <main className='bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen pt-10'>
                <h1
                    className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-center">
                    Adding Two Numbers</h1>
                <div className="grid place-items-center">
                    <p className="text-white bg-gray-600 text-2xl px-2 py-1 mt-5 mx-auto w-[80%] text-center">Input a number into each of the input fields below. Once numbers are inputted and the submit answers button is clicked, you will be returned the sum of your number inputs below.</p>
                    <TextInput value={firstUserNum} className='mt-5' placeholder='Enter your first number' onChange={(event) => setFirstUserNum(event.target.value)}></TextInput> {/*This TextInput field from FlowBite is listening to our users' input through onChange setting the users' input with set functions and stores the new value of firstUserNum */}
                    <TextInput value={secondUserNum} className='mt-5' placeholder='Enter your second number' onChange={(event) => setSecondUserNum(event.target.value)}></TextInput>
                    <button type="button" onClick={() => FetchAndSetData()} className="text-white border-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5">Submit Answers</button>
                    <p id="sumOutputText" className="text-black bg-white mt-5 px-2 py-1"><span className='font-bold'>Sum: {sum}</span></p>
                    <Link href="/" ><button type="button"
                        className="text-white mt-5 bg-gradient-to-r border-2 border-black from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back
                        to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default AddingTwoNumbers