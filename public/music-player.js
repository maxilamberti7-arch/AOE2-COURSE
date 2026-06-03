/**
 * music-player.js
 * Widget de música flotante usando YouTube IFrame API.
 * Video: https://www.youtube.com/watch?v=-sLRtsRazDQ (AoE2 OST)
 * El usuario debe hacer click para iniciar (política de autoplay del browser).
 */

(function () {
  const VIDEO_ID  = '-sLRtsRazDQ';
  const START_SEC = 203; // timestamp del link

  // ── Crear estilos ──────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #aoe2-music-widget {
      position: fixed;
      bottom: 1.5rem;
      left: 1.5rem;
      z-index: 9998;
      display: flex;
      flex-direction: column;
      gap: 0;
      font-family: 'Inter', system-ui, sans-serif;
      transition: transform 0.3s ease;
    }

    #aoe2-music-widget.is-minimized #aoe2-music-panel {
      display: none;
    }

    #aoe2-music-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.9rem;
      background: #0f0f0f;
      border: 1px solid rgba(212,160,23,0.4);
      border-radius: 20px;
      cursor: pointer;
      color: #d4a017;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      transition: background 0.2s, border-color 0.2s;
      align-self: flex-start;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5);
    }

    #aoe2-music-toggle:hover {
      background: #1a1a1a;
      border-color: #d4a017;
    }

    #aoe2-music-note {
      font-size: 0.9rem;
      animation: music-pulse 1.5s ease-in-out infinite;
    }

    @keyframes music-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.6; transform: scale(0.9); }
    }

    #aoe2-music-widget.is-playing #aoe2-music-note {
      animation: music-spin 3s linear infinite;
    }

    @keyframes music-spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    #aoe2-music-panel {
      background: #0f0f0f;
      border: 1px solid rgba(212,160,23,0.3);
      border-radius: 12px;
      padding: 0.9rem 1rem;
      margin-bottom: 0.5rem;
      width: 240px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    }

    #aoe2-music-title {
      font-size: 0.72rem;
      color: #a1a1a1;
      margin-bottom: 0.6rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #aoe2-music-title strong {
      color: #d4a017;
      display: block;
      font-size: 0.78rem;
    }

    #aoe2-music-controls {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    #aoe2-music-play {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #d4a017;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s, transform 0.15s;
    }

    #aoe2-music-play:hover {
      background: #f0c040;
      transform: scale(1.08);
    }

    #aoe2-music-play svg {
      fill: #0a0a0a;
    }

    #aoe2-music-volume {
      flex: 1;
      -webkit-appearance: none;
      appearance: none;
      height: 3px;
      background: #2a2a2a;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    #aoe2-music-volume::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #d4a017;
      cursor: pointer;
    }

    #aoe2-music-volume::-moz-range-thumb {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #d4a017;
      border: none;
      cursor: pointer;
    }

    #aoe2-music-vol-icon {
      color: #555;
      font-size: 0.85rem;
      cursor: pointer;
      transition: color 0.2s;
    }

    #aoe2-music-vol-icon:hover { color: #d4a017; }

    /* El iframe de YouTube debe ser visible (ToS) pero puede ser pequeño */
    #aoe2-yt-container {
      width: 0;
      height: 0;
      overflow: hidden;
      position: absolute;
    }

    #aoe2-music-credit {
      font-size: 0.62rem;
      color: #333;
      margin-top: 0.6rem;
    }

    #aoe2-music-credit a {
      color: #444;
      text-decoration: none;
    }
    #aoe2-music-credit a:hover { color: #d4a017; }
  `;
  document.head.appendChild(style);

  // ── Crear HTML del widget ──────────────────────────────────
  const widget = document.createElement('div');
  widget.id = 'aoe2-music-widget';
  widget.classList.add('is-minimized');
  widget.innerHTML = `
    <div id="aoe2-music-panel">
      <div id="aoe2-music-title">
        <strong>Age of Empires II OST</strong>
        Música ambiental del juego
      </div>
      <div id="aoe2-music-controls">
        <button id="aoe2-music-play" aria-label="Reproducir / Pausar música">
          <svg id="aoe2-icon-play" width="14" height="14" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          <svg id="aoe2-icon-pause" width="14" height="14" viewBox="0 0 24 24" style="display:none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        </button>
        <span id="aoe2-music-vol-icon" title="Silenciar">🔊</span>
        <input type="range" id="aoe2-music-volume" min="0" max="100" value="40" aria-label="Volumen">
      </div>
      <div id="aoe2-music-credit">
        🎵 <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener">Ver en YouTube</a>
      </div>
      <div id="aoe2-yt-container"></div>
    </div>
    <button id="aoe2-music-toggle" aria-label="Abrir reproductor de música">
      <span id="aoe2-music-note">🎵</span>
      <span id="aoe2-music-label">Música</span>
    </button>
  `;
  document.body.appendChild(widget);

  // ── Estado ─────────────────────────────────────────────────
  let player = null;
  let isPlaying = false;
  let isMuted = false;
  let playerReady = false;

  const playBtn    = document.getElementById('aoe2-music-play');
  const iconPlay   = document.getElementById('aoe2-icon-play');
  const iconPause  = document.getElementById('aoe2-icon-pause');
  const volumeSlider = document.getElementById('aoe2-music-volume');
  const volIcon    = document.getElementById('aoe2-music-vol-icon');
  const toggleBtn  = document.getElementById('aoe2-music-toggle');
  const label      = document.getElementById('aoe2-music-label');

  // ── Toggle panel ───────────────────────────────────────────
  toggleBtn.addEventListener('click', () => {
    const isMin = widget.classList.toggle('is-minimized');
    label.textContent = isMin ? 'Música' : 'Cerrar';

    // Primera vez que abre: cargar el player
    if (!isMin && !player) loadYouTubeAPI();
  });

  // ── Cargar YouTube IFrame API ──────────────────────────────
  function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = createPlayer;
  }

  function createPlayer() {
    const container = document.getElementById('aoe2-yt-container');
    const div = document.createElement('div');
    div.id = 'aoe2-yt-player';
    container.appendChild(div);

    player = new YT.Player('aoe2-yt-player', {
      videoId: VIDEO_ID,
      playerVars: {
        start:       START_SEC,
        autoplay:    0,
        controls:    0,
        loop:        1,
        playlist:    VIDEO_ID,
        playsinline: 1,
        modestbranding: 1,
      },
      events: {
        onReady: (e) => {
          playerReady = true;
          e.target.setVolume(parseInt(volumeSlider.value));
          // Autoplay al abrir el panel por primera vez
          e.target.playVideo();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.PLAYING) {
            setPlaying(true);
          } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
            setPlaying(false);
          }
        },
      },
    });
  }

  // ── Play / Pause ───────────────────────────────────────────
  playBtn.addEventListener('click', () => {
    if (!player || !playerReady) {
      loadYouTubeAPI();
      return;
    }
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  function setPlaying(state) {
    isPlaying = state;
    iconPlay.style.display  = state ? 'none'  : 'block';
    iconPause.style.display = state ? 'block' : 'none';
    widget.classList.toggle('is-playing', state);
  }

  // ── Volumen ────────────────────────────────────────────────
  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value);
    if (player && playerReady) player.setVolume(vol);
    if (vol === 0) { isMuted = true; volIcon.textContent = '🔇'; }
    else           { isMuted = false; volIcon.textContent = '🔊'; }
  });

  volIcon.addEventListener('click', () => {
    if (!player || !playerReady) return;
    isMuted = !isMuted;
    if (isMuted) {
      player.mute();
      volIcon.textContent = '🔇';
      volumeSlider.value = 0;
    } else {
      player.unMute();
      volIcon.textContent = '🔊';
      volumeSlider.value = 40;
      player.setVolume(40);
    }
  });

})();
