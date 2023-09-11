from rest_framework import viewsets
from .models import Singer, Music, Playlist
from .serializers import SingerSerializer, MusicSerializer, PlaylistSerializer


class SingerViewSet(viewsets.ModelViewSet):
    # Dentro das classes, definimos os atributos queryset e serializer_class. O primeiro é responsável por definir o conjunto de objetos que serão retornados quando a view for acessada. Já o segundo, define qual serializador será utilizado para serializar os dados retornados.
    queryset = Singer.objects.all()
    serializer_class = SingerSerializer


class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
