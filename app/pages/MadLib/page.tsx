"use client";

import { TextInput } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FetchMadLib } from '@/app/utils/DataService';

const MadLib = () => {
    const [name, setName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [object, setObject] = useState("");
    const [story, setStory] = useState("");

    const FetchAndSetData = async () => {
            setStory(await FetchMadLib(name, occupation, object));
    };

    return (
        <div>
            <main className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10'>
                <h1 className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">Mad Lib</h1>
                <div className="grid place-items-center">
                    <p className="text-white bg-gray-600 px-3 mt-5 py-1 mx-auto w-[80%] text-center">This is the classic MadLib story. Input your responses into the input fields that correspond to what it is asking for. Once you have filled all input fields, hit the submit responses button and watch your responses be included into the story below.</p>
                    {/* <p className="text-black bg-gray-400 text-center mt-10 py-2 px-2" >Yesterday, <span><input id="nameInputBox" class="bg-white" type="text" placeholder="Enter a name"></span> was busy working as a professional <span><input id="occupationInputBox" class="bg-white" type="text" placeholder="Enter a occupation"></span> when they tripped over something hidden in the grass. Much to their surprise, it was a <span><input id="unusualObjectInputBox" class="bg-white" type="text" placeholder="Enter an unusual object"></span>! With no hesitation, they picked it up and realized they could have been the laughing stock of the company if anyone saw.</p> */}
                    <TextInput placeholder='Enter a name' className='mt-5' value={name} onChange={(event) => setName(event.target.value)}></TextInput>
                    <TextInput placeholder='Enter an occupation' className='mt-5' value={occupation} onChange={(event) => setOccupation(event.target.value)}></TextInput>
                    <TextInput placeholder='Enter an unusual object' className='mt-5' value={object} onChange={(event) => setObject(event.target.value)}></TextInput>
                    <button id="submitResponsesButton" type="button" onClick={() => FetchAndSetData()} className="text-white mt-5 bg-gradient-to-r border-2 from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit Responses</button>
                    <p id="storyOutputTextBox" className="bg-gray-800 text-xl text-gray-300 w-[50%] text-black mt-5 px-3 py-2">{story}</p>
                    <Link href="/"><button type="button" className="text-white border-2 border-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg mt-10 text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button></Link>
                </div>
            </main>
        </div>
    )
}

export default MadLib