"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description: "Integrate with your existing tools like Intercom, Typeform, Twitter, and more in minutes.",
  },
  {
    number: "02",
    title: "AI analyzes feedback",
    description: "Our agent processes thousands of entries, categorizing by urgency, impact, and sentiment.",
  },
  {
    number: "03",
    title: "Get prioritized insights",
    description:
      "Receive weekly digests with top pain points and actionable recommendations via Notion, Slack, or email.",
  },
  {
    number: "04",
    title: "Build what matters",
    description: "Make data-driven decisions and ship features your customers actually want.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 font-sans text-4xl font-bold text-foreground text-balance lg:text-5xl">How it works</h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-balance">
            From chaos to clarity in four simple steps
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-8"
              >
                {i < steps.length - 1 && <div className="absolute left-8 top-20 h-full w-px bg-border" />}
                <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-accent-foreground">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
