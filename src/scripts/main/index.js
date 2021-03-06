const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redirOnloadId = urlParams.get('redirect-onload-id');
var body = document.body, html = document.documentElement;
var masterSection = document.getElementById("more")
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var nav = document.getElementsByTagName("header")[0]
var navRect = nav.getBoundingClientRect()
var navbarHeight = ((navRect.top) - (navRect.bottom))

setTimeout(() => {
  if (redirOnloadId == 1) {
    scrollToElement('#socials-home', true)
  } else if (redirOnloadId == 2) {
    scrollToElement('#members-home', true)
  } else if (redirOnloadId == 3) {
    scrollToElement('#store-home', true)
  }
}, 100);



function removeHashes() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    var clean_uri = location.protocol +"//"+ location.host + location.pathname;
    window.history.replaceState({}, document.title, clean_uri);
  }, 5);
}


function scrollToElement(elSelector, highlight) {
  var el = document.querySelector(elSelector)
  var elRect = el.getBoundingClientRect()
  newScroll = (elRect.top + window.scrollY) - 50
  window.scroll(0, newScroll)
  if (highlight) {
    el.style.transition = "0.3s ease-in-out"
    el.style.backgroundColor = "#0051ff"
    setTimeout(() => {
      el.style.backgroundColor = "#0051ff10"
      setTimeout(() => {
        el.style.backgroundColor = "#0051ff"
        setTimeout(() => {
          el.style.backgroundColor = "transparent"
        }, 250);
      }, 250);
    }, 250);
  }
}



function windowScrollOnY() {
  var el = document.querySelector('#more')
  var elRect = el.getBoundingClientRect()
  newScroll = (elRect.top + window.scrollY) + navbarHeight
  window.scroll(0, newScroll)
}

var el2 = document.querySelector('#more')
var elRect2 = el2.getBoundingClientRect()
var bodyHeight = ((elRect2.top + window.scrollY) - (elRect2.bottom - window.scrollY))

window.onresize = function() {
  document.getElementById("more").style.top = `${window.innerHeight}px`
  console.log("resize")
  document.body.style.height = `calc(100% + ${bodyHeight}px)`
  navbarHeight = ((navRect.top + window.scrollY) - (navRect.bottom - window.scrollY))
} 

document.body.style.height = `calc(100% + ${bodyHeight})px`

document.getElementById("more").style.top = `${window.innerHeight}px`
document.getElementsByTagName('html')


removeHashes()