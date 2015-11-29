import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

let route_registry = new CreateRouteRegistry();


route_registry.register(
	[
		{
			action: 'REQUEST_CONVERSATION',
			paths: ['/api/users/3/', /api/conversations/3/],
		},
		{
			action: 'GET_BOOKINGS',
			paths: ['/api/users/3/', /api/conversations/3/],
		}
	]
)

route_registry.get('REQUEST_CONVERSATION')
			  .then(function(res) {

			  });