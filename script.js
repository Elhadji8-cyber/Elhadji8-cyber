document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const channelNameInput = document.getElementById('channelName');
    const youtubeFeedContainer = document.getElementById('youtubeFeedContainer');

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const channelName = channelNameInput.value.trim();

            if (channelName === '') {
                alert('Please enter a YouTube channel name.');
                return;
            }

            // Clear previous feed
            youtubeFeedContainer.innerHTML = '';

            // Create the script element
            const script = document.createElement('script');
            script.src = `http://www.gmodules.com/ig/ifr?url=http://www.google.com/ig/modules/youtube.xml&up_channel=${encodeURIComponent(channelName)}&synd=open&w=320&h=390&title=&border=%23ffffff%7C3px%2C1px+solid+%23999999&output=js`;
            
            // Append the script to the container
            youtubeFeedContainer.appendChild(script);
        });
    } else {
        console.error('Generate button not found.');
    }
});
