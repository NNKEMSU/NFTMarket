from django.db import models
from django.urls import reverse

class NFT(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название")
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name="Фото")
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    time_update = models.DateTimeField(auto_now=True, verbose_name="Дата изменения")
    is_published = models.BooleanField(default=True, verbose_name="Опубликовано")

    class Meta: #Класс, используемый для адми-панели
        verbose_name = "NFT-изображения" #Название вкладки в админ-панели
        verbose_name_plural = "NFT-изображения" #Название вкладки в админ-панели
        ordering = ['time_create', 'title'] #Сортировка данных

    def __str__(self):
        return self.title