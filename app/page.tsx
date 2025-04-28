import { SlateHomepage } from "@/components/slate-homepage"
import { RacingEdition } from "@/components/racing-edition"
import { InteriorShowcase } from "@/components/interior-showcase"
import { VehicleLineup } from "@/components/vehicle-lineup"
import { ArtEdition } from "@/components/art-edition"
import { ScrollPromo } from "@/components/scroll-promo"

export default function Home() {
  return (
    <>
      <SlateHomepage />
      <RacingEdition />
      <InteriorShowcase />
      <VehicleLineup />
      <ArtEdition />
      <ScrollPromo />
    </>
  )
}
