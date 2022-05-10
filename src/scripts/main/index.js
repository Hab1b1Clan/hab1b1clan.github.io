
var body = document.body, html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


function removeHashes() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
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
  newScroll = (elRect.top + window.scrollY) - 50
  window.scroll(0, newScroll)
}

window.onresize = function() {
  document.getElementById("more").style.top = `${window.innerHeight}px`
} 

document.body.style.height = `${height}px`

document.getElementById("more").style.top = `${window.innerHeight}px`
document.getElementsByTagName('html')
console.log(window.innerHeight)