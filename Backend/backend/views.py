from pyramid.view import view_config


@view_config(route_name='home', renderer='json')
def my_view(request):
    return {'project': 'Backend'}


@view_config(route_name='riskzone', renderer='json')
def riskzone(request):
    print "request!", request.method
    if request.method == 'PUT':
        print 'PUT:', request.body
        return request.body
    return {'id': 0, 'name': 'line'}
