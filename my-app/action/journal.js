"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server"
import { getPixabayImage } from "./public";
import { revalidatePath } from "next/cache";

export async function createJournalEntry(data) {
    try {
        const { userId } = await auth();
        if (!userId) {
            throw new Error("User not authenticated");
        }

        const user = db.user.findUnique({
            where: { clerkuId: userId }
        })
        if (!user) {
            throw new Error("User not found")
        }

        const mood = MOODS[data.mood.toUpperCase()];
        if (!mood) {
            throw new Error("Invalid mood")

        }

        const moodImageUrl = await getPixabayImage(data.moodQuery)

        const entry = await db.entry.create({
            data: {
                title: data.title,
                content: data.content,
                mood: mood.id,
                moodScore: mood.score,
                moodImageUrl,
                userId: user.id,
                collectionId: data.collectionId || null
            }
        })

        await db.draft.deleteMany({
            where: { userId: user.id }
        })

        revalidatePath('/dashboard')
        return journal;
    } catch (error) {
        throw new Error(error.message)
    }
}