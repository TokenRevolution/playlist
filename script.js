let player;
let isLooping = true;
const playlistId = 'PLJKwjtX6AccvFVv-5s9bIS6ee6Pm5hyxZ';

// Initialize YouTube Player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'gfow08no7q8', // First video in the playlist
        playerVars: {
            'listType': 'playlist',
            'list': playlistId,
            'loop': 1,
            'playlist': playlistId,
            'controls': 1,
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Handle player state changes
function onPlayerStateChange(event) {
    // When the video ends and we're in loop mode
    if (event.data === YT.PlayerState.ENDED && isLooping) {
        player.playVideo();
    }
}

// Toggle loop functionality
document.getElementById('toggleLoop').addEventListener('click', function() {
    isLooping = !isLooping;
    this.textContent = isLooping ? 'Disable Loop' : 'Enable Loop';
    this.style.background = isLooping ? '#ff0000' : '#666666';
});

// Handle errors
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
    return false;
}; 