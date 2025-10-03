"use client"

import { motion } from "framer-motion"

export function DashboardPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Weekly Feedback Summary</h3>
          <p className="text-sm text-muted-foreground">1,247 entries analyzed</p>
        </div>
        <div className="flex gap-2">
          <div className="rounded-lg bg-accent/10 px-4 py-2">
            <div className="text-xs font-medium text-muted-foreground">High Priority</div>
            <div className="text-2xl font-bold text-accent">23</div>
          </div>
          <div className="rounded-lg bg-primary/10 px-4 py-2">
            <div className="text-xs font-medium text-muted-foreground">Medium</div>
            <div className="text-2xl font-bold text-primary">67</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {[
          {
            title: "Mobile app crashes on iOS 17",
            impact: "High",
            mentions: 89,
            trend: "+34%",
          },
          {
            title: "Export feature missing CSV format",
            impact: "Medium",
            mentions: 56,
            trend: "+12%",
          },
          {
            title: "Dark mode color contrast issues",
            impact: "Medium",
            mentions: 43,
            trend: "+8%",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
            className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
          >
            <div className="flex items-center gap-4">
              <div className={`h-2 w-2 rounded-full ${item.impact === "High" ? "bg-accent" : "bg-primary"}`} />
              <div>
                <div className="font-medium text-foreground">{item.title}</div>
                <div className="text-sm text-muted-foreground">
                  {item.mentions} mentions · {item.trend} this week
                </div>
              </div>
            </div>
            <div
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                item.impact === "High" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
              }`}
            >
              {item.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
