



rem 04/10/2022 06:54 am - SSN 

cd %~dp0


set scriptKey_20220410_0654=%~1-20220410-0654
 

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%scriptKey_20220410_0654%*"
 

start npm run build
