$(document).ready(function () {
	M.AutoInit();
	$(".tabs").tabs({
		swipeable: true,
	});

	$(".starter a").on("click", function (e) {
		document.querySelector(".top-left").style.transform =
			"translate(-100%,-100%)";
		document.querySelector(".bottom-left").style.transform =
			"translate(-100%,100%)";
		document.querySelector(".top-right").style.transform =
			"translate(100%,-100%)";
		document.querySelector(".bottom-right").style.transform =
			"translate(100%,100%)";
		document.querySelector(".starter a").classList.add("beyond");
		document.querySelector(".mobile-nav-btn i").style.color = "#230099";
		document.querySelector(".mobile-nav-btn i").style.textShadow =
			"0 0 2px #19016b";
		setTimeout(() => {
			document.querySelector(".starter").classList.add("hide");
		}, 450);
	});

	document.addEventListener("mousemove", (e) => {
		let x = e.clientX;
		let y = e.clientY;
		document.querySelector(".cursor").style.top = y + "px";
		document.querySelector(".cursor").style.left = x + "px";
	});

	document.querySelectorAll("a").forEach((el) => {
		el.addEventListener("mouseover", () => {
			document.querySelector(".cursor").style.width = "40px";
			document.querySelector(".cursor").style.height = "40px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(1.5px 1.5px 5px #19016b) blur(1.5px)";
			document.querySelector(".cursor").style.border = "5px #230099 solid";
		});
	});

	document.querySelectorAll("a").forEach((el) => {
		el.addEventListener("mouseleave", () => {
			document.querySelector(".cursor").style.width = "25px";
			document.querySelector(".cursor").style.height = "25px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(0 0 2px #19016b)";
			document.querySelector(".cursor").style.border = "3px #230099 solid";
		});
	});
	document.querySelectorAll(".carousel-item").forEach((el) => {
		el.addEventListener("mouseover", () => {
			document.querySelector(".cursor").style.width = "40px";
			document.querySelector(".cursor").style.height = "40px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(1.5px 1.5px 5px #19016b) blur(1.1px)";
			document.querySelector(".cursor").style.border = "5px #230099 solid";
		});
	});

	document.querySelectorAll(".carousel-item").forEach((el) => {
		el.addEventListener("mouseleave", () => {
			document.querySelector(".cursor").style.width = "25px";
			document.querySelector(".cursor").style.height = "25px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(0 0 2px #19016b)";
			document.querySelector(".cursor").style.border = "3px #230099 solid";
		});
	});
	document.querySelectorAll(".nav li").forEach((el) => {
		el.addEventListener("mouseover", () => {
			document.querySelector(".cursor").style.width = "40px";
			document.querySelector(".cursor").style.height = "40px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(1.5px 1.5px 5px #19016b) blur(1.1px)";
			document.querySelector(".cursor").style.border = "5px #230099 solid";
		});
	});

	document.querySelectorAll(".nav li").forEach((el) => {
		el.addEventListener("mouseleave", () => {
			document.querySelector(".cursor").style.width = "25px";
			document.querySelector(".cursor").style.height = "25px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(0 0 2px #19016b)";
			document.querySelector(".cursor").style.border = "3px #230099 solid";
		});
	});
	document.querySelectorAll(".nav a").forEach((el) => {
		el.addEventListener("mouseover", () => {
			document.querySelector(".cursor").style.width = "40px";
			document.querySelector(".cursor").style.height = "40px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(1.5px 1.5px 5px #19016b) blur(1.1px)";
			document.querySelector(".cursor").style.border = "5px #230099 solid";
		});
	});

	document.querySelectorAll(".nav a").forEach((el) => {
		el.addEventListener("mouseleave", () => {
			document.querySelector(".cursor").style.width = "25px";
			document.querySelector(".cursor").style.height = "25px";
			document.querySelector(".cursor").style.filter =
				"drop-shadow(0 0 2px #19016b)";
			document.querySelector(".cursor").style.border = "3px #230099 solid";
		});
	});

	window.addEventListener("resize", (e) => {
		var elems = document.querySelectorAll(".carousel");
		var instances = M.Carousel.init(elems, {});
		if (window.innerWidth < 1140) {
			document.querySelector("#testimonial .row").classList.add("carousel");
			document.querySelectorAll("#testimonial .col").forEach((el) => {
				el.classList.add("carousel-item");
			});
			var elems = document.querySelectorAll(".carousel");
			var instances = M.Carousel.init(elems, {});
		} else {
			document.querySelector("#testimonial .row").classList.remove("carousel");
			document.querySelectorAll("#testimonial .col").forEach((el) => {
				el.classList.remove("carousel-item");
				el.style.transform = "none";
				el.style.opacity = 1;
			});
			instances.forEach((e) => e.destroy());
		}
	});
	window.addEventListener("onload", (e) => {
		var elems = document.querySelectorAll(".carousel");
		var instances = M.Carousel.init(elems, {});
		if (window.innerWidth < 1140) {
			document.querySelector("#testimonial .row").classList.add("carousel");
			document.querySelectorAll("#testimonial .col").forEach((el) => {
				el.classList.add("carousel-item");
			});
			var elems = document.querySelectorAll(".carousel");
			var instances = M.Carousel.init(elems, {});
		} else {
			document.querySelector("#testimonial .row").classList.remove("carousel");
			document.querySelectorAll("#testimonial .col").forEach((el) => {
				el.classList.remove("carousel-item");
				el.style.transform = "none";
				el.style.opacity = 1;
			});
			instances.forEach((e) => e.destroy());
		}
	});

	document.querySelector(".feature a").addEventListener("click", () => {
		document
			.querySelector(".tap-target")
			.parentElement.classList.toggle("open");
	});
	document
		.querySelector(".tap-target-wrapper a.btn-floating")
		?.addEventListener("click", () => {
			document
				.querySelector(".tap-target")
				.parentElement.classList.toggle("open");
		});

	setTimeout(() => {
		$(".loader").fadeOut();
	}, 1500);

	document.querySelector(".info").addEventListener("mousemove", (e) => {
		const circle = document.getElementsByClassName("info-cursor")[0];
		document.querySelector(".cursor").style.opacity = "0";
		circle.style.opacity = 1;
		// Update the circle position
		circle.style.left = `${e.clientX}px`;
		circle.style.top = `${e.clientY}px`;

		// Show the circle
		circle.style.width = "500px";
		circle.style.height = "500px";
	});
	document.querySelector(".info").addEventListener("mouseleave", (e) => {
		const circle = document.getElementsByClassName("info-cursor")[0];
		document.querySelector(".cursor").style.opacity = "1";

		circle.style.opacity = 0;

		// Hide the circle
		circle.style.width = "200px";
		circle.style.height = "200px";
	});
});
