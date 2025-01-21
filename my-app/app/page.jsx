import TestimonialCarousel from "@/components/testimonial-carousel";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart2, Book, Calendar, ChevronRight, FileText, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import faqs from '../data/faqs.json'
import { getDailyPrompts } from "@/action/public";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default async function Home() {
  const advice = await getDailyPrompts()


  return (
    <div>
      <div className="relative container mx-auto px-4 pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title">
            Welcome to Day One: Your Personal Journal, Reimagined
          </h1>
          <p className="text-lg md:text-xl text-orange-800 mb-8">
            Capture Your Thoughts, Embrace Your Journey, One Day at a Time.
          </p>
        </div>
        <div className="relative pt-4">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl p-4 max-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span cˀlassName="text-orange-900 font-medium">
                  Today&rsquo;s Entry
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-200" />
                <div className="h-3 w-3 rounded-full bg-orange-300" />
                <div className="h-3 w-3 rounded-full bg-orange-400" />
              </div>
            </div>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">
                {advice ? advice : "Suru Kro bhai"}
              </h3>
              <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-orange-100 rounded w-full" />
              <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href='/dasboard'>
            <Button variant="journal" className='px-8 py-6 rounded-full flex items-center gap-2'>
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href='#features'>
            <Button variant="outline" className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100">
              Learn More
            </Button>
          </Link>
        </div>

        <section id="features" className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className='shadow-lg'>
              <CardContent className='p-6'>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-orange-700">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
        <div className="space-y-24 mt-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 ">
            <div className="space-y-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-900">
                Rich Text Editor
              </h3>
              <p className="text-lg text-orange-700">
                Express yourself fully with our powerful editor featuring:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-400" />
                  <span>Format text with ease</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-400" />
                  <span>Embed links</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
              {/* Editor Preview */}
              <div className="flex gap-2 mb-6">
                <div className="h-8 w-8 rounded bg-orange-100"></div>
                <div className="h-8 w-8 rounded bg-orange-100"></div>
                <div className="h-8 w-8 rounded bg-orange-100"></div>
              </div>
              <div className="h-4 bg-orange-50 rounded w-3/4"></div>
              <div className="h-4 bg-orange-50 rounded w-full"></div>
              <div className="h-4 bg-orange-50 rounded w-2/3"></div>
              <div className="h-4 bg-orange-50 rounded w-1/3"></div>
            </div>
          </div>
          <div className="space-y-24 mt-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 ">
              <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                {/* Editor Preview */}
                <div className="h-40 bg-gradient-to-t from-orange-100 to-orange-50 rounded-lg"></div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-orange-50 rounded"></div>
                  <div className="h-4 w-16 bg-orange-50 rounded"></div>
                  <div className="h-4 w-16 bg-orange-50 rounded"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">
                  Mood Analytics
                </h3>
                <p className="text-lg text-orange-700">
                  Track your emotional journey with powerful analytics:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                    <span>Visual mood trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                    <span>Pattern recognition</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <TestimonialCarousel />

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full mx-auto">
            {faqs.map((faq, index) => {
              return (
                <AccordionItem value={`item-${index}`} key={faq.q}>
                  <AccordionTrigger className='text-orange-900 text-lg'>{faq.q}</AccordionTrigger>
                  <AccordionContent className='text-orange-700'>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              )
            })}

          </Accordion>
        </div>
        <div className="mt-24">
          <Card className='bg-gradient-to-r from-orange-100 to-amber-100'>
            <CardContent className='p-12 text-center'>
              <h2 className="text-3xl font-bold text-orange-900 mb-6">
                Start Reflect-ing Your Journay Today
              </h2>
              <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">Join thousands of writers who have already discovered the power of
                digital journaling.</p>
              <Link href='/dashboard'>
                <Button size='lg' variant='journal' className='animate-bounce'>
                  Get Started For Free <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
