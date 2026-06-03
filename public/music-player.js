/**
 * music-player.js  v2
 * Widget de música flotante con persistencia entre páginas via sessionStorage.
 * Cada vez que el usuario navega, el player se reinicia automáticamente
 * en el punto donde lo dejó.
 */
(function () {
  const VIDEO_ID  = '-sLRtsRazDQ';
  const START_SEC = 203;

  // ── Restaurar estado guardado ──────────────────────────────
  const SS = {
    get: k => sessionStorage.getItem('aoe2-music-' + k),
    set: (k, v) => sessionStorage.setItem('aoe2-music-' + k, v),
  };

  const wasPlaying = SS.get('playing') === '1';
  const wasOpen    = SS.get('open')    === '1';
  const savedVol   = parseInt(SS.get('vol')  || '40');
  const savedTime  = parseInt(SS.get('time') || String(START_SEC));

  // ── Estilos ────────────────────────────────────────────────
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
    }
    #aoe2-music-widget.is-minimized #aoe2-music-panel { display: none; }

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
      align-self: flex-start;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5);
      transition: background 0.2s, border-color 0.2s;
    }
    #aoe2-music-toggle:hover { background: #1a1a1a; border-color: #d4a017; }

    #aoe2-music-note { font-size: 0.9rem; }
    #aoe2-music-widget:not(.is-playing) #aoe2-music-note {
      animation: note-pulse 2s ease-in-out infinite;
    }
    #aoe2-music-widget.is-playing #aoe2-music-note {
      animation: note-spin 4s linear infinite;
    }
    @keyframes note-pulse {
      0%,100% { opacity:1; } 50% { opacity:0.4; }
    }
    @keyframes note-spin {
      from { transform: rotate(0deg); } to { transform: rotate(360deg); }
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
      margin-bottom: 0.7rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #aoe2-music-title strong { color: #d4a017; display: block; font-size: 0.78rem; }

    #aoe2-music-controls {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    #aoe2-music-play {
      width: 34px; height: 34px;
      border-radius: 50%;
      background: #d4a017;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s, transform 0.15s;
    }
    #aoe2-music-play:hover { background: #f0c040; transform: scale(1.08); }
    #aoe2-music-play svg { fill: #0a0a0a; }

    #aoe2-music-volume {
      flex: 1; -webkit-appearance: none; appearance: none;
      height: 3px; background: #2a2a2a; border-radius: 2px;
      outline: none; cursor: pointer;
    }
    #aoe2-music-volume::-webkit-slider-thumb {
      -webkit-appearance: none; width: 12px; height: 12px;
      border-radius: 50%; background: #d4a017; cursor: pointer;
    }
    #aoe2-music-volume::-moz-range-thumb {
      width: 12px; height: 12px; border-radius: 50%;
      background: #d4a017; border: none; cursor: pointer;
    }

    #aoe2-music-vol-icon {
      color: #555; font-size: 0.85rem; cursor: pointer;
      transition: color 0.2s; user-select: none;
    }
    #aoe2-music-vol-icon:hover { color: #d4a017; }

    #aoe2-music-status {
      font-size: 0.65rem;
      color: #444;
      margin-top: 0.5rem;
      min-height: 0.8rem;
    }
    #aoe2-music-status.ready { color: #4ade80; }

    #aoe2-music-credit {
      font-size: 0.62rem; color: #333; margin-top: 0.4rem;
    }
    #aoe2-music-credit a { color: #444; text-decoration: none; }
    #aoe2-music-credit a:hover { color: #d4a017; }

    /* iframe oculto pero presente (requerido por ToS de YouTube) */
    #aoe2-yt-container {
      position: absolute; width: 1px; height: 1px;
      overflow: hidden; pointer-events: none;
      bottom: 0; left: 0;
    }
  `;
  document.head.appendChild(style);

  // ── HTML del widget ────────────────────────────────────────
  const widget = document.createElement('div');
  widget.id = 'aoe2-music-widget';
  if (!wasOpen) widget.classList.add('is-minimized');

  widget.innerHTML = `
    <div id="aoe2-music-panel">
      <div id="aoe2-music-title">
        <strong>Age of Empires II OST</strong>
        Música ambiental del juego
      </div>
      <div id="aoe2-music-controls">
        <button id="aoe2-music-play" aria-label="Reproducir / Pausar música">
          <svg id="aoe2-icon-play"  width="13" height="13" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          <svg id="aoe2-icon-pause" width="13" height="13" viewBox="0 0 24 24" style="display:none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        </button>
        <span id="aoe2-music-vol-icon" title="Silenciar / Activar">🔊</span>
        <input type="range" id="aoe2-music-volume" min="0" max="100" value="${savedVol}" aria-label="Volumen">
      </div>
      <div id="aoe2-music-status">Cargando…</div>
      <div id="aoe2-music-credit">
        🎵 <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener">Ver en YouTube</a>
      </div>
      <div id="aoe2-yt-container"></div>
    </div>
    <button id="aoe2-music-toggle" aria-label="Abrir / cerrar reproductor de música">
      <span id="aoe2-music-note">🎵</span>
      <span id="aoe2-music-label">${wasOpen ? 'Cerrar' : 'Música'}</span>
    </button>
  `;
  document.body.appendChild(widget);

  // ── Referencias ────────────────────────────────────────────
  const playBtn      = document.getElementById('aoe2-music-play');
  const iconPlay     = document.getElementById('aoe2-icon-play');
  const iconPause    = document.getElementById('aoe2-icon-pause');
  const volumeSlider = document.getElementById('aoe2-music-volume');
  const volIcon      = document.getElementById('aoe2-music-vol-icon');
  const toggleBtn    = document.getElementById('aoe2-music-toggle');
  const labelEl      = document.getElementById('aoe2-music-label');
  const statusEl     = document.getElementById('aoe2-music-status');

  let player      = null;
  let isPlaying   = false;
  let isMuted     = false;
  let playerReady = false;

  // ── Guardar estado antes de salir de la página ─────────────
  function saveState() {
    SS.set('playing', isPlaying ? '1' : '0');
    SS.set('vol',     volumeSlider.value);
    SS.set('open',    widget.classList.contains('is-minimized') ? '0' : '1');
    if (player && playerReady) {
      try { SS.set('time', Math.floor(player.getCurrentTime())); } catch {}
    }
  }

  window.addEventListener('beforeunload', saveState);
  // Visibilidad (cambio de pestaña del browser)
  document.addEventListener('visibilitychange', saveState);

  // ── Toggle panel ───────────────────────────────────────────
  toggleBtn.addEventListener('click', () => {
    const isMin = widget.classList.toggle('is-minimized');
    labelEl.textContent = isMin ? 'Música' : 'Cerrar';
    SS.set('open', isMin ? '0' : '1');
    if (!isMin && !player) loadAPI();
  });

  // ── Cargar YouTube API ─────────────────────────────────────
  function loadAPI() {
    statusEl.textContent = 'Conectando…';
    if (window.YT && window.YT.Player) { initPlayer(); return; }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = initPlayer;
  }

  function initPlayer() {
    const container = document.getElementById('aoe2-yt-container');
    const div = document.createElement('div');
    div.id = 'aoe2-yt-player';
    container.appendChild(div);

    player = new YT.Player('aoe2-yt-player', {
      videoId: VIDEO_ID,
      playerVars: {
        start:          savedTime,
        autoplay:       0,
        controls:       0,
        loop:           1,
        playlist:       VIDEO_ID,
        playsinline:    1,
        modestbranding: 1,
        rel:            0,
      },
      events: {
        onReady(e) {
          playerReady = true;
          e.target.setVolume(parseInt(volumeSlider.value));
          statusEl.textContent = '▶ Listo';
          statusEl.classList.add('ready');
          if (wasPlaying) {
            e.target.playVideo();
          }
        },
        onStateChange(e) {
          if (e.data === YT.PlayerState.PLAYING) {
            setPlayState(true);
            statusEl.textContent = '▶ Reproduciendo';
          } else if (e.data === YT.PlayerState.PAUSED) {
            setPlayState(false);
            statusEl.textContent = '⏸ Pausado';
          } else if (e.data === YT.PlayerState.BUFFERING) {
            statusEl.textContent = '⏳ Cargando…';
          } else if (e.data === YT.PlayerState.ENDED) {
            setPlayState(false);
          }
        },
        onError() {
          statusEl.textContent = '⚠ Error al cargar';
        }
      },
    });
  }

  // ── Si estaba reproduciendo, cargar API inmediatamente ─────
  // (sin esperar que el usuario abra el panel)
  if (wasPlaying || wasOpen) {
    if (wasOpen) widget.classList.remove('is-minimized');
    loadAPI();
  }

  // ── Play / Pause ───────────────────────────────────────────
  playBtn.addEventListener('click', () => {
    if (!player || !playerReady) {
      widget.classList.remove('is-minimized');
      labelEl.textContent = 'Cerrar';
      SS.set('open', '1');
      loadAPI();
      return;
    }
    isPlaying ? player.pauseVideo() : player.playVideo();
  });

  function setPlayState(state) {
    isPlaying = state;
    iconPlay.style.display  = state ? 'none'  : 'block';
    iconPause.style.display = state ? 'block' : 'none';
    widget.classList.toggle('is-playing', state);
    SS.set('playing', state ? '1' : '0');
  }

  // ── Volumen ────────────────────────────────────────────────
  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value);
    SS.set('vol', vol);
    if (!player || !playerReady) return;
    if (vol === 0) { player.mute(); isMuted = true; volIcon.textContent = '🔇'; }
    else { player.unMute(); isMuted = false; volIcon.textContent = '🔊'; player.setVolume(vol); }
  });

  volIcon.addEventListener('click', () => {
    if (!player || !playerReady) return;
    isMuted = !isMuted;
    if (isMuted) {
      player.mute();
      volIcon.textContent = '🔇';
      volumeSlider.value = '0';
    } else {
      player.unMute();
      volIcon.textContent = '🔊';
      const v = SS.get('vol') || '40';
      volumeSlider.value = v;
      player.setVolume(parseInt(v));
    }
  });

})();
