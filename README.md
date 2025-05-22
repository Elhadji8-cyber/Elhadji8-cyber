# YouTube Channel Feed Integration

This project allows you to embed a YouTube channel feed into a webpage. You provide a YouTube channel name, and it generates the necessary code to display the feed.

## How to Use

1.  **Clone or download the repository.**
    If you have git installed, you can clone it:
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```
    Otherwise, download the files (`index.html`, `script.js`, `style.css`).

2.  **Open `index.html` in your web browser.**
    Navigate to the directory where you saved the files and open `index.html`.

3.  **Enter the YouTube Channel Name.**
    In the input field labeled "YouTube Channel Name:", type the name of the YouTube channel you want to display (e.g., `GoogleDevelopers`, `NASA`, `TED`).

4.  **Click "Generate Feed".**
    The YouTube channel feed will appear below the input field.

## Files

*   `index.html`: The main HTML file that you open in your browser. It contains the structure of the page, including the input field and the container for the YouTube feed.
*   `script.js`: Contains the JavaScript logic to take the channel name input, construct the YouTube embed URL, and load the feed into the page.
*   `style.css`: Provides basic styling to make the page look presentable.

## How it Works

The integration uses a script from `gmodules.com` (Google Gadgets) that embeds a YouTube channel feed. The `script.js` dynamically creates a `<script>` tag with a `src` attribute pointing to this service, including the user-specified channel name. When this script tag is added to the page, the browser executes it, loading the YouTube feed.

**Note:** This method relies on an external Google service (`gmodules.com`). Availability of this service may affect the functionality.
