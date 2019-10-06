:: (C) Copyright 2009-2019 Micro Focus or one of its affiliates.

@echo Synchronizing resources from src to target directory...
@if not exist src\main\resources\demo GOTO NOWINDIR
@copy /Y src\main\resources\sv-lab.json target\classes
@copy /Y src\main\resources\demo\*.js target\classes\demo
@GOTO OKWINDIR
:NOWINDIR
@echo WARNING: unable to synchronize VSLs and Lab configuration - run it from its directory
:OKWINDIR

:: Find Java binary
@setlocal
@set JAVA_BIN=%~dp0..\..\..\jre_x64\bin\java.exe
@if not exist "%JAVA_BIN%" >NUL 2>&1 set JAVA_BIN=%JAVA_HOME%\bin\java.exe
@if not exist "%JAVA_BIN%" >NUL 2>&1 set JAVA_BIN=%JAVA_HOME%\jre\bin\java.exe
@if not exist "%JAVA_BIN%" >NUL 2>&1 ( set JAVA_BIN=java.exe & where /q java.exe )
@if errorlevel 1 echo No Java found. Please put Java bin directory into your PATH environment or set JAVA_HOME environment variable to valid Java installation. && exit /b 1

:: Run the demo
@"%JAVA_BIN%" -cp target\classes;..\..\lib\sv-lab-client-all-5.1.1.jar -Dsv.server.endpoint=https://localhost:8445/api demo.MiBand2 %*
