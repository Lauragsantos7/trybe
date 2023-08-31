# playlists/forms.py
from django import forms
from playlists.validators import validate_music_length

class CreateMusicForm(forms.Form):
    name = forms.CharField(
        max_length=50,
        label="Nome da música",
    )
    recorded_at = forms.DateField(
        label="Data de gravação",
        widget=forms.DateInput(attrs={"type": "date"}),
        initial="2023-07-06",
    )
    # o parâmetro attrs passado para o widget é usado para atribuir um conjunto chave: valor à tag que está sendo inserida no template. Nesse caso, definimos o tipo do input como data type: date, mas poderíamos, adicionalmente, definir uma classe: class: inputDate.

    # também é possível usar o parâmetro help_text para indicar uma frase de auxílio no preenchimento do campo. Experimente!
    
    length_in_seconds = forms.IntegerField(
        validators=[validate_music_length],
        label="Duração em segundos",
    )

class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()