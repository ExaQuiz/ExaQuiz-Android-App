@echo off

:: Gradle startup script for Windows

set DIR=%~dp0
set APP_BASE_NAME=%~n0
set APP_HOME=%DIR%

set WRAPPER_JAR=%APP_HOME%gradle\wrapper\gradle-wrapper.jar

if not exist "%WRAPPER_JAR%" (
  echo The Gradle wrapper jar file could not be found: %WRAPPER_JAR%
  exit /b 1
)

java -jar "%WRAPPER_JAR%" %*

