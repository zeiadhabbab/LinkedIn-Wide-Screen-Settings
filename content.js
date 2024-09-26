chrome.storage.sync.get(['width', 'maxWidth'], function (data) {
    const width = data.width || 99; // Default to 99% if no value is set
    const maxWidth = data.maxWidth || 1840; // Default to 1840px if no value is set

    // Inject the CSS dynamically with the saved values
    const style = document.createElement('style');
    style.innerHTML = `
        .global-nav__content {
            width: ${width}% !important;
            max-width: ${maxWidth}px !important;
        }

        :root {
            --scaffold-layout-xl-max-width: ${width}% !important;
        }

        @media screen and (min-width: 1200px) {
            .scaffold-layout-container.scaffold-layout-container--reflow {
                max-width: ${maxWidth}px !important;
            }
        }

        @media screen and (min-width: 992px) {
            .scaffold-layout--reflow .scaffold-layout__content--list-detail-aside {
                grid-template-columns: minmax(0, 20fr) minmax(300px, 4fr) !important;
            }
        }
    `;
    document.head.appendChild(style);
});
