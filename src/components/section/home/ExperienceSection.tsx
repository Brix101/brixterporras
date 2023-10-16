import { SectionShell } from "@/components/shells/shell"
import { Separator } from "@/components/ui/separator"

function ExperienceSection() {
  return (
    <SectionShell id="section-experience" className="bg-background-2">
      <div className="container min-h-screen space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Separator className="bg-primary" />
      </div>
    </SectionShell>
  )
}

export default ExperienceSection
