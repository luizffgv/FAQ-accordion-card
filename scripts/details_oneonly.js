let oneonly_detail_parents = document.getElementsByClassName("details-oneonly")

for (let parent of oneonly_detail_parents) {
	elems = Array.from(parent.getElementsByTagName("details"))

	for (let elem_i = 0; elem_i < elems.length; ++elem_i) {
		let elem = elems[elem_i]

		elem.addEventListener("toggle", () => {
			if (elem.open)
				// splice would liekly be faster for a considerable amount of
				//   elements, which is unlikely to be the case.
				elems.forEach((elem_cur) => {
					if (elem_cur != elem) elem_cur.removeAttribute("open")
				})
		})
	}
}