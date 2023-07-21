// When the page loads, check if there's a saved URL
chrome.storage.sync.get('iframeURL', function(data) {
  if (data.iframeURL) {
    loadIframe(data.iframeURL);

    // Hide the form and show the change URL button
    document.getElementById('iframeForm').style.display = 'none';
    document.getElementById('consenttagline').style.display = 'none';
    document.getElementById('consent').style.display = 'none';
    document.getElementById('changeURLButton').style.display = 'block';
  }
});

// When the form is submitted, save the URL and load the iframe
document.getElementById('iframeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const iframeURL = 'https://www.chatbase.co/chatbot-iframe/' + document.getElementById('iframeURL').value;
  chrome.storage.sync.set({iframeURL: iframeURL}, function() {
    loadIframe(iframeURL);
  });

  // Hide the form and show the change URL button
  document.getElementById('iframeForm').style.display = 'none';
  document.getElementById('consenttagline').style.display = 'none';
  document.getElementById('consent').style.display = 'none';
  document.getElementById('changeURLButton').style.display = 'block';
});

// When the change URL button is clicked, show the form and hide the button
document.getElementById('changeURLButton').addEventListener('click', function() {
  document.getElementById('iframeForm').style.display = 'block';
  document.getElementById('consenttagline').style.display = 'block';
  document.getElementById('consent').style.display = 'block';
  document.getElementById('changeURLButton').style.display = 'none';
  document.getElementById('iframeContainer').style.display = 'none';
});

// Function to load the iframe
function loadIframe(iframeURL) {
  const iframeContainer = document.getElementById('iframeContainer');

  // Clear the container and create a new iframe
  iframeContainer.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = iframeURL;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.overflow = 'hidden';
  iframe.style.border = 'none';

  // Add the iframe to the container and show the container
  iframeContainer.appendChild(iframe);
  iframeContainer.style.display = 'block';
}

document.getElementById("cxoDashboardButton").addEventListener("click", function() {
  var iframeContainer = document.getElementById("iframeContainer");
  var iframe = document.createElement("iframe");
  iframe.src = "https://lookerstudio.google.com/embed/reporting/bb0bcc0b-258e-4ddb-b760-588d3f6a4ad3/page/Zf6WD"; // Replace "https://new-url.com" with the desired URL
  iframeContainer.innerHTML = "";
  iframeContainer.appendChild(iframe);
  iframeContainer.style.display = "block";
})

 // When the "Chat" button is clicked, load the iframe URL from storage
 document.getElementById('chatButton').addEventListener('click', function() {
  chrome.storage.sync.get('iframeURL', function(data) {
    if (data.iframeURL) {
      loadIframe(data.iframeURL);
    }
  });
});