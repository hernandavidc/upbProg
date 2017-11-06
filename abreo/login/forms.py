from django import forms

class loginForm(forms.Form):
	usuario = forms.CharField(required=True)
	contraseña = forms.CharField(widget = forms.PasswordInput)
