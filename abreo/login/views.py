from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response
from login.forms import loginForm

# Create your views here.
def loginView(request):
	if request.method == 'POST':
		formulario = loginForm(request.POST)
		if formulario.is_valid():
			usuario = formulario.cleaned_data['usuario']
			contraseña = formulario.cleaned_data['contraseña']
			if usuario == "abreito" and contraseña == "Redes852..":
				return HttpResponseRedirect("bien/")
			else:
				return HttpResponse("Login incorrecto")
	else:
		formulario= loginForm()
	context = {'formulario':formulario}
	return render(request, 'login.html',context)
