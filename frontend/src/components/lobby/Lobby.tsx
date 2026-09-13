import { playUiClick } from "../../audio/uiSounds";

type LobbyProps = {
  onNavigate: (destination: string) => void;
};

export function Lobby({ onNavigate }: LobbyProps) {
  const handleNavigate = (destination: string) => {
    playUiClick();
    onNavigate(destination);
  };

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
          onClick={() => handleNavigate("about")}
          aria-label="Open About Me"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--projects"
          onClick={() => handleNavigate("projects")}
          aria-label="Open Projects"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--skills"
          onClick={() => handleNavigate("skills")}
          aria-label="Open Skills"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--ai-lab"
          onClick={() => handleNavigate("ai-lab")}
          aria-label="Open AI Lab"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--journey"
          onClick={() => handleNavigate("journey")}
          aria-label="Open Developer Journey"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--contact"
          onClick={() => handleNavigate("contact")}
          aria-label="Open Contact"
        />

        <button
          type="button"
          className="lobby__hotspot lobby__hotspot--easter-egg"
          onClick={() => handleNavigate("easter-egg")}
          aria-label="Discover secret interaction"
        />
      </div>
    </main>
  );
}