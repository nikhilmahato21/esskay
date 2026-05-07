import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, ...options }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

export function useCounter(target, inView, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const isFloat = String(target).includes('.')
    const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ''))
    const suffix = String(target).replace(/[0-9.]/g, '')
    let start = 0
    const step = numeric / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= numeric) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start) + suffix)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}
