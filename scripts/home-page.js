const initHomePage = () => {
	const filterItems = document.querySelectorAll(".candles__filters-item");
	const candleItems = document.querySelectorAll(".candles__item");
	const searchInput = document.querySelector(".candles__search-input");

	let activeFilter = null;

	filterItems.forEach(item => {
		item.addEventListener("click", () => {
			const type = item.dataset.type;

			if (activeFilter === type) {
				activeFilter = null;
				item.classList.remove("candles__filters-item_active");
			} else {
				activeFilter = type;

				filterItems.forEach(btn => btn.classList.remove("candles__filters-item_active"));
				item.classList.add("candles__filters-item_active");
			}

			applyFilters();
		});
	});

	searchInput.addEventListener("input", () => {
		applyFilters();
	});

	function applyFilters() {
		const query = searchInput.value.toLowerCase();

		candleItems.forEach(item => {
			const itemType = item.dataset.type;
			const itemName = item.querySelector(".candles__item-name").textContent.toLowerCase();

			const matchesType = !activeFilter || itemType === activeFilter;
			const matchesSearch = !query || itemName.includes(query);

			if (matchesType && matchesSearch) {
				item.closest(".col-3").style.display = "block";
			} else {
				item.closest(".col-3").style.display = "none";
			}
		});
	}
};

initHomePage();