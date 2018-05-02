// Sidenav Hamburger Menu Functionality
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Italy": null,
        "Cancun, Mexico": null,
        "Brazil": null,
        "Rome": null,
        "UK": null,
        "Paris": null,
        "Africa": null,
        "Florida": null,
        "Jamaica": null,
    }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollySpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});