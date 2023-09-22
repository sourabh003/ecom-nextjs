import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Search() {
	const [searchString, setSearchString] = useState("");
	const [searchResults, setSearchResults] = useState(null);

	const handleChange = (e) => {
		setSearchString(e.target.value);
		setSearchResults([1]);
	};

	const handleClose = () => {
		setSearchString("");
		setSearchResults(null);
	};

	return (
		<div className="relative">
			<div className="flex items-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 bg-gray-200">
				<FaSearch size={20} />
				<input
					autoComplete="off"
					className="w-full bg-gray-200 ml-5 focus:outline-none p-1"
					id="inline-full-name"
					type="text"
					value={searchString}
					placeholder="Search product, category or brand"
					onChange={handleChange}
				/>
				{searchString !== "" && (
					<button onClick={handleClose}>
						<FaTimes />
					</button>
				)}
			</div>

			{searchResults && (
				<div className="search-results-sec">
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
					<div>test</div>
				</div>
			)}
		</div>
	);
}
