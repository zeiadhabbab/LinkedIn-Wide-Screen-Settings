
# LinkedIn Wide Screen Chrome Extension

LinkedIn Wide Screen is a Chrome extension that customizes the layout of LinkedIn to provide a wider, more optimized viewing experience. This extension allows users to adjust the width and max-width of the LinkedIn interface, enhancing usability on larger screens.
![image](https://github.com/user-attachments/assets/1fd4e514-eb69-490c-bba9-aa315d4d2d21)
![2](https://github.com/user-attachments/assets/ee2ee006-1b38-4bd6-9572-f8121279d4c7)

## Features

- Dynamically adjust the global navigation width of LinkedIn.
- Modify the maximum width of the content layout for larger screens.
- Simple settings interface to customize `width` and `max-width`.
- Settings are saved and applied automatically every time you visit LinkedIn.

## Screenshots

(You can add a screenshot of your extension here)

## Installation

1. Clone this repository or download the files:

   ```bash
   git clone https://github.com/zeiadhabbab/LinkedIn-Wide-Screen-Settings.git
   ```

2. Go to `chrome://extensions/` in your Chrome browser.

3. Enable **Developer mode** by toggling the switch at the top right of the page.

4. Click **Load unpacked** and select the directory where you cloned or downloaded the extension.

5. The extension should now be loaded and ready to use.

## How to Use

1. Click the LinkedIn Wide Screen extension icon in your Chrome toolbar.

2. Adjust the `width` (percentage of screen width) and `max-width` (maximum pixel width) in the settings popup.

3. Click **Save**, and the changes will be applied next time you visit LinkedIn.

## Technical Details

### manifest.json

Defines the extension metadata, permissions, and content scripts required to modify LinkedIn's layout. It uses the `storage` permission to persist user settings.

### popup.html

Provides a simple form for users to input custom values for the `width` and `max-width` of LinkedIn's layout.

### popup.js

Handles saving the user input to Chrome's `storage.sync` and loading previously saved settings into the form when the popup is opened.

### content.js

Injects custom CSS into LinkedIn based on the user's saved settings. The `width` and `max-width` are applied to dynamically modify the LinkedIn layout.

### styles.css

Includes base styles for the settings popup.

## Development

If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
