# budget/views.py


from rest_framework import viewsets
from .models import Vendor, Marriage, Budget
from .serializers import VendorSerializer, MarriageSerializer, BudgetSerializer, AdminVendorSerializer
# from rest_framework.authentication import BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from .permissions import IsOwnerOrAdmin


class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = AdminVendorSerializer
    authentication_classes = [TokenAuthentication]

    def get_serializer_class(self):
        if self.action in ("create", "destroy", "update"):
            return AdminVendorSerializer
        return VendorSerializer

# Aqui estamos usando o novo Serializer AdminVendorSerializer apenas para as ações de criação, atualização e remoção de Vendors. Para a ação de leitura, continuamos usando o Serializer padrão VendorSerializer. Note que aqui, também, substituímos a implementação de um método padrão por uma nossa - é o polimorfismo em ação!

class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsOwnerOrAdmin]
 
 
    def get_queryset(self):
        if self.request.user.is_superuser:
            return Budget.objects.all()
        else:
            return Budget.objects.filter(user=self.request.user)


class MarriageViewSet(viewsets.ModelViewSet):
    queryset = Marriage.objects.all()
    serializer_class = MarriageSerializer

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsOwnerOrAdmin]
 
 
    def get_queryset(self):
        """
        Quem for admin vê todos os casamentos.
        Caso contrário, a pessoa só vê os próprios casamentos.
        """
        if self.request.user.is_superuser:
            return Marriage.objects.all()
        else:
            return Marriage.objects.filter(user=self.request.user)

