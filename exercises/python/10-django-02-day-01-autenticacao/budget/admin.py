# budget/admin.py

from django.contrib import admin
from .models import Vendor, Budget, Marriage


class BudgetInline(admin.StackedInline):
    model = Budget
# Colocar um modelo inline com o outro significa ser capaz de criar as duas entidades na mesma tela! 

class MarriageAdmin(admin.ModelAdmin):
    inlines = [BudgetInline]


admin.site.register(Vendor)
admin.site.register(Marriage, MarriageAdmin)