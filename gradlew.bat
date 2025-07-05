@echo off
:: Gradle start up script for Windows

set DIR=%~dp0
set APP_BASE_NAME=%~n0

:: Check if gradle-wrapper.jar exists
if not exist "%DIR%gradle\wrapper\gradle-wrapper.jar" (
  echo Gradle wrapper jar not found. Please regenerate it.
  exit /b 1
)

java -jar "%DIR%gradle\wrapper\gradle-wrapper.jar" %*
