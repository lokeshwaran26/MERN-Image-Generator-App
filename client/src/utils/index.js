import { surpriseMePrompts } from "../constants"

const getRandomPrompt = (prompt) =>{
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if(randomIndex === prompt) return getRandomPrompt(prompt);

    return randomPrompt
}

export {
    getRandomPrompt
}