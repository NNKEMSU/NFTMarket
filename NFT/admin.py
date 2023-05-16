from django.contrib import admin

from .models import *

class NFTAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'time_create', 'photo', 'is_published')
    list_display_links = ('id', 'title')
    # search_fields = ('title')
    list_editable = ('is_published',)
    list_filter = ('time_create', 'is_published')


admin.site.register(NFT, NFTAdmin)