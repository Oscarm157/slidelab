"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  artist?: string;
  cover?: string;
  variant?: "dark" | "light";
}

export function AudioPlayer({ src, title, artist, cover, variant = "light" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const styles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => { audio.removeEventListener("timeupdate", onTime); audio.removeEventListener("loadedmetadata", onMeta); audio.removeEventListener("ended", onEnd); };
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className={`rounded-2xl p-4 flex items-center gap-4 ${styles}`}>
      <audio ref={audioRef} src={src} preload="metadata" />

      {cover ? (
        <img src={cover} alt={title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
      ) : (
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-[28px]">music_note</span>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate">{title}</p>
        {artist && <p className="text-muted text-xs truncate">{artist}</p>}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-mono text-muted">{fmt(progress)}</span>
          <div className="flex-1 h-1.5 bg-primary/10 rounded-full cursor-pointer" onClick={seek}>
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }} />
          </div>
          <span className="text-[10px] font-mono text-muted">{fmt(duration)}</span>
        </div>
      </div>

      <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 hover:bg-primary-light transition-colors">
        <span className="material-symbols-outlined text-[22px]">{playing ? "pause" : "play_arrow"}</span>
      </button>
    </div>
  );
}
