# budget/views.py


from rest_framework import viewsets
from .models import Vendor, Marriage, Budget
from .serializers import VendorSerializer, MarriageSerializer, BudgetSerializer, AdminVendorSerializer


class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = AdminVendorSerializer

    def get_serializer_class(self):
        if self.action in ("create", "destroy", "update"):
            return AdminVendorSerializer
        return VendorSerializer

# Aqui estamos usando o novo Serializer AdminVendorSerializer apenas para as ações de criação, atualização e remoção de Vendors. Para a ação de leitura, continuamos usando o Serializer padrão VendorSerializer. Note que aqui, também, substituímos a implementação de um método padrão por uma nossa - é o polimorfismo em ação!

class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer


class MarriageViewSet(viewsets.ModelViewSet):
    queryset = Marriage.objects.all()
    serializer_class = MarriageSerializer
