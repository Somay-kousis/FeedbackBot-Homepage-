"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary to-accent p-12 lg:p-20"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-sans text-4xl font-bold text-primary-foreground text-balance lg:text-5xl">
              Ready to prioritize smarter?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-primary-foreground/90 text-balance">
              Join hundreds of product teams who&apos;ve transformed their feedback process. Start your free trial today—no
              credit card required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 bg-background px-8 text-base font-semibold text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/signup">Start free trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/20 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to sales</Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}