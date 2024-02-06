const scriptURL = 'https://script.google.com/macros/s/AKfycbzqBLHs8oLUgq2XGWyyaHIqjm7p1KQvpm_mitaRrLCuMMJPIU5HelaEhtSpd5HQUVPo/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => msg.innerHTML = "Message send successfully")
      setTimeout(function()
                {
                    msg.innerHTML="";
                },1000)
                form.reset();
  })