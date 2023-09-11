from django.db import models


class Singer(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Music(models.Model):
    name = models.CharField(max_length=50)
    recorded_at = models.DateField()
    length_in_seconds = models.IntegerField()
    singer = models.ForeignKey(Singer, on_delete=models.CASCADE, related_name="musics")

    def __str__(self):
        return self.name


class Playlist(models.Model):
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    musics = models.ManyToManyField("Music", related_name="playlists")

    def add_music(self, music):
        self.musics.add(music)
        self.save()

    def remove_music(self, music):
        self.musics.remove(music)
        self.save()

    def __str__(self):
        return self.name
    
    # O relacionamento entre os modelos Singer e Music é <1:N>, pois uma música pode pertencer a apenas uma pessoa artista, mas cada artista pode ter várias músicas. Enquanto isso, o relacionamento entre Musice Playlist é de <N:N>, dado que uma música pode estar em várias playlists e uma playlist pode ter várias músicas.

#     Com os modelos definidos, podemos parar o servidor com o atalho ctrl+ c e logo em seguida criar as migrations e aplicá-las ao banco de dados com os comandos:

# python3 manage.py makemigrations
# python3 manage.py migrate