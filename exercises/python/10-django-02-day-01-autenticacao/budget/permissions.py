# budget/permissions.py

from rest_framework.permissions import BasePermission


class IsOwnerOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Permite acesso a admin sempre
        if request.user.is_superuser:
            return True
        # Permite acesso se o objeto pertence a quem faz a requisição
        return obj.user == request.user
    
    # Neste IsOwnerOrAdmin, definimos uma classe de permissão personalizada. Se quem usa tiver permissões de administrador (is_superuser), sempre se terá acesso. Caso contrário, o acesso será apenas aos objetos que pertencem à própria pessoa, verificando se o objeto (Marriage ou Budget) tem um atributo user que corresponde ao usuário autenticado.