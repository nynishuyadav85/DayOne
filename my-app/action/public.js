import { unstable_cache } from "next/cache";

export async function getPixabayImage(query) {
    try {
        const res = await fetch(`https://pixabay.com/api/?q=${query}&key=${process.env.PIXABAY_API_KEY}&min_width=400&min_height=400&image_type=illustration&category=feelings`);
        const data = await res.json();
        return data.hits[0]?.largeImageURL || null;
    } catch (error) {
        console.log("Error fetching Pixabay image", error);
        return null;
    }
}

export const getDailyPrompts = unstable_cache(
    async () => {
        try {
            const res = await fetch("https://api.adviceslip.com/advice", {
                cache: "no-store"
            })
            const data = await res.json();
            return data.slip.advice
        } catch (error) {
            return {
                success: false,
                data: "What's on Your Mind"
            }
        }
    }, ["daily-prompt"],
    {
        revalidate: 86400,
        tags: ["daily-prompt"],
    }
)