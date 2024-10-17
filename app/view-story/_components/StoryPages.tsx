import { SvgIcons } from '@/public/svg'
import React, { useState } from 'react'

export const StoryPages = ({ storyChapter }: any) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  )

  const playSpeech = (text: string) => {
    if (synth && utterance) {
      if (isPlaying) {
        synth.pause()
        setIsPlaying(false)
      } else {
        synth.resume()
        setIsPlaying(true)
      }
    } else {
      const newSynth = window?.speechSynthesis
      const newUtterance = new SpeechSynthesisUtterance(text)
      newSynth.speak(newUtterance)
      setSynth(newSynth)
      setUtterance(newUtterance)
      setIsPlaying(true)
    }
  }

  return (
    <div className=''>
      <h2 className='text-2xl font-bold flex justify-between text-hallowennorange'>
        {storyChapter?.chapter_title}
        <span
          onClick={() => playSpeech(storyChapter?.description)}
          className='text-3xl cursor-pointer'
        >
          {isPlaying ? SvgIcons.pauseIcon : SvgIcons.playIcon}
        </span>
      </h2>
      <p className='text-xl p-10 mt-3 rounded-lg bg-slate-200'>
        {storyChapter?.description}
      </p>
    </div>
  )
}
