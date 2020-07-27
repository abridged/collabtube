import React, { useState } from "react";
import { addVideo } from "../utils/CTS3";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import LoadingOverlay from '../components/LoadingOverlay';

function setTicket() {

    return (
        <div>
            <div class="flex justify-center">
                <hr class="bg-gray-400 h-1 border-transparent w-1/2 m-8"></hr>
            </div>
            <br />

            <div class="justify-content">
                <i class="las la-ticket-alt"></i>
                <h1 class="my-3 text-center font-bold text-black text-opacity-100" >
                    Set Ticket Price
            </h1>
            </div>

            <div class="mt-10 flex justify-center">
                <button class="justify-center my-1 bg-white hover:bg-gray-400 text-black font-semibold w-16 py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
                    <span class="justify-center align-middle">MYS</span>
                </button>
                <input class="my-1 bg-white hover:bg-gray-100 text-black font-semibold w-1/6 py-2 px-4 border-2 border-gray-400 rounded shadow m-1" />
            </div>

            <div class="flex justify-center">
                <p class="justify-end text-gray-500 text-sm">Token Price: $0.50</p>
            </div>

            <div class="mt-10 flex justify-center">
                <button class="justify-center align-middle my-1 bg-white hover:bg-gray-400 text-black font-semibold w-16 py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
                    <span class="justify-center align-middle">USD</span>
                </button>
                <input class="my-1 bg-white hover:bg-gray-100 text-black font-semibold w-1/6 py-2 px-4 border-2 border-gray-400 rounded shadow m-1" />
            </div>
            <div class="flex justify-center">
                <p class="justify-end text-gray-500 text-sm">Account Balance: $34.00</p>
            </div>

        </div>






    )
}

export default setTicket;