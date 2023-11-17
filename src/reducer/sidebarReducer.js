const sidebarReducer = (state, action) => {
	switch (action.type) {
		// change guide items toggle selection state
		case "CHANGE_GUIDE_SELECTION": {
			// getting data from payload
			const { guideId } = action.payload;
			// making a copy of state
			const updatedSidebarData = [...state];
			// finding the guide item by id
			updatedSidebarData.forEach((category) =>
				category.guideItems.forEach((guideItem) => {
					if (guideItem.id === guideId) {
						guideItem.isSelected = true;
					} else {
						guideItem.isSelected = false;
					}
				})
			);
			return updatedSidebarData;
		}
	}

	return state;
};

export default sidebarReducer;
