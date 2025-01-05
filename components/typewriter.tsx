'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000,
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const type = () => {
      const currentWord = words[wordIndex]

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
      } else {
        setText(currentWord.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      } else {
        timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
      }
    }

    timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ])

  return (
    <span className="text-purple-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
