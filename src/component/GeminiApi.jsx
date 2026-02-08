import { GoogleGenAI } from "@google/genai";
import {useContext, useEffect, useState } from "react";
import { apiContext } from "../contextApi/Apidata";

function GeminiApi(){
  let{value} = useContext(apiContext)
  let{setText} =useContext(apiContext)
  const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_KEY
});


let promt = "No chain-of-thought.\n\n" +
"No reasoning.\n\n" +
"Only output full clean code for the entire website.\n" +
"Do not give partial snippets.\n" +
"Do not explain anything.\n\n" +
"Just give complete code: index.html, style.css, and script.js combined into a single HTML page.\n" +
"Do NOT wrap the output in ```html or any markdown code blocks.\n\n" +
"All code must be fully responsive on all devices (mobile, tablet, desktop).\n\n" +
"Project description: " + value + "\n\n" +
"Constraints (STRICT):\n" +
"- HTML and CSS only.\n" +
"- Do NOT use JavaScript.\n" +
"- Do NOT use <script> tags.\n" +
"- Do NOT use JavaScript template literals (no backticks anywhere).\n" +
"- Do NOT use special symbols in visible text.\n" +
"- Use only standard HTML tags: div, p, h1, h2, h3, h4, h5, h6, img, ul, li, table.\n" +
"- No external libraries or frameworks.\n" +
"- No inline JavaScript.\n" +
"- No document.write().\n" +
"- No window.parent or cross-frame access.\n\n" +
"Animation Requirements:\n" +
"- Use CSS-only animations and transitions.\n" +
"- Add smooth fade-in, slide-in, and hover animations.\n" +
"- Use keyframes for section entry animations.\n" +
"- Animations must be lightweight and performance-friendly.\n" +
"- Animations must work safely inside an iframe.\n\n" +
"Image rules:\n" +
"- Use only royalty-free images from Unsplash, Pexels, or Pixabay.\n" +
"- Use direct image URLs only.\n" +
"- Do not use local images.\n" +
"- Ensure images are responsive and fit inside the layout.\n\n" +
"Photo rules:\n" +
"- If a personal or profile photo is required, use only generic professional human photos.\n" +
"- Do NOT assume the real identity of any person.\n" +
"- Use neutral, professional-looking photos.\n" +
"- Use only royalty-free photos from Unsplash, Pexels, or Pixabay.\n" +
"- Use direct image URLs only.\n" +
"- Do not use local images.\n" +
"- Ensure the photo fits properly and remains responsive on all screen sizes.\n\n" +
"Additional Image Safety Rules (STRICT):\n" +
"- Use ONLY direct image URLs that open the image file directly in a browser.\n" +
"- Image URLs must start with https://\n" +
"- Do NOT use image page links such as unsplash.com/photos or pexels.com/photo pages.\n" +
"- Allowed image domains only: images.unsplash.com, images.pexels.com, cdn.pixabay.com\n" +
"- Do NOT use local image paths.\n" +
"- Ensure all images load correctly inside an iframe.\n" +
"- If a valid direct image URL cannot be guaranteed, do NOT include the image.\n" +
"- If any image fails to load, replace it with a pure CSS gradient background.\n\n" +
"Requirements:\n" +
"- The website must be fully functional using HTML and CSS only.\n" +
"- The design must be simple, clean, modern, and responsive.\n" +
"- The output must be directly renderable inside an iframe without breaking.\n\n" +
"- On mobile, the hamburger menu will be show. \n\n" +
"- On desktop, the normal menu will be show. \n\n" +
"- Mobile users will see a popup message. \n\n"  +
"Return only the final combined HTML code. Nothing else."

useEffect(()=>{
    if(!value)  return;

    async function Api(){
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: promt
        });
        setText(response.text)
        
    }
    Api()
},[value])



    return(
        <div>     
        </div>
    )
}


export default GeminiApi;
