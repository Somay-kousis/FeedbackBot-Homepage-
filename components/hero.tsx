"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { DashboardPreview } from "./dashboard-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Now with AI-powered insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-foreground text-balance lg:text-7xl"
          >
            Turn customer feedback into <span className="text-primary">actionable insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-lg leading-relaxed text-muted-foreground text-balance lg:text-xl"
          >
            Stop drowning in feedback. Our AI agent categorizes thousands of entries by urgency and impact, highlights
            top pain points, and delivers a prioritized action list to your team every week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-12 bg-accent text-accent-foreground px-8 text-base font-semibold hover:bg-accent/90"
              asChild
            >
              <Link href="/signup">Start free trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold bg-transparent" asChild>
              <Link href="#demo">Watch demo</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-16 max-w-5xl lg:mt-24"
        >
          <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl">
            <div className="overflow-hidden rounded-xl bg-muted">
              <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <div className="ml-4 flex-1 rounded bg-muted px-3 py-1 text-xs text-muted-foreground">
                  feedbackiq.app/dashboard
                </div>
              </div>
              <div className="p-8">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// function DashboardPreview() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-foreground">Weekly Feedback Summary</h3>
//           <p className="text-sm text-muted-foreground">1,247 entries analyzed</p>
//         </div>
//         <div className="flex gap-2">
//           <div className="rounded-lg bg-accent/10 px-4 py-2">
//             <div className="text-xs font-medium text-muted-foreground">High Priority</div>
//             <div className="text-2xl font-bold text-accent">23</div>
//           </div>
//           <div className="rounded-lg bg-primary/10 px-4 py-2">
//             <div className="text-xs font-medium text-muted-foreground">Medium</div>
//             <div className="text-2xl font-bold text-primary">67</div>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-3">
//         {[
//           {
//             title: "Mobile app crashes on iOS 17",
//             impact: "High",
//             mentions: 89,
//             trend: "+34%",
//           },
//           {
//             title: "Export feature missing CSV format",
//             impact: "Medium",
//             mentions: 56,
//             trend: "+12%",
//           },
//           {
//             title: "Dark mode color contrast issues",
//             impact: "Medium",
//             mentions: 43,
//             trend: "+8%",
//           },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
//             className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
//           >
//             <div className="flex items-center gap-4">
//               <div className={`h-2 w-2 rounded-full ${item.impact === "High" ? "bg-accent" : "bg-primary"}`} />
//               <div>
//                 <div className="font-medium text-foreground">{item.title}</div>
//                 <div className="text-sm text-muted-foreground">
//                   {item.mentions} mentions · {item.trend} this week
//                 </div>
//               </div>
//             </div>
//             <div
//               className={`rounded-full px-3 py-1 text-xs font-medium ${
//                 item.impact === "High" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
//               }`}
//             >
//               {item.impact}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }
