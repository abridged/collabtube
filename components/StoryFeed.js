import React from "react";
import Stories from 'react-insta-stories';

// Not in use -- Testing react-insta-stories

// Sample images - static
const stories = [
    'https://www.gstatic.com/webp/gallery3/1.png',
    'https://www.gstatic.com/webp/gallery3/2.png',
    'https://www.gstatic.com/webp/gallery3/3.png',
    'https://www.gstatic.com/webp/gallery3/5.png',
];

export default function StoryFeed() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Stories stories={stories} />
            </div>
        </>
    )
}
