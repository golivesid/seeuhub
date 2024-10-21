 
    <script>
        // Fetch the DRM keys from the JSON file
        fetch('drmKeys.json')
            .then(response => response.json())
            .then(data => {
                // Set up JW Player with the fetched keys
                jwplayer("jwplayerDiv").setup({
                    file: "https://delta12tatasky.akamaized.net/out/i/22.mpd",
                    type: "dash",
                    drm: {
                        "clearkey": {
                            "keyId": data.keyId,
                            "key": data.key
                        }
                    }
                });
            })
            .catch(error => console.error('Error fetching DRM keys:', error));
    </script>
    <script>
  if(confirm("Join Our Telegram Channel")) { window.location.href = "https://t.me/+qdLjzK5bWoViOWQ1" }
    </script>

    <script>
    // disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.onkeydown = function (e) {

        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }

        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }

        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }

        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }

</script>
