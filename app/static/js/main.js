function reloadLibrary() {
	if (!confirm("Are you sure you want to initiate a library scan?")) {
		return;
	}
	fetch("/reload_library", {
		method: "POST",
	})
		.then((response) => response.json())
		.then((data) => {
			alert(data.message);
		})
		.catch((error) => {
			console.error("Error:", error);
			alert("An error occurred while trying to reload the library.");
		});
}

function sendToQB(event, link, title) {
	const button = event.target;
	button.disabled = true;
	button.innerText = "Sending...";

	fetch("/send", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ link: link, title: title }),
	})
		.then((response) => response.json())
		.then((data) => {
			alert(data.message);
			button.disabled = false;
			button.innerText = "Download";
		})
		.catch((error) => {
			console.error("Error:", error);
			alert("Failed to send download request.");
			button.disabled = false;
			button.innerText = "Download";
		});
}

function deleteTorrent(torrentId) {
	if (!confirm("Are you sure you want to remove this torrent? The downloaded files will NOT be deleted.")) {
		return;
	}

	fetch("/delete", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: torrentId }),
	})
		.then((response) => response.json())
		.then((data) => {
			alert(data.message);
			if (data.message.includes("successfully")) {
				location.reload();
			}
		})
		.catch((error) => {
			console.error("Error:", error);
			alert("An error occurred.");
		});
}

function showLoadingSpinner() {
	const button = document.getElementById("search-button"); // Add an ID to your button
	const buttonSpinner = document.getElementById("button-spinner");

	button.disabled = true;
	buttonSpinner.style.display = "inline-block";
}

function hideLoadingSpinner() {
	const button = document.getElementById("search-button");
	const buttonSpinner = document.getElementById("button-spinner");

	if (button) {
		// Check if the button exists before trying to modify it
		button.disabled = false;
	}
	if (buttonSpinner) {
		buttonSpinner.style.display = "none";
	}
}
