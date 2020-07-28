import React, { useState } from "react";
import { addVideo } from "../utils/CTS3";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Icon, InlineIcon } from '@iconify/react';

import LoadingOverlay from '../components/LoadingOverlay';

function setTicket() {

    return (
        <div>
            <div class="flex justify-center">
                <hr class="bg-gray-400 h-1 border-transparent w-1/2 m-8"></hr>
            </div>
            <br />

            <div class="flex justify-center">
                {/*Ticket icon*/}
                <svg class="justify-center align-middle h-12 w-12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path d="M2 7v7h1c1.191 0 2 .809 2 2c0 1.191-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2c0-1.191.809-2 2-2h1V7zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812c0 1.855 1.285 3.363 3 3.813V23H4v-3.188c1.715-.449 3-1.957 3-3.812c0-1.855-1.285-3.363-3-3.813z" fill="#626262" />
                </svg>
            </div>

            <div class="justify-center">
                <div class="flex items-center">
                </div>
                <h1 class="my-3 text-center font-bold text-black text-opacity-100" >
                    Set Ticket Price
            </h1>
            </div>

            <div class="mt-10 flex justify-center">
                <button class="justify-center my-1 bg-white hover:bg-gray-400 text-black font-semibold w-16 py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
                    <div class="flex justify-center">
                        <span class="justify-center align-middle">MYS</span>
                    </div>
                </button>
                <input class="my-1 bg-white hover:bg-gray-100 text-black font-semibold w-1/6 py-2 px-4 border-2 border-gray-400 rounded shadow m-1" />
            </div>

            <div class="flex justify-center">
                <p class="justify-end text-gray-500 text-sm">Token Price: $0.50</p>
            </div>

            <div class="mt-10 flex justify-center">
                <button class="justify-center align-middle my-1 bg-white hover:bg-gray-400 text-black font-semibold w-16 py-2 px-4 border-2 border-gray-400 rounded shadow m-1">
                    <div class="flex justify-center">
                        <svg class="h-6 w-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <path d="M15 3v2.094C12.164 5.57 10 8.05 10 11c0 1.777.832 3.148 1.938 4.031c1.105.883 2.437 1.375 3.687 1.875s2.418 1.008 3.188 1.625C19.581 19.148 20 19.773 20 21c0 2.156-1.793 4-4 4c-2.219 0-4-1.781-4-4v-1h-2v1c0 2.965 2.164 5.43 5 5.906V29h2v-2.094c2.844-.48 5-2.98 5-5.906c0-1.781-.832-3.145-1.938-4.031c-1.105-.887-2.437-1.407-3.687-1.907s-2.418-.98-3.188-1.593C12.418 12.855 12 12.219 12 11c0-2.191 1.785-4 4-4c2.219 0 4 1.781 4 4v1h2v-1c0-2.965-2.164-5.43-5-5.906V3z" fill="black" /></svg>
                        <span class="justify-center align-middle">USD</span>
                    </div>
                </button>
                <input class="my-1 bg-white hover:bg-gray-100 text-black font-semibold w-1/6 py-2 px-4 border-2 border-gray-400 rounded shadow m-1" />
            </div>
            <div class="flex justify-center">
                <p class="justify-end text-gray-500 text-sm">Account Balance: $34.00</p>
            </div>

            {/*Checkmark icon*/}
            <div class="flex justify-center">
                <button>
                    <svg class="h-12 w-12 my-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="black" /></svg>
                </button>
            </div>
        </div >


    )
}

export default setTicket;