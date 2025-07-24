@echo off
setlocal
set DIR=%~dp0
set JAVA_EXE=%JAVA_HOME%\\bin\\java.exe
if exist "%JAVA_EXE%" (
  "%JAVA_EXE%" -classpath "%DIR%gradle\\wrapper\\gradle-wrapper.jar" org.gradle.wrapper.GradleWrapperMain %*
) else (
  echo ERROR: JAVA_HOME is not set correctly or Java is missing.
  exit /b 1
)
