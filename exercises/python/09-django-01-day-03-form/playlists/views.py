from django.shortcuts import render, redirect
from playlists.models import Music

# python3 manage.py runserver

from django.shortcuts import render
from playlists.forms import CreateMusicForm


def music(request):
    form = CreateMusicForm()

    if request.method == "POST":
        form = CreateMusicForm(request.POST)

        if form.is_valid():
            Music.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}

    return render(request, "music.html", context)


# index recebe no contexto todos os objetos Music
def index(request):
    context = {"musics": Music.objects.all()}
    return render(request, "home.html", context)