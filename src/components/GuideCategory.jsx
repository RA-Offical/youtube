import React from "react";
import { Guide } from "./";

const GuideCategory = (props) => {
	const { GuideHeading, guideItems } = props;
	return (
		<div>
			<h1>{GuideHeading}</h1>
			{guideItems.map((guideItem) => {
				return <Guide key={guideItem.id} {...guideItem} />;
			})}
		</div>
	);
};

export default GuideCategory;
