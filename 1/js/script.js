// ── Translations ──
const i18n = {
  en: {
    title: 'Weather Dashboard',
    search: 'Search',
    searchPlaceholder: 'Search a city...',
    recent: 'Recent:',
    units: 'Units:',
    loading: 'Fetching weather...',
    saveImage: 'Save as image',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    daylight: 'Daylight',
    humidity: 'Humidity',
    wind: 'Wind',
    visibility: 'Visibility',
    rain: 'Rain',
    hourly: 'Hourly forecast',
    forecast: '7-day forecast',
    map: 'Location map',
    feelsLike: 'Feels like',
    cityNotFound: 'City not found. Try a different name.',
    fetchError: 'Could not fetch weather. Check your connection.',
    alerts: {
      storm: '⛈️ Thunderstorm warning — stay indoors and avoid travel.',
      heavyRain: '🌧️ Heavy rain alert — expect flooding in low-lying areas.',
      snow: '❄️ Snowfall warning — roads may be slippery.',
      heat: '🌡️ Extreme heat advisory — stay hydrated and avoid direct sun.',
      cold: '🥶 Cold temperature warning — dress warmly and limit exposure.',
      wind: '💨 Strong wind advisory — secure loose objects outdoors.',
    },
  },
  fil: {
    title: 'Dashboard ng Panahon',
    search: 'Hanapin',
    searchPlaceholder: 'Maghanap ng lungsod...',
    recent: 'Nakaraang:',
    units: 'Yunit:',
    loading: 'Kinukuha ang panahon...',
    saveImage: 'I-save bilang larawan',
    sunrise: 'Pagsikat',
    sunset: 'Paglubog',
    daylight: 'Liwanag',
    humidity: 'Halumigmig',
    wind: 'Hangin',
    visibility: 'Visibility',
    rain: 'Ulan',
    hourly: 'Oras-oras na ulat',
    forecast: '7-araw na hulaan',
    map: 'Mapa ng lokasyon',
    feelsLike: 'Pakiramdam',
    cityNotFound: 'Hindi nahanap ang lungsod. Subukan ang ibang pangalan.',
    fetchError: 'Hindi makuha ang panahon. Suriin ang iyong koneksyon.',
    alerts: {
      storm: '⛈️ Babala sa bagyo — manatili sa loob at iwasan ang paglalakbay.',
      heavyRain: '🌧️ Alerto sa malakas na ulan — posibleng baha sa mababang lugar.',
      snow: '❄️ Babala sa niyebe — maaaring madulas ang kalsada.',
      heat: '🌡️ Babala sa matinding init — uminom ng maraming tubig.',
      cold: '🥶 Babala sa malamig na temperatura — magbihis nang mainit.',
      wind: '💨 Babala sa malakas na hangin — itali ang mga maluwag na bagay.',
    },
  },
  ja: {
    title: '天気ダッシュボード',
    search: '検索',
    searchPlaceholder: '都市を検索...',
    recent: '最近:',
    units: '単位:',
    loading: '天気を取得中...',
    saveImage: '画像として保存',
    sunrise: '日の出',
    sunset: '日の入り',
    daylight: '昼間',
    humidity: '湿度',
    wind: '風',
    visibility: '視界',
    rain: '雨',
    hourly: '時間ごとの予報',
    forecast: '7日間の予報',
    map: '場所の地図',
    feelsLike: '体感温度',
    cityNotFound: '都市が見つかりませんでした。別の名前を試してください。',
    fetchError: '天気を取得できませんでした。接続を確認してください。',
    alerts: {
      storm: '⛈️ 雷雨警報 — 屋内にとどまり、外出を避けてください。',
      heavyRain: '🌧️ 大雨注意報 — 低い場所では洪水の恐れがあります。',
      snow: '❄️ 降雪警報 — 道路が滑りやすくなる場合があります。',
      heat: '🌡️ 高温注意情報 — 水分補給をしっかり行ってください。',
      cold: '🥶 低温注意情報 — 暖かく着込んでください。',
      wind: '💨 強風注意報 — 屋外の物を固定してください。',
    },
  },
  es: {
    title: 'Panel del Tiempo',
    search: 'Buscar',
    searchPlaceholder: 'Buscar una ciudad...',
    recent: 'Reciente:',
    units: 'Unidades:',
    loading: 'Obteniendo el clima...',
    saveImage: 'Guardar como imagen',
    sunrise: 'Amanecer',
    sunset: 'Atardecer',
    daylight: 'Luz del día',
    humidity: 'Humedad',
    wind: 'Viento',
    visibility: 'Visibilidad',
    rain: 'Lluvia',
    hourly: 'Pronóstico por hora',
    forecast: 'Pronóstico de 7 días',
    map: 'Mapa de ubicación',
    feelsLike: 'Sensación térmica',
    cityNotFound: 'Ciudad no encontrada. Intenta con otro nombre.',
    fetchError: 'No se pudo obtener el clima. Verifica tu conexión.',
    alerts: {
      storm: '⛈️ Alerta de tormenta — quédate en casa y evita viajar.',
      heavyRain: '🌧️ Alerta de lluvia intensa — posibles inundaciones.',
      snow: '❄️ Aviso de nevada — las carreteras pueden estar resbaladizas.',
      heat: '🌡️ Aviso de calor extremo — mantente hidratado.',
      cold: '🥶 Aviso de frío extremo — abrígate bien.',
      wind: '💨 Aviso de vientos fuertes — asegura objetos al aire libre.',
    },
  },
  fr: {
    title: 'Tableau de Bord Météo',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher une ville...',
    recent: 'Récent:',
    units: 'Unités:',
    loading: 'Récupération de la météo...',
    saveImage: "Enregistrer en tant qu'image",
    sunrise: 'Lever du soleil',
    sunset: 'Coucher du soleil',
    daylight: 'Lumière du jour',
    humidity: 'Humidité',
    wind: 'Vent',
    visibility: 'Visibilité',
    rain: 'Pluie',
    hourly: 'Prévisions horaires',
    forecast: 'Prévisions sur 7 jours',
    map: 'Carte de localisation',
    feelsLike: 'Ressenti',
    cityNotFound: 'Ville introuvable. Essayez un autre nom.',
    fetchError: 'Impossible de récupérer la météo. Vérifiez votre connexion.',
    alerts: {
      storm: '⛈️ Alerte orage — restez à l\'intérieur et évitez de voyager.',
      heavyRain: '🌧️ Alerte pluie forte — risque d\'inondations.',
      snow: '❄️ Alerte neige — routes potentiellement glissantes.',
      heat: '🌡️ Alerte canicule — hydratez-vous bien.',
      cold: '🥶 Alerte froid — couvrez-vous chaudement.',
      wind: '💨 Alerte vents forts — sécurisez les objets extérieurs.',
    },
  },
};

// ── Weather code map ──
const weatherCodes = {
  0:  ['Clear sky', '☀️'],
  1:  ['Mainly clear', '🌤️'],
  2:  ['Partly cloudy', '⛅'],
  3:  ['Overcast', '☁️'],
  45: ['Foggy', '🌫️'],
  48: ['Icy fog', '🌫️'],
  51: ['Light drizzle', '🌦️'],
  53: ['Drizzle', '🌦️'],
  55: ['Heavy drizzle', '🌧️'],
  61: ['Slight rain', '🌧️'],
  63: ['Rain', '🌧️'],
  65: ['Heavy rain', '🌧️'],
  71: ['Light snow', '🌨️'],
  73: ['Snow', '❄️'],
  75: ['Heavy snow', '❄️'],
  80: ['Showers', '🌦️'],
  81: ['Rain showers', '🌧️'],
  82: ['Heavy showers', '⛈️'],
  95: ['Thunderstorm', '⛈️'],
  99: ['Heavy thunderstorm', '⛈️'],
};

// ── Theme map ──
const weatherThemes = {
  0: 'theme-sunny',  1: 'theme-sunny',
  2: 'theme-cloudy', 3: 'theme-cloudy',
  45: 'theme-foggy', 48: 'theme-foggy',
  51: 'theme-rainy', 53: 'theme-rainy', 55: 'theme-rainy',
  61: 'theme-rainy', 63: 'theme-rainy', 65: 'theme-rainy',
  71: 'theme-snowy', 73: 'theme-snowy', 75: 'theme-snowy',
  80: 'theme-rainy', 81: 'theme-rainy', 82: 'theme-stormy',
  95: 'theme-stormy', 99: 'theme-stormy',
};

// ── Alert rules ──
function getAlert(current, lang) {
  const t       = i18n[lang].alerts;
  const code    = current.weather_code;
  const temp    = current.temperature_2m;
  const wind    = current.wind_speed_10m;

  if (code === 95 || code === 99 || code === 82) return t.storm;
  if (code === 65 || code === 55 || code === 81) return t.heavyRain;
  if (code === 75 || code === 73)                return t.snow;
  if (temp >= 38)                                return t.heat;
  if (temp <= 5)                                 return t.cold;
  if (wind >= 50)                                return t.wind;
  return null;
}

// ── Particle configs ──
const particleConfigs = {
  'theme-rainy': {
    count: 120,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        speed: 8 + Math.random() * 6, wind: -2,
        len: 15 + Math.random() * 10,
        w: 0.8 + Math.random() * 0.7,
        op: 0.4 + Math.random() * 0.4,
      }));
    },
    draw(ctx, p, W, H) {
      p.y += p.speed; p.x += p.wind;
      if (p.y > H) { p.y = 0; p.x = Math.random() * W; }
      ctx.strokeStyle = `rgba(174,214,241,${p.op})`;
      ctx.lineWidth = p.w;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.wind * 2, p.y + p.len);
      ctx.stroke();
    },
  },
  'theme-stormy': {
    count: 160,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        speed: 10 + Math.random() * 8, wind: -3,
        len: 18 + Math.random() * 12,
        w: 0.8 + Math.random() * 0.8,
        op: 0.3 + Math.random() * 0.4,
      }));
    },
    draw(ctx, p, W, H, frame) {
      p.y += p.speed; p.x += p.wind;
      if (p.y > H) { p.y = 0; p.x = Math.random() * W; }
      ctx.strokeStyle = `rgba(174,214,241,${p.op})`;
      ctx.lineWidth = p.w;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.wind * 2, p.y + p.len);
      ctx.stroke();
      if (frame % 90 < 3) {
        ctx.fillStyle = `rgba(255,255,200,${0.04 + Math.random() * 0.07})`;
        ctx.fillRect(0, 0, W, H);
      }
    },
  },
  'theme-snowy': {
    count: 100,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        speed: 1 + Math.random() * 2,
        r: 1.5 + Math.random() * 3,
        op: 0.5 + Math.random() * 0.5,
        offset: Math.random() * 100,
      }));
    },
    draw(ctx, p, W, H) {
      p.y += p.speed;
      p.x += Math.sin(p.y * 0.02 + p.offset) * 0.8;
      if (p.y > H) { p.y = 0; p.x = Math.random() * W; }
      ctx.fillStyle = `rgba(255,255,255,${p.op})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    },
  },
  'theme-sunny': {
    count: 35,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        angle: Math.random() * Math.PI * 2,
        r: 60 + Math.random() * 130,
        speed: 0.004 + Math.random() * 0.008,
        size: 2 + Math.random() * 4,
        op: 0.25 + Math.random() * 0.35,
      }));
    },
    draw(ctx, p, W, H) {
      p.angle += p.speed;
      const x = W / 2 + Math.cos(p.angle) * p.r;
      const y = H / 2 + Math.sin(p.angle) * p.r;
      ctx.fillStyle = `rgba(255,240,180,${p.op * (0.5 + 0.5 * Math.sin(p.angle * 3))})`;
      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fill();
    },
  },
  'theme-cloudy': {
    count: 18,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        x: Math.random() * W,
        y: 40 + Math.random() * (H * 0.4),
        speed: 0.2 + Math.random() * 0.4,
        r: 30 + Math.random() * 50,
        op: 0.06 + Math.random() * 0.1,
      }));
    },
    draw(ctx, p, W, H) {
      p.x += p.speed;
      if (p.x - p.r > W) p.x = -p.r;
      ctx.fillStyle = `rgba(255,255,255,${p.op})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    },
  },
  'theme-foggy': {
    count: 12,
    init(W, H) {
      return Array.from({ length: this.count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        speed: 0.15 + Math.random() * 0.3,
        r: 60 + Math.random() * 100,
        op: 0.04 + Math.random() * 0.07,
      }));
    },
    draw(ctx, p, W, H) {
      p.x += p.speed;
      if (p.x - p.r > W) p.x = -p.r;
      ctx.fillStyle = `rgba(255,255,255,${p.op})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    },
  },
};

// ── State ──
let currentUnit     = 'celsius';
let currentLang     = 'en';
let lastWeatherData = null;
let searchHistory   = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
let particles       = [];
let currentConfig   = null;
let animFrame       = 0;
let animId          = null;
let mapInstance     = null;
let mapMarker       = null;

// ── Canvas ──
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  if (currentConfig) particles = currentConfig.init(canvas.width, canvas.height);
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (currentConfig) {
    particles.forEach(p => currentConfig.draw(ctx, p, canvas.width, canvas.height, animFrame));
  }
  animFrame++;
  requestAnimationFrame(animateParticles);
}
animateParticles();

function setParticles(themeClass) {
  const config = particleConfigs[themeClass];
  if (!config) { particles = []; currentConfig = null; return; }
  currentConfig = config;
  particles     = config.init(canvas.width, canvas.height);
}

// ── Elements ──
const app          = document.getElementById('app');
const cityInput    = document.getElementById('cityInput');
const searchBtn    = document.getElementById('searchBtn');
const locateBtn    = document.getElementById('locateBtn');
const btnC         = document.getElementById('btnC');
const btnF         = document.getElementById('btnF');
const errorMsg     = document.getElementById('errorMsg');
const loadingMsg   = document.getElementById('loadingMsg');
const weatherMain  = document.getElementById('weatherMain');
const hourlyWrap   = document.getElementById('hourlyWrap');
const forecastWrap = document.getElementById('forecastWrap');
const historyChips = document.getElementById('historyChips');
const shareRow     = document.getElementById('shareRow');
const shareBtn     = document.getElementById('shareBtn');
const mapWrap      = document.getElementById('mapWrap');
const alertBanner  = document.getElementById('alertBanner');
const alertText    = document.getElementById('alertText');
const alertClose   = document.getElementById('alertClose');

// ── Event listeners ──
searchBtn.addEventListener('click', fetchWeather);
cityInput.addEventListener('keydown', e => { if (e.key === 'Enter') fetchWeather(); });
btnC.addEventListener('click', () => setUnit('celsius'));
btnF.addEventListener('click', () => setUnit('fahrenheit'));
shareBtn.addEventListener('click', shareWeather);
alertClose.addEventListener('click', () => alertBanner.classList.remove('show'));
locateBtn.addEventListener('click', locateMe);

// Language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTranslations();
    if (lastWeatherData) renderWeather(lastWeatherData);
  });
});

// ── Translations ──
function applyTranslations() {
  const t = i18n[currentLang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
}

// ── Helpers ──
function toF(c) { return Math.round(c * 9 / 5 + 32); }

function dispTemp(c) {
  return currentUnit === 'celsius' ? Math.round(c) + '°C' : toF(c) + '°F';
}

function dispWind(kmh) {
  return currentUnit === 'celsius'
    ? Math.round(kmh) + ' km/h'
    : Math.round(kmh * 0.621) + ' mph';
}

function getDayLabel(dateStr) {
  const date  = new Date(dateStr);
  const today = new Date();
  const diff  = Math.round((date - today) / 86400000);
  if (diff === 0) return currentLang === 'fil' ? 'Ngayon'
    : currentLang === 'ja' ? '今日'
    : currentLang === 'es' ? 'Hoy'
    : currentLang === 'fr' ? "Aujourd'hui"
    : 'Today';
  if (diff === 1) return currentLang === 'fil' ? 'Bukas'
    : currentLang === 'ja' ? '明日'
    : currentLang === 'es' ? 'Mañana'
    : currentLang === 'fr' ? 'Demain'
    : 'Tmrw';
  return date.toLocaleDateString(
    currentLang === 'fil' ? 'en' :
    currentLang === 'ja'  ? 'ja' :
    currentLang === 'es'  ? 'es' :
    currentLang === 'fr'  ? 'fr' : 'en',
    { weekday: 'short' }
  );
}

function formatTime(isoString) {
  if (!isoString) return '—';
  return new Date(isoString).toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit' });
}

function getDaylightHours(sunrise, sunset) {
  if (!sunrise || !sunset) return '—';
  const diff = new Date(sunset) - new Date(sunrise);
  const hrs  = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  return `${hrs}h ${mins}m`;
}

// ── Theme ──
const allThemes = ['theme-sunny','theme-cloudy','theme-rainy','theme-stormy','theme-snowy','theme-foggy'];

function setTheme(code) {
  allThemes.forEach(t => app.classList.remove(t));
  const theme = weatherThemes[code];
  if (theme) { app.classList.add(theme); setParticles(theme); }
}

// ── Unit toggle ──
function setUnit(unit) {
  currentUnit = unit;
  btnC.classList.toggle('active', unit === 'celsius');
  btnF.classList.toggle('active', unit === 'fahrenheit');
  if (lastWeatherData) renderWeather(lastWeatherData);
}

// ── History ──
function saveToHistory(cityName) {
  searchHistory = searchHistory.filter(c => c.toLowerCase() !== cityName.toLowerCase());
  searchHistory.unshift(cityName);
  if (searchHistory.length > 5) searchHistory = searchHistory.slice(0, 5);
  localStorage.setItem('weatherHistory', JSON.stringify(searchHistory));
  renderHistory();
}

function renderHistory() {
  historyChips.innerHTML = '';
  searchHistory.forEach(city => {
    const chip = document.createElement('div');
    chip.className   = 'chip';
    chip.textContent = city;
    chip.addEventListener('click', () => { cityInput.value = city; fetchWeather(); });
    historyChips.appendChild(chip);
  });
}

// ── Alert banner ──
function showAlert(message) {
  if (!message) { alertBanner.classList.remove('show'); return; }
  alertText.textContent = message;
  alertBanner.classList.add('show');
}

// ── Error ──
function showError(msg) {
  errorMsg.textContent     = msg;
  errorMsg.style.display   = 'block';
  loadingMsg.style.display = 'none';
  weatherMain.style.display  = 'none';
  hourlyWrap.style.display   = 'none';
  forecastWrap.style.display = 'none';
  shareRow.style.display     = 'none';
  mapWrap.style.display      = 'none';
}

// ── Map ──
function updateMap(lat, lon, cityName) {
  mapWrap.style.display = 'block';
  if (!mapInstance) {
    mapInstance = L.map('weatherMap', { zoomControl: true, scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance);
  }
  mapInstance.setView([lat, lon], 11);
  if (mapMarker) mapMarker.remove();
  mapMarker = L.marker([lat, lon]).addTo(mapInstance).bindPopup(`<b>${cityName}</b>`).openPopup();
  setTimeout(() => mapInstance.invalidateSize(), 200);
}

// ── Share ──
function shareWeather() {
  const target = document.getElementById('shareTarget');
  shareBtn.innerHTML = '⏳ Saving...';
  shareBtn.disabled  = true;
  html2canvas(target, { backgroundColor: null, scale: 2, useCORS: true, logging: false })
    .then(c => {
      const link    = document.createElement('a');
      link.download = `weather-${Date.now()}.png`;
      link.href     = c.toDataURL('image/png');
      link.click();
      shareBtn.innerHTML = `<i class="ti ti-camera"></i> <span data-i18n="saveImage">${i18n[currentLang].saveImage}</span>`;
      shareBtn.disabled  = false;
    }).catch(() => {
      shareBtn.innerHTML = `<i class="ti ti-camera"></i> <span data-i18n="saveImage">${i18n[currentLang].saveImage}</span>`;
      shareBtn.disabled  = false;
    });
}

// ── Locate me ──
function locateMe() {
  if (!navigator.geolocation) return;
  locateBtn.innerHTML  = '<i class="ti ti-loader"></i>';
  locateBtn.disabled   = true;

  navigator.geolocation.getCurrentPosition(
    async pos => {
      const { latitude, longitude } = pos.coords;
      try {
        const res  = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=&count=1&language=en&format=json`);
        // Reverse geocode using nominatim
        const rRes  = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const rData = await rRes.json();
        const city  = rData.address.city || rData.address.town || rData.address.village || 'My Location';
        cityInput.value = city;
        fetchWeather();
      } catch {
        cityInput.value = 'My Location';
        fetchWeather();
      }
      locateBtn.innerHTML = '<i class="ti ti-current-location"></i>';
      locateBtn.disabled  = false;
    },
    () => {
      locateBtn.innerHTML = '<i class="ti ti-current-location"></i>';
      locateBtn.disabled  = false;
    }
  );
}

// ── Hourly bars ──
function renderHourly(hourly) {
  const barsEl = document.getElementById('hourlyBars');
  barsEl.innerHTML = '';
  const now      = new Date();
  const nowHr    = now.getHours();
  const times    = hourly.time;
  const temps    = hourly.temperature_2m;
  let startIdx   = 0;
  for (let i = 0; i < times.length; i++) {
    if (new Date(times[i]).getHours() >= nowHr) { startIdx = i; break; }
  }
  const slice     = temps.slice(startIdx, startIdx + 12);
  const timeSlice = times.slice(startIdx, startIdx + 12);
  const maxT      = Math.max(...slice);
  const minT      = Math.min(...slice);
  slice.forEach((t, i) => {
    const pct  = maxT === minT ? 50 : Math.round((t - minT) / (maxT - minT) * 80) + 10;
    const time = new Date(timeSlice[i]).toLocaleTimeString('en', { hour: 'numeric', hour12: true });
    const wrap = document.createElement('div');
    wrap.className = 'h-bar-wrap';
    wrap.innerHTML = `
      <div class="h-temp">${dispTemp(t)}</div>
      <div class="h-bar" style="height:${pct}%"></div>
      <div class="h-time">${time}</div>
    `;
    barsEl.appendChild(wrap);
  });
}

// ── Render ──
function renderWeather(data) {
  const cur    = data.current;
  const daily  = data.daily;
  const hourly = data.hourly;
  const t      = i18n[currentLang];
  const [condition, icon] = weatherCodes[cur.weather_code] || ['Unknown', '🌡️'];

  setTheme(cur.weather_code);
  showAlert(getAlert(cur, currentLang));

  document.getElementById('cityName').textContent      = data.cityName;
  document.getElementById('countryName').textContent   = data.country;
  document.getElementById('tempVal').textContent       = dispTemp(cur.temperature_2m);
  document.getElementById('conditionText').textContent = icon + ' ' + condition;
  document.getElementById('feelsLike').textContent     = t.feelsLike + ' ' + dispTemp(cur.apparent_temperature);
  document.getElementById('weatherIcon').textContent   = icon;
  document.getElementById('sunrise').textContent       = formatTime(daily.sunrise[0]);
  document.getElementById('sunset').textContent        = formatTime(daily.sunset[0]);
  document.getElementById('daylight').textContent      = getDaylightHours(daily.sunrise[0], daily.sunset[0]);
  document.getElementById('humidity').textContent      = Math.round(cur.relative_humidity_2m) + '%';
  document.getElementById('windSpeed').textContent     = dispWind(cur.wind_speed_10m);
  document.getElementById('visibility').textContent    = Math.round((cur.visibility || 10000) / 1000) + ' km';
  document.getElementById('rainChance').textContent    = Math.round(daily.precipitation_probability_max[0] || 0) + '%';

  applyTranslations();
  renderHourly(hourly);

  const grid = document.getElementById('forecastGrid');
  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const [, fIcon] = weatherCodes[daily.weather_code[i]] || ['', '🌡️'];
    const card = document.createElement('div');
    card.className = 'fc-card';
    card.innerHTML = `
      <p class="fc-day">${getDayLabel(daily.time[i])}</p>
      <p class="fc-icon">${fIcon}</p>
      <p class="fc-hi">${dispTemp(daily.temperature_2m_max[i])}</p>
      <p class="fc-lo">${dispTemp(daily.temperature_2m_min[i])}</p>
    `;
    grid.appendChild(card);
  }

  updateMap(data.lat, data.lon, data.cityName);

  weatherMain.style.display  = 'block';
  hourlyWrap.style.display   = 'block';
  forecastWrap.style.display = 'block';
  shareRow.style.display     = 'block';
  loadingMsg.style.display   = 'none';
  errorMsg.style.display     = 'none';
}

// ── Fetch ──
async function fetchWeather() {
  const city = cityInput.value.trim();
  if (!city) return;

  loadingMsg.style.display   = 'block';
  weatherMain.style.display  = 'none';
  hourlyWrap.style.display   = 'none';
  forecastWrap.style.display = 'none';
  shareRow.style.display     = 'none';
  mapWrap.style.display      = 'none';
  errorMsg.style.display     = 'none';
  alertBanner.classList.remove('show');

  try {
    const geoRes  = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      showError(i18n[currentLang].cityNotFound);
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const wRes  = await fetch(
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,visibility` +
      `&hourly=temperature_2m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset` +
      `&timezone=auto&forecast_days=7`
    );
    const wData = await wRes.json();

    wData.cityName = name;
    wData.country  = country;
    wData.lat      = latitude;
    wData.lon      = longitude;
    lastWeatherData = wData;

    saveToHistory(name);
    renderWeather(wData);

  } catch (err) {
    showError(i18n[currentLang].fetchError);
  }
}

// ── Init ──
renderHistory();
applyTranslations();
cityInput.value = 'Baguio';
fetchWeather();