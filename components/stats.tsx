"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "10,000+", label: "Feedback entries processed daily" },
  { value: "87%", label: "Reduction in triage time" },
  { value: "3.5x", label: "Faster feature prioritization" },
  { value: "500+", label: "Product teams trust us" },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="border-y border-border bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 font-sans text-4xl font-bold text-foreground lg:text-5xl">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
