@echo off
set var=%1
set extract=%var:~6,-1%
Start C:\putty\putty.exe -ssh %extract% -pw "EnvPasswordHere"
