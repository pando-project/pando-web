// ==== darkToggler
const darkTogglerCheckbox = document.querySelector("#darkToggler");
const html = document.querySelector("html");

const darkModeToggler = () => {
  html.classList.remove("ud-dark")
  // darkTogglerCheckbox.checked
  //   ? html.classList.remove("ud-dark")
  //   : html.classList.add("ud-dark");
};
darkModeToggler();

if(darkTogglerCheckbox){
  darkTogglerCheckbox.addEventListener("click", darkModeToggler);
}

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};


document.querySelector(".back-to-top").onclick = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const url = 'https://slack.com/api/chat.postMessage'
const token = 'xoxb-2544772940691-3967276504629-d3OomOkFhpZZ6CM4dRiP2wLW'
const channel = 'C02FU0RPDLN'
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
document.querySelector('#submitInfo').onclick=()=>{
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const body = `&token=${token}&channel=${channel}&text=${name}<>${email}<>${message}`

  axios.post(url, body, {
    timeout: 10000,
    transformRequest(data, headers) {
      delete headers.common['Content-Type'];
      return data;
    }
  }).then(res => {
    console.log(res)
    console.log("success")
  }).catch(err => {
    console.log(err)
    console.log("failed")
  })
  return false
}

document.querySelector('#emailOnlySubmit').onclick=()=>{
  const email = document.getElementById('emailOnly').value

  const body = `&token=${token}&channel=${channel}&text=${email}`

  axios.post(url, body, {
    timeout: 10000,
    transformRequest(data, headers) {
      delete headers.common['Content-Type'];
      return data;
    }
  }).then(res => {
    console.log(res)
    console.log("success")
  }).catch(err => {
    console.log(err)
    console.log("failed")
  })
  return false
}