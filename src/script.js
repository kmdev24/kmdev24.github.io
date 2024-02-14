// Updated JavaScript function to redirect to a new URL after 10 seconds of page load
window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    // Redirect to the new URL after 10 seconds
    setTimeout(() => {
      window.location.href = 'letter-main/index.html';
    }, 10000); // 9000 milliseconds = 9 seconds (to account for the initial 1 second delay)
  }, 1000);
};