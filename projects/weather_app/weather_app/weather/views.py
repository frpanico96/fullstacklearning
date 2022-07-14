from django.shortcuts import render
import json
import urllib.request

# Create your views here.


def index(request):
    context = {
        'city': ''
    }
    if request.method == 'POST':
        context['city'] = request.POST['city']
        res = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/weather?q='+context['city']+'&appid=e6e1731b07fbe305e6b1c6a16aacf128').read()
        json_data = json.loads(res)
        context['city'] = context['city'].upper()
        context['country_code'] = str(json_data['sys']['country'])
        context['coordinate'] = str(json_data['coord']['lon']) + ' ' + str(json_data['coord']['lat'])
        context['temp'] = str(json_data['main']['temp']) + ' K'
        context['pressure'] = str(json_data['main']['pressure'])
        context['humidity'] = str(json_data['main']['humidity'])

    return render(request, 'index.html', context)