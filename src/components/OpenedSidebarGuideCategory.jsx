import React from "react";
import { OpenedSidebarGuide } from ".";

const OpenedSidebarGuideCategory = (props) => {
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
						<OpenedSidebarGuideCategory
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
						return (
							<OpenedSidebarGuide
								key={guideItem.id}
								{...guideItem}
							/>
						);
					})}
				</>
			)}
		</div>
	);
};

export default OpenedSidebarGuideCategory;
