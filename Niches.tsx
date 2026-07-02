import MagneticButton from "@/components/ui/MagneticButton";
import Eyebrow from "@/components/ui/Eyebrow";

interface NicheTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  clips: string[];
}

/**
 * NicheTemplate — shared layout for the /minecraft-shorts, /singers-shorts,
 * and /coaches-shorts pages. Each route passes its own copy + clip labels.
 */
export default function NicheTemplate({ eyebrow, title, description, clips }: NicheTemplateProps) {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <Eyebrow center>{eyebrow}</Eyebrow>
        <h1 className="text-[34px] sm:text-6xl leading-[1.05] font-medium">{title}</h1>
        <p className="max-w-xl mx-auto mt-6 text-base sm:text-lg text-muted leading-relaxed">{description}</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-14">
        {clips.map((c) => (
          <div
            key={c}
            className="relative aspect-[9/16] rounded-2xl border border-glass-border bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-end p-3.5 text-[12.5px] text-muted overflow-hidden"
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white/50">▶</span>
            {c}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <MagneticButton href="https://calendly.com/forgemediabusiness/30min">Book a Strategy Call</MagneticButton>
      </div>
    </div>
  );
}
