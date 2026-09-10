import { briefingItems } from "../../data/landing";
import { SurfacePanel } from "../ui/SurfacePanel";

export function PortfolioBriefing() {
  return (
    <SurfacePanel className="portfolio-briefing" aria-label="Portfolio focus areas">
      {briefingItems.map(([title, subtitle], index) => (
        <div className="briefing-item" key={title}>
          {index > 0 && <span className="briefing-divider" aria-hidden="true" />}
          <div>
            <strong>{title}</strong>
            <span>{subtitle}</span>
          </div>
        </div>
      ))}
    </SurfacePanel>
  );
}
