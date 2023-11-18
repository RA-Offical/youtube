import React from "react";
import { Guide } from "./";

const GuideCategory = (props) => {
	const { GuideHeading, guideItems, nestedGuide, isNested } = props;

	const isGuideNested = Boolean(nestedGuide);

	return (
		<div
			className={`${
				isNested
					? "first:mt-0 first:pt-0 first:border-t-0 mt-3 pt-3 border-t border-gray-100"
					: "px-3 py-3 border-b border-gray-100"
			}`}
		>
			{isGuideNested ? (
				nestedGuide.map((guide) => {
					return (
						<GuideCategory
							key={guide.id}
							{...guide}
							isNested={true}
						/>
					);
				})
			) : (
				<>
					{typeof GuideHeading === "function" ? <GuideHeading /> : ""}
					{guideItems.map((guideItem) => {
						return <Guide key={guideItem.id} {...guideItem} />;
					})}
				</>
			)}
		</div>
	);
};

export default GuideCategory;
