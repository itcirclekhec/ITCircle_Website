"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DataWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  size?: "sm" | "md" | "lg"
}

const DataWidget = React.forwardRef<HTMLDivElement, DataWidgetProps>(
  ({ className, label, value, icon, trend, trendValue, size = "md", ...props }, ref) => {
    const sizeStyles = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    }

    const valueSizes = {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl"
    }

    const getTrendColor = (trend?: "up" | "down" | "neutral") => {
      switch (trend) {
        case "up":
          return "text-green-400"
        case "down":
          return "text-red-400"
        default:
          return "text-muted-foreground"
      }
    }

    const getTrendIcon = (trend?: "up" | "down" | "neutral") => {
      switch (trend) {
        case "up":
          return "↗"
        case "down":
          return "↘"
        default:
          return "→"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-xl transition-all duration-300 hover:scale-105 glow-hover",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
          {icon && (
            <div className="text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        
        <div className="flex items-baseline space-x-2">
          <span className={cn(
            "font-bold tabular-nums text-foreground",
            valueSizes[size]
          )}>
            {value}
          </span>
          
          {trendValue && (
            <span className={cn("text-sm font-medium", getTrendColor(trend))}>
              {getTrendIcon(trend)} {trendValue}
            </span>
          )}
        </div>
      </div>
    )
  }
)
DataWidget.displayName = "DataWidget"

interface ProgressWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: number
  max?: number
  format?: (value: number) => string
}

const ProgressWidget = React.forwardRef<HTMLDivElement, ProgressWidgetProps>(
  ({ className, label, value, max = 100, format = (v) => `${v}%`, ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100)
    
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105 glow-hover",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
          <span className="text-2xl font-bold text-foreground tabular-nums">
            {format(value)}
          </span>
        </div>
        
        <div className="w-full bg-muted/30 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
ProgressWidget.displayName = "ProgressWidget"

interface SparklineProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[]
  label: string
  color?: string
}

const Sparkline = React.forwardRef<HTMLDivElement, SparklineProps>(
  ({ className, data, label, color = "rgba(139, 92, 246, 0.8)", ...props }, ref) => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1

    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    }).join(' ')

    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105 glow-hover",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
          <span className="text-2xl font-bold text-foreground tabular-nums">
            {data[data.length - 1]}
          </span>
        </div>
        
        <div className="w-full h-16">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 100 100" 
            className="overflow-visible"
          >
            <defs>
              <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: color, stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: color, stopOpacity: 0}} />
              </linearGradient>
            </defs>
            
            <polyline
              fill="none"
              stroke={color}
              strokeWidth="2"
              points={points}
              className="transition-all duration-300"
            />
            
            <polyline
              fill="url(#sparklineGradient)"
              stroke="none"
              points={`0,100 ${points} 100,100`}
              className="transition-all duration-300"
            />
            
            {/* Dot for last point */}
            <circle
              cx={((data.length - 1) / (data.length - 1)) * 100}
              cy={100 - ((data[data.length - 1] - min) / range) * 100}
              r="2"
              fill={color}
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>
    )
  }
)
Sparkline.displayName = "Sparkline"

export { DataWidget, ProgressWidget, Sparkline }