'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 5 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = `hsl(${Math.random() * 60 + 240}, 100%, 50%)`
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX
    }
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY
    }
  }
}

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(canvas))
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((particle) => {
          particle.update(canvas)
          particle.draw(ctx)
        })
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id='home'
      className='snap-start relative min-h-screen flex items-center justify-center'
    >
      <canvas ref={canvasRef} className='absolute inset-0' />
      <div className='relative z-10 text-center'>
        <Image
          src='/joshmdiaz.jpg'
          alt='Josh M. Diaz'
          width={400}
          height={400}
          className='rounded-full object-cover mx-auto mb-4 shadow-lg'
        />
        <h1 className='text-6xl font-bold mb-4 text-purple-400'>
          Josh M. Diaz
        </h1>
        <p className='text-2xl text-gray-300'>Front-End Developer</p>
      </div>
    </section>
  )
}
