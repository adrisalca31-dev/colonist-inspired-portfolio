import { playUiClick } from "../../audio/uiSounds";

type LobbyProps = {
  onNavigate: (destination: string) => void;
};

export function Lobby({ onNavigate }: LobbyProps) {
  return (
    <main className="lobby">
      <img
        className="lobby__background"
        src="/lobby-background.png"
        alt=""
        aria-hidden="true"
      />

      <div className="lobby__hotspots">
        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--about"
          onClick={() => onNavigate("about")}
          aria-label="Open About Me"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--projects"
          onClick={() => {
            playUiClick();
            onNavigate("projects");
             }}
            aria-label="Open Projects"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--skills"
          onClick={() => onNavigate("skills")}
          aria-label="Open Skills"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--ai-lab"
          onClick={() => onNavigate("ai-lab")}
          aria-label="Open AI Lab"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--journey"
          onClick={() => onNavigate("journey")}
          aria-label="Open Developer Journey"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--contact"
          onClick={() => onNavigate("contact")}
          aria-label="Open Contact"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--easter-egg"
          onClick={() => onNavigate("easter-egg")}
          aria-label="Discover secret interaction"
        />
      </div>
    </main>
  );
}
