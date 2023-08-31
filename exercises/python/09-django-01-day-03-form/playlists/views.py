from django.shortcuts import render, redirect
from playlists.models import Music

# python3 manage.py runserver

from django.shortcuts import render
from playlists.forms import CreateMusicModelForm


def music(request):
    form = CreateMusicModelForm()

    if request.method == "POST":
        form = CreateMusicModelForm(request.POST)

        if form.is_valid():
            Music.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}

    return render(request, "music.html", context)


# index recebe no contexto todos os objetos Music
def index(request):
    context = {"musics": Music.objects.all()}
    return render(request, "home.html", context)