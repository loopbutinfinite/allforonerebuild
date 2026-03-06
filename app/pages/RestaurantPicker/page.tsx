"use client";

import { Button, Card } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RestaurantPicker = () => {
    const [foodSelection, setFoodSelection] = useState("");
    const [restaurant, setRestaurant] = useState("");
    // 1. Add a toggle or counter to force a refresh
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const handleButtonClick = (category: string) => {
        setFoodSelection(category);
        // 2. Increment this every click to force the useEffect to run
        setRefreshTrigger(prev => prev + 1);
    };

    useEffect(() => {
        if (!foodSelection) return;

        const fetchData = async () => {
            try {
                // To help with UX, clear the old name so they know it's loading
                setRestaurant("");

                const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/RestaurantPicker/Restaurant/${foodSelection}`);
                const data = await response.text();
                setRestaurant(data);
            } catch (error) {
                setRestaurant("");
            }
        };

        fetchData();
    }, [foodSelection, refreshTrigger]); // 3. Now it watches for category OR a new click

    return (
        <div>
            <main className="min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 pt-10">
                <h1 className="grid place-items-center text-6xl font-[silkscreen] text-[#a1d5ed] drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-center">Restaurant Picker</h1>
                <div className='grid place-items-center'>
                    <p className="text-white bg-gray-600 px-3 mt-5 py-1 w-[80%] mx-auto text-center">Welcome to the Restaurant Picker. Click one of the buttons below that correspond to a food category. When one of the buttons are clicked, a random restaurant that relates to that category will populate below.</p>
                    <Button onClick={() => handleButtonClick("indian")} className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group px-10 text-2xl border-2 border-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none">Indian
                    </Button>
                    <Button onClick={() => handleButtonClick("korean")} className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium border-2 px-9 text-2xl border-white  text-gray-900 rounded-lg group bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none">Korean
                    </Button>
                    <Button onClick={() => handleButtonClick("greek")} className="text-black border-white border-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 text-2xl py-2.5 text-center me-2 mb-2 mt-5">Greek
                    </Button>

                    <Card className="text-black bg-gray-400 mt-5 px-1 py-1 text-xl text-white">{restaurant} </Card>
                    <Link href="/"><Button type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 mt-10 to-blue-500 border-2 border-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back
                        to Home</Button></Link>
                </div>
            </main>
        </div >




    );
};

export default RestaurantPicker;