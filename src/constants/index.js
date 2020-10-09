export const BASE_URL = {
  "characters": "https://rickandmortyapi.com/api/character/",
  "locations": "https://rickandmortyapi.com/api/location/",
  "episodes": "https://rickandmortyapi.com/api/episode/"
};

export const ENDPOINTS = {
	"count": "count=",
	"pages": "pages=",
	"next": "next=",
	"prev": "prev="
}

export const getQueryString = (resource, query, args) => {
	if (resource && (resource === "characters" || resource === "locations" || resource === "episodes")) {
		if (query && (query === "count" || query === "pages" || query === "next" || query==="previous")) {
			return `${BASE_URL[resource]}?${ENDPOINTS[query]}${args}`;
		} else {
			return `${BASE_URL[resource]}`;
		}
	} else {
		return false;
	}
};