import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";

test("Fetches data and renders the bubbles", async () => {
   const {  getAllByTestId, rerender } = render(<BubblePage />)
    rerender(<Bubbles colors={bubblesData} /> ) 
    await waitFor(() => {
   const allBubbles = getAllByTestId(/bubbles/i)
   expect(allBubbles).toHaveLength(4); 
})
});
const bubblesData =  [ 
    {
    "color":"softyellow",
    "code":{
       "hex":"#DCDD99"
    },
    "id":8
 },
 {
    "color":"blanchedalmond",
    "code":{
       "hex":"#FFEBCD"
    },
    "id":9
 },
 {
    "color":"blue",
    "code":{
       "hex":"#6093CA"
    },
    "id":10
 },
 {
    "color":"blueviolet",
    code:{
       "hex":"#8A2BE2"
    },
    "id":11
 }
]
