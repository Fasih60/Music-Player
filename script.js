// Song data
let songs = [
    {
        title: "Thodi Jagah('Marjaavan')",
        artist: "Arijit Singh, Tanishk, Rashmi Virag",
        file: "songs/Thodi Jagah - Marjaavaan.mp3",
        image: "covers/thodi jagha cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "O Khuda ('Hero')",
        artist: "Amaal Malik, Palak Muchhal",
        file: "songs/O Khuda - Hero.mp3",
        image: "covers/o khuda cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Judaai ('Badlapur')",
        artist: "Arijit Singh, Priya, Sachin-Jigar, Rekha",
        file: "songs/Judaai - Badlapur.mp3",
        image: "covers/judaii cover.png",
        category: "songs",
        liked: false,
    },
    {
        title: "Kabira",
        artist: "Pritam, Rekha",
        file: "songs/Kabira - Yeh Jawaani Hai Deewani.mp3",
        image: "covers/kabira cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Maand",
        artist: "Bayaan, Hasan Raheem, Rovalio",
        file: "songs/Maand.mp3",
        image: "covers/maand cover.jpeg",
        category: "songs",
        liked: false,
    },
    {
        title: "Humdard ('Ek Villain')",
        artist: "Arijit Singh",
        file: "songs/Humdard - Ek Villain.mp3",
        image: "covers/hamdard cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Heer",
        artist: "Haider Ali, Ali & Shjr",
        file: "songs/Heer - Haider Ali.mp3",
        image: "covers/heer cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Musafir",
        artist: "Atif Aslam",
        file: "songs/Musafir.mp3",
        image: "covers/musafir cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Jhol",
        artist: "Maanu, Annural Khalid",
        file: "songs/Jhol - Coke Studio.mp3",
        image: "covers/jhol cover.jpeg",
        category: "songs",
        liked: false,
    },
    {
        title: "Kaise Hua ('Kabir Singh')",
        artist: "Vishal Mishra, Manoj Mustashir",
        file: "songs/Kaise Hua - Kabir Singh.mp3",
        image: "covers/kaise hua cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Husn",
        artist: "Anuv Jain",
        file: "songs/Husn - Anuv Jain.mp3",
        image: "covers/husn cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Tu hi Yaar Mera ('Pati Patni aur Wooh')",
        artist: "Rochak kohli, Arijit Singh",
        file: "songs/Tu Hi Yaar Mera -  Pati Patni Aur Woh.mp3",
        image: "covers/tu hi yaar mera cover.jpeg",
        category: "songs",
        liked: false,
    },
    {
        title: "Kaun tujhe ('M.S.Dhoni')",
        artist: "Palak Muchhal",
        file: "songs/Kaun Tujhe - M.S. Dhoni.mp3",
        image: "covers/kaun tujhe cover.jpg",
        category: "songs",
        liked: false,
    },
    {
        title: "Tasbih",
        artist: "Rooh khan, The Masterz",
        file: "songs/Tasbih.mp3",
        image: "covers/tasbih.jpeg",
        category: "songs",
        liked: false,
    },
    {
        title: "Mehrama",
        artist: "Pritam, Darshan Raval, Antara Mitra",
        file: "songs/Mehrama - Love Aaj Kal .mp3",
        image: "covers/Mehrama Cover.jpeg",
        category: "songs",
        liked: false,
    },
    // naats
    {
        title: "Haal e Dil - Rao Ali Hasnain",
        artist: "Rao Ali Hasnain",
        file: "naats/Haal e Dil  - Rao Ali Hasnain.mp3",
        image: "naats/haal e dil cover.png",
        category: "naats",
        liked: false,
    },
    {
        title: "99 Names of Allah - Atif Aslam",
        artist: "Atif Aslam",
        file: "naats/The 99 Names - Atif Aslam.mp3",
        image: "naats/allah names.jpeg",
        category: "naats",
        liked: false,
    },
    {
        title: "Ummati - Junaid Jamshed",
        artist: "Junaid Jamshed",
        file: "naats/Ummati - Junaid Jamshed.mp3",
        image: "naats/Ummati cover.jpg",
        category: "naats",
        liked: false,
    },
    {
        title: "Ilahi Teri Chaukhat Per - Junaid Jamshed",
        artist: "Junaid Jamshed",
        file: "naats/Ilahi Teri Chaukhat Per - Junaid Jamshed.mp3",
        image: "naats/Ummati cover.jpg",
        category: "naats",
        liked: false,
    },
    {
        title: "Kabe ki Ronak - Gulam Mustafa Qadri",
        artist: "Gulam Mustafa Qadri",
        file: "naats/Kabe ki Ronak - Gulam Mustafa Qadri.mp3",
        image: "naats/khana khaba.jpg",
        category: "naats",
        liked: false,
    },
    {
        title: "Tajdar-e-Haram - Atif Aslam",
        artist: "Atif Aslam",
        file: "naats/Tajdar-e-Haram Atif Aslam.mp3",
        image: "naats/Tajdar-e-Haram cover.jpeg",
        category: "naats",
        liked: false,
    },
    {
        title: "Balaghal Ula Bi Kamaalihi - Ali Zafar",
        artist: "Ali Zafar",
        file: "naats/Balaghal Ula Bi Kamaalihi - Ali Zafar .mp3",
        image: "naats/Balaghal Ula Bi Kamaalihi cover.jpg",
        category: "naats",
        liked: false,
    },
];

const storedSongs = localStorage.getItem("songs");
if (storedSongs) songs = JSON.parse(storedSongs);

let songIndex = 0;
let recentSongs = JSON.parse(localStorage.getItem("recentSongs")) || [];
let isPlaying = false;

const audio = new Audio();
const audioCache = new Map();
let preloadedAudios = [];
let preloadedImages = [];

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const likeBtn = document.getElementById("like-btn");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const searchInput = document.getElementById("searchInput");
const songGrid = document.getElementById("songGrid");
const recentList = document.getElementById("recentList");

// Optimized audio loading and playback
async function loadSong(song, autoPlay = true) {
    try {
        // Update UI
        title.textContent = song.title;
        artist.textContent = song.artist;
        cover.src = song.image;
        likeBtn.textContent = song.liked ? "❤️" : "🤍";
        playBtn.disabled = true;
        playBtn.textContent = "⌛";

        // Check cache first
        if (audioCache.has(song.file)) {
            audio.src = audioCache.get(song.file).src;
            if (autoPlay) await playSong();
        } else {
            // Load fresh and cache it
            audio.src = song.file;
            audio.addEventListener('canplaythrough', () => {
                audioCache.set(song.file, audio.cloneNode());
            }, { once: true });
            
            if (autoPlay) await playSong();
        }

        updateRecent(song);
        preloadNextResources();
    } catch (error) {
        console.error("Playback error:", error);
        playBtn.disabled = false;
        playBtn.textContent = "▶️";
    }
}

async function playSong() {
    try {
        await audio.play();
        isPlaying = true;
        playBtn.textContent = "⏸️";
        playBtn.disabled = false;
    } catch (err) {
        console.error("Playback failed:", err);
        playBtn.textContent = "▶️";
        playBtn.disabled = false;
        isPlaying = false;
    }
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶️";
}

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

// Resource preloading
function preloadNextResources() {
    // Clear previous preloads
    preloadedAudios.forEach(a => a.src = '');
    preloadedAudios = [];
    preloadedImages = [];

    // Preload next 2 songs' audio and images
    for (let i = 1; i <= 2; i++) {
        const nextIndex = (songIndex + i) % songs.length;
        const nextSong = songs[nextIndex];

        // Preload audio
        const audioPreload = new Audio();
        audioPreload.src = nextSong.file;
        audioPreload.preload = "auto";
        preloadedAudios.push(audioPreload);
        
        // Cache the audio once loaded
        audioPreload.addEventListener('canplaythrough', () => {
            audioCache.set(nextSong.file, audioPreload.cloneNode());
        }, { once: true });

        // Preload image
        const imgPreload = new Image();
        imgPreload.src = nextSong.image;
        preloadedImages.push(imgPreload);
    }
}

// Song display and filtering
function displaySongs(songArray) {
    songGrid.innerHTML = "";
    const fragment = document.createDocumentFragment();
    
    songArray.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `
            <img src="${song.image}" alt="${song.title}" loading="lazy">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>`;
        card.onclick = () => {
            songIndex = songs.indexOf(song);
            loadSong(song);
        };
        fragment.appendChild(card);
    });
    
    songGrid.appendChild(fragment);
}

const filterFunctions = {
    all: () => songs,
    songs: () => songs.filter(s => s.category === "songs"),
    naats: () => songs.filter(s => s.category === "naats"),
    liked: () => songs.filter(s => s.liked),
    recent: () => recentSongs
};

function filterSongs(type) {
    const filtered = filterFunctions[type] ? filterFunctions[type]() : songs;
    displaySongs(filtered);
    localStorage.setItem("lastCategory", type);
    
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar-left').classList.remove('active');
    }
}

// Recent songs management
function updateRecent(song) {
    recentSongs = recentSongs.filter(s => s.title !== song.title);
    recentSongs.unshift(song);
    if (recentSongs.length > 5) recentSongs.pop();
    localStorage.setItem("recentSongs", JSON.stringify(recentSongs));
    renderRecentList();
}

function renderRecentList() {
    recentList.innerHTML = recentSongs.map(song => 
        `<li onclick="playRecent('${song.title}')">${song.title} - ${song.artist}</li>`
    ).join('');
}

function playRecent(title) {
    const song = songs.find(s => s.title === title);
    if (song) {
        songIndex = songs.indexOf(song);
        loadSong(song);
    }
}

// Player controls
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}

function toggleLike() {
    songs[songIndex].liked = !songs[songIndex].liked;
    likeBtn.textContent = songs[songIndex].liked ? "❤️" : "🤍";
    localStorage.setItem("songs", JSON.stringify(songs));
}

// Progress bar handling
function updateProgress() {
    if (!isNaN(audio.duration)) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;

        // Update time displays
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

function seekProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
}

// Search functionality with debounce
let searchTimeout;
function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase();
        const results = songs.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query)
        );
        displaySongs(results);
    }, 300);
}

// Initialize the player
function initPlayer() {
    // Preload initial resources
    songs.forEach(song => {
        const img = new Image();
        img.src = song.image;
    });

    // Load initial song
    const lastCategory = localStorage.getItem("lastCategory") || "all";
    filterSongs(lastCategory);
    loadSong(songs[songIndex], false);
    renderRecentList();

    // Set up event listeners
    playBtn.addEventListener("click", togglePlayPause);
    nextBtn.addEventListener("click", nextSong);
    prevBtn.addEventListener("click", prevSong);
    likeBtn.addEventListener("click", toggleLike);
    progressBar.addEventListener("click", seekProgress);
    searchInput.addEventListener("input", handleSearch);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", nextSong);
    audio.addEventListener("loadedmetadata", updateProgress);

    // Responsive setup
    if (window.innerWidth > 768) {
        document.querySelector('.navbar-right').style.display = 'flex';
    }
}

// Mobile menu handling
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar-left');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(e) {
        if (sidebar && !sidebar.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Window resize handler
function handleResize() {
    if (window.innerWidth > 768) {
        document.querySelector('.navbar-right').style.display = 'flex';
        document.querySelector('.sidebar-left').classList.remove('active');
    } else {
        document.querySelector('.navbar-right').style.display = 'none';
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPlayer();
    setupMobileMenu();
    window.addEventListener('resize', handleResize);
});

// Make playRecent available globally
window.playRecent = playRecent;