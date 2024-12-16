function updateHeaderDisplay() {
    const header2Tags = document.querySelectorAll('header header-2'); // Select all header-2 tags inside header
    const header3Tags = document.querySelectorAll('header header-3'); // Select all header-3 tags inside header
    const headerLogo = document.querySelectorAll('header-logo');
    const prayerWeatherInfo = document.querySelectorAll('header header-1 .prayer-weather-info'); // Select all .prayer-weather-info inside header-1
    const dateTimeInfo = document.querySelectorAll('header header-1 .date-time-info'); // Select all .date-time-info inside header-1
    const headerMobile = document.querySelector('header-mobile');
    const screenWidth = window.innerWidth;
    const footerInfo = document.querySelectorAll('flex-row.top');

    if (screenWidth < 991) {
        header2Tags.forEach(header2 => header2.classList.add('hidden')); // Add 'hidden' class to all header-2
        header3Tags.forEach(header3 => header3.classList.add('hidden')); // Add 'hidden' class to all header-3
        prayerWeatherInfo.forEach(info => info.classList.add('hidden')); // Add 'hidden' class to all .prayer-weather-info
        dateTimeInfo.forEach(info => info.classList.add('hidden')); // Add 'hidden' class to all .date-time-info
        headerLogo.forEach(headerLogo => headerLogo.classList.remove('hidden'))
        headerMobile.classList.remove('hidden'); // Show header-mobile

    } else {
        header2Tags.forEach(header2 => header2.classList.remove('hidden')); // Remove 'hidden' class from all header-2
        header3Tags.forEach(header3 => header3.classList.remove('hidden')); // Remove 'hidden' class from all header-3
        prayerWeatherInfo.forEach(info => info.classList.remove('hidden')); // Remove 'hidden' class from all .prayer-weather-info
        dateTimeInfo.forEach(info => info.classList.remove('hidden')); // Remove 'hidden' class from all .date-time-info
        headerLogo.forEach(headerLogo=>headerLogo.classList.add('hidden'));
        headerMobile.classList.add('hidden'); // Hide header-mobile
    }
}

// Initial check
updateHeaderDisplay();

// Add event listener for window resize
window.addEventListener('resize', updateHeaderDisplay);


document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(max-width: 990px)').matches) {
        document.addEventListener('click', (event) => {
            // Check if the clicked element is within header-mobile .col-1 svg
            if (event.target.closest('header-mobile .col-1 svg')) {
                const sideMenu = document.querySelector('side-menu');
                const marqueeWidgets = document.querySelectorAll('.full-container .marquee-container-widget:not(.relative-widget)');

                if (sideMenu.classList.contains('active-side-menu')) {
                    sideMenu.classList.remove('active-side-menu');
                    marqueeWidgets.forEach(widget => {
                        widget.style.opacity = '1';
                    });
                } else {
                    sideMenu.classList.add('active-side-menu');
                    marqueeWidgets.forEach(widget => {
                        widget.style.opacity = '0';
                    });
                }
            }

        });
    }
});