export function cloneRequest(request: Request) {
	const url = new URL(request.url);
	return new Request(url.toString(), new Request(request, {}));
}
