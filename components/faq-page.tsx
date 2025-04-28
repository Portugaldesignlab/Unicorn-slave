"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageHeader } from "@/components/page-header"
import { Logo } from "@/components/logo"

const faqCategories = [
  {
    id: "general",
    name: "General",
  },
  {
    id: "vehicles",
    name: "Vehicles",
  },
  {
    id: "charging",
    name: "Charging",
  },
  {
    id: "ordering",
    name: "Ordering & Delivery",
  },
  {
    id: "warranty",
    name: "Warranty & Service",
  },
]

const faqItems = [
  {
    id: 1,
    category: "general",
    question: "What is UNICORN SLAVE?",
    answer:
      "UNICORN SLAVE is a premium electric vehicle manufacturer specializing in innovative commercial and passenger vehicles. Our mission is to provide sustainable transportation solutions without compromising on performance, utility, or style.",
  },
  {
    id: 2,
    category: "general",
    question: "Where are UNICORN vehicles manufactured?",
    answer:
      "UNICORN vehicles are designed and manufactured in our state-of-the-art facilities located in North America and Europe, with additional assembly plants in Asia to serve global markets.",
  },
  {
    id: 3,
    category: "vehicles",
    question: "What is the range of UNICORN electric vehicles?",
    answer:
      "UNICORN vehicles offer ranges between 250-500 km (155-310 miles) on a single charge, depending on the model and configuration. Our advanced battery technology and efficient powertrains ensure you have the range you need for daily use and longer journeys.",
  },
  {
    id: 4,
    category: "vehicles",
    question: "Are UNICORN vehicles all-wheel drive?",
    answer:
      "Most UNICORN models come with dual-motor all-wheel drive as standard, providing exceptional traction and performance in all conditions. Select entry-level variants are available with single-motor rear-wheel drive configurations.",
  },
  {
    id: 5,
    category: "charging",
    question: "How long does it take to charge a UNICORN vehicle?",
    answer:
      "Charging times vary by model and charging method. Using a DC fast charger, most UNICORN vehicles can charge from 20% to 80% in approximately 30 minutes. With a Level 2 home charger, a full charge typically takes 8-10 hours, making overnight charging convenient for daily use.",
  },
  {
    id: 6,
    category: "charging",
    question: "Can I install a home charger for my UNICORN?",
    answer:
      "Yes, UNICORN offers home charging solutions that can be installed by our certified electricians. Our standard Level 2 home charger provides up to 11kW of power and includes smart features for scheduling and monitoring your charging sessions.",
  },
  {
    id: 7,
    category: "ordering",
    question: "How do I order a UNICORN vehicle?",
    answer:
      "You can order your UNICORN vehicle online through our website or visit one of our showrooms. The ordering process involves selecting your model, configuration, and personalization options, followed by a deposit to secure your order.",
  },
  {
    id: 8,
    category: "ordering",
    question: "What is the current delivery timeline?",
    answer:
      "Current delivery timelines range from 4-12 weeks depending on the model, configuration, and your location. Custom orders with extensive personalization may require additional time. You'll receive regular updates on your order status throughout the process.",
  },
  {
    id: 9,
    category: "warranty",
    question: "What warranty comes with UNICORN vehicles?",
    answer:
      "UNICORN vehicles come with a comprehensive 5-year/100,000 km vehicle warranty and an 8-year/160,000 km battery and powertrain warranty. Extended warranty options are available for additional coverage and peace of mind.",
  },
  {
    id: 10,
    category: "warranty",
    question: "How do I schedule service for my UNICORN?",
    answer:
      "Service can be scheduled through the UNICORN mobile app, our website, or by contacting our customer service team. Many routine maintenance tasks can be performed by our mobile service technicians who come to your location, minimizing disruption to your schedule.",
  },
]

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqItems.filter(
    (item) =>
      (activeCategory === "all" || item.category === activeCategory) &&
      (searchQuery === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col min-h-screen bg-[#333333]">
      <PageHeader />

      <main className="flex-1 py-8 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about UNICORN vehicles, charging, ordering, and more.
            </p>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
              >
                All
              </Button>
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AnimatePresence>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccordionItem value={`item-${faq.id}`} className="border-b border-border/20">
                        <AccordionTrigger className="text-left py-4 hover:no-underline">
                          <span className="text-lg font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="py-4">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                    <p className="text-muted-foreground">No results found. Try a different search term.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Accordion>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border/20">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer support team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">CONTACT SUPPORT</Button>
                <Button variant="outline">VISIT HELP CENTER</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/20 py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-sm text-muted-foreground">© 2025 UNICORN SLAVE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
