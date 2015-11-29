export class RequestRegistry {

	constructor() {
		this.registry = {}
	}

	register(event, routes, data_path) {

		let fetch_path = _get_fetch_path(routes);

		this.registry[event] =  {
			fetch_path,
			data_path
		}

		return this.registry[event];
	}

	get(event) {
		return this.registry[event];
	}

	_get_fetch_path(routes) {
		return routes.join('&')
	}
}
