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

const audio = new Audio();
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

audio.preload = "auto";

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.image;
    audio.src = song.file;
    likeBtn.textContent = song.liked ? "❤️" : "🤍";
    updateRecent(song);
    preloadNextAudios();
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️";
}

function displaySongs(songArray) {
    songGrid.innerHTML = "";
    songArray.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>`;
        card.onclick = () => {
            songIndex = songs.indexOf(song);
            loadSong(song);
            playSong();
        };
        songGrid.appendChild(card);
    });
}

function filterSongs(type) {
    let filtered = [];
    if (type === "all") {
        filtered = songs;
    }
    else if (type === "songs") {
        filtered = songs.filter(s => s.category === "songs");
    }
    else if (type === "naats") {
        filtered = songs.filter(s => s.category === "naats");
    }
    else if (type === "liked") {
        filtered = songs.filter(s => s.liked);
    }
    else if (type === "recent") {
        filtered = recentSongs;
    }
  
    displaySongs(filtered);
    localStorage.setItem("lastCategory", type);
    
    // Close mobile menu after selection
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar-left').classList.remove('active');
    }
}

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
        playSong();
    }
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const results = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
    );
    displaySongs(results);
});

playBtn.addEventListener("click", () => {
    audio.paused ? playSong() : pauseSong();
});

nextBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

prevBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

likeBtn.addEventListener("click", () => {
    songs[songIndex].liked = !songs[songIndex].liked;
    likeBtn.textContent = songs[songIndex].liked ? "❤️" : "🤍";
    localStorage.setItem("songs", JSON.stringify(songs));
});

audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;

    const min = Math.floor(audio.currentTime / 60);
    const sec = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    currentTimeEl.textContent = `${min}:${sec}`;
});

audio.addEventListener("loadedmetadata", () => {
    const min = Math.floor(audio.duration / 60);
    const sec = Math.floor(audio.duration % 60).toString().padStart(2, "0");
    durationEl.textContent = `${min}:${sec}`;
});

progressBar.addEventListener("click", (e) => {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

function preloadNextAudios() {
    const next1 = new Audio();
    const next2 = new Audio();
    next1.src = songs[(songIndex + 1) % songs.length].file;
    next2.src = songs[(songIndex + 2) % songs.length].file;
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar-left');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar && !sidebar.contains(e.target) && e.target !== hamburger) {
            sidebar.classList.remove('active');
        }
    });
});

window.addEventListener("load", () => {
    const lastCategory = localStorage.getItem("lastCategory") || "all";
    filterSongs(lastCategory);
    loadSong(songs[songIndex]);
    renderRecentList();
    
    // Show navbar buttons on larger screens
    if (window.innerWidth > 768) {
        document.querySelector('.navbar-right').style.display = 'flex';
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.navbar-right').style.display = 'flex';
        document.querySelector('.sidebar-left').classList.remove('active');
    } else {
        document.querySelector('.navbar-right').style.display = 'none';
    }
});