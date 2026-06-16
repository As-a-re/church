import { Play } from 'lucide-react';

interface VideoSpotlightProps {
  youtubeId: string;
  title: string;
}

/**
 * A glass-framed 16:9 video area. Defaults to a lazy-loading
 * YouTube embed (the latest sermon), framed with decorative
 * corner accents in the signature palette.
 */
export default function VideoSpotlight({ youtubeId, title }: VideoSpotlightProps) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 h-16 w-16 rounded-tl-3xl border-t-2 border-l-2 border-dawn/60 hidden sm:block" />
      <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-ember/60 hidden sm:block" />

      <div className="glass-card overflow-hidden rounded-3xl p-2 sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-night">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex glass-strong items-center gap-3 rounded-full px-6 py-3 shadow-lg">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dawn text-night">
          <Play size={14} fill="currentColor" />
        </span>
        <span className="text-sm font-medium">{title}</span>
      </div>
    </div>
  );
}
