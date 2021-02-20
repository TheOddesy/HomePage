// THEME THOGGLE ---------------------------------------------------

document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitcher = document.getElementById("themeToggle");

  // When our button gets clicked
  themeSwitcher.onclick = function () {
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");
    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"
    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});

// HORIZONTAL SCROLL BAR ---------------------------------------------

// When scrolling the function will activate to update the scroll bar
window.onscroll = function() {scrollbBar()};
function scrollbBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// DROP DOWN MENU ---------------------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-part')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// WINDOW OFFSET ---------------------------------------------------

window.addEventListener("hashchange", offsetAnchor);

function offsetAnchor() {
  if(location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

window.setTimeout(offsetAnchor, 1);