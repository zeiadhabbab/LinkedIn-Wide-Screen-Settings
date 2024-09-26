document.getElementById('settings-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the input fields
    const width = document.getElementById('width').value;
    const maxWidth = document.getElementById('max-width').value;

    // Save the values to Chrome storage
    chrome.storage.sync.set({ width, maxWidth }, function () {
        console.log('Settings saved: Width - ' + width + ', Max Width - ' + maxWidth);
        alert('Settings saved successfully! Refresh Linkedin page to see th result.');
    });
});

// Load the saved values when the popup is opened
chrome.storage.sync.get(['width', 'maxWidth'], function (data) {
    if (data.width) {
        document.getElementById('width').value = data.width;
    }
    if (data.maxWidth) {
        document.getElementById('max-width').value = data.maxWidth;
    }
});