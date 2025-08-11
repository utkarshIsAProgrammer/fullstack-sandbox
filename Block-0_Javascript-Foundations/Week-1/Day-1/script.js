console.log(
	"JavaScript connected. Open DevTools > Console to see this message."
);

const btn = document.getElementById("logBtn");
btn.addEventListener("click", () => {
	console.log("Button clicked at", new Date().toLocaleTimeString());
});
