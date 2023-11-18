const sidebarReducer = (state, action) => {
	switch (action.type) {
		// change guide items toggle selection state
		case "CHANGE_GUIDE_SELECTION": {
			// getting data from payload
			const { guideId } = action.payload;

			// updating the sidebar data
			const updatedSidebarData = state.map((category) => {
				if (category.nestedGuide) {
					return {
						...category,
						nestedGuide: category.nestedGuide.map((category) => ({
							...category,
							guideItems: category.guideItems.map(
								(guideItem) => ({
									...guideItem,
									isSelected: guideItem.id === guideId,
								})
							),
						})),
					};
				} else {
					return {
						...category,
						guideItems: category.guideItems.map((guideItem) => ({
							...guideItem,
							isSelected: guideItem.id === guideId,
						})),
					};
				}
			});
			return updatedSidebarData;
		}
	}

	return state;
};

export default sidebarReducer;
