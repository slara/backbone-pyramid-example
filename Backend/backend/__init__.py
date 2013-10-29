from pyramid.config import Configurator

from wsgicors import CORS


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include('pyramid_chameleon')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('riskzone', '/riskzone')
    config.scan()

    return CORS(config.make_wsgi_app(), headers="*", methods="*", maxage="180", origin="*")
